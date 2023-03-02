import React from 'react'

enum ActionType {
    SPACE,
    NOSPACE,
}

type Data = {
    word: String,
    user_answer: ActionType,
    correct_answer: ActionType,
    time: number
}

type Props = {
    setState: (value: number | 0) => void,
    state: number,
    setData: (value: Data[]) => void,
    data: Data[],
    words: string[]
}

const Game:React.FC<Props> = ({setState, state, setData, data, words}) => {
    const [word1, setWord1] = React.useState<number>(7)
    const [word2, setWord2] = React.useState<number>(7)
    /* const [word3, setWord3] = React.useState<number>(7) */
    const [currentWord, setCurrentWord] = React.useState<string>("start")
    const [score, setScore] = React.useState<number>(0)
    const [time, setTime] = React.useState<Date|null>(null)
    const [counter, setCounter] = React.useState<number>(0)
    const [interval, setIntervalCounter] = React.useState<string | number | NodeJS.Timeout | undefined>()

    const nextWord = React.useCallback((addScore:boolean=false)=>{
        
        if(currentWord===words[1] && addScore) setScore(score+1)

        if(currentWord!=="start"){
            var newData:Data = {
                word: currentWord,
                user_answer: addScore ? ActionType.NOSPACE : ActionType.SPACE,
                correct_answer: currentWord===words[0] ? ActionType.SPACE : ActionType.NOSPACE,
                time: counter
            }
            
            setData(data.concat(newData))
        }

        setCounter(0)
        setTime(new Date())

        const isWord1 = word1>0
        const isWord2 = word2>0
        
        if(!isWord1 && isWord2){
            setCurrentWord(words[1])
            setWord2(word2-1)
            return
        }

        if(!isWord2 && isWord1){
            setCurrentWord(words[0])
            setWord1(word1-1)
            return
        }

        if(isWord1 && isWord2){
            const prob = Math.random()
            setCurrentWord(" ")
            if(prob<0.5) {
                setTimeout(()=>{
                    setCurrentWord(words[0])
                }, 50)
                if(currentWord!=="start") setWord1(word1-1)
            }
            else {
                setTimeout(()=>{
                    setCurrentWord(words[1])
                }, 50)
                if(currentWord!=="start") setWord2(word2-1)
            }
        }
        
    },[word1, word2, currentWord, counter]) 

    React.useEffect(()=>{

        if(time===null) return

        clearInterval(interval) 

        if(word1>0 || word2>0)
        setIntervalCounter(setInterval(()=>{
            const current:Date = new Date()
            const seconds:number = parseFloat((
                (current.getTime() - time.getTime()) / 1000
            ).toFixed(2))
            setCounter(seconds)
            // console.log(seconds)
        },10))

    }, [time, word1, word2])

    React.useEffect(()=>counter>=1?nextWord(true):undefined,[counter, nextWord])

    React.useEffect(()=>(word1===0 && word2===0)?setState(state+1):undefined,[setState, word1, word2])

    React.useEffect(()=>{

        document.body.onkeyup = (e)=>{
            const space = e.code==='Space'

            if(!space) return
            if(currentWord === words[0] && counter<=1) setScore(score+1)
            nextWord()

        }
    },[nextWord])

    return (
        <div className='mt-[60px]'>
            {/* <p className="mt-2 text-center text-md text-gray-600">
                Skor:{' '}
                <span className="font-medium text-white hover:text-gray-300">
                {score}
                </span>
                {' '}||{' '}Counter:{' '}
                <span className="font-medium text-white hover:text-gray-300">
                {counter}
                </span>
            </p> */}

            {/* <p className="mt-2 text-center text-md text-gray-600">
                {words[0]}:{' '}
                <span className="font-medium text-white hover:text-gray-300">
                {word1}
                </span>
                {' '}||{' '}{words[1]}:{' '}
                <span className="font-medium text-white hover:text-gray-300">
                {word2}
                </span>
            </p> */}
            {
                currentWord === words[1]?
                <h2 className="mt-6 text-center text-[100px] font-extrabold text-white">{currentWord}</h2>:
                <h2 className="mt-6 text-center text-[100px] font-extrabold text-white">{currentWord}</h2>
            }
        </div>
    )
}

export default Game