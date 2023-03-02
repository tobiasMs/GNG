import React from 'react'
import xlsx from 'json-as-xlsx'

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

type UserData = {
    name: String,
    age: String,
    gender: String
}

type Props = {
    setState: (value: number | 0) => void,
    setData: (value: Data[]) => void,
    data: Data[],
    userData: UserData
}

const Finish:React.FC<Props> = ({setState, setData, userData, data}) => {
    const [notDownloaded, setNotDownloaded] = React.useState<boolean>(true)

    let testResult = [
        {
            sheet: "Data Diri",
            columns: [
                { label: "Nama", value: "name" },
                { label: "Umur", value: "age" }, 
                { label: "Jenis Kelamin", value: "gender" },
            ],
            content: [
                {name: userData.name, age:userData.age, gender: userData.gender}
            ],
        },
        {
            sheet: "Hasil Test",
            columns: [
                { label: "Kata", value: "word" },
                { label: "Jawaban User", value: (row:Data)=>(row.user_answer?"PASS":"SPACE") }, 
                { label: "Jawaban Benar", value: (row:Data)=>(row.correct_answer?"PASS":"SPACE") },
                { label: "Waktu", value: "time" },
            ],
            content: data,
        },
      ]
      
    let settings = {
        fileName: "Result",
        extraLength: 3,
        writeMode: "writeFile",
        writeOptions: {},
    }
    return (
        <div>
            <h2 className="mb-6 text-center text-xl font-extrabold text-white">Finished Test!</h2>
            <div className='grid gap-2 grid-cols-2'>
                <button 
                onClick={(e)=>{
                    e.preventDefault()
                    setState(0)
                    setData([])
                }}
                className="w-full flex justify-center py-2 px-4 border border-white rounded-md shadow-sm shadow-white text-lg font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    Get another test
                </button>
                <button 
                onClick={(e)=>{
                    e.preventDefault()
                    // @ts-ignore
                    xlsx(testResult, settings, ()=>setNotDownloaded(true))
                }}
                disabled={!notDownloaded}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-medium text-black bg-white hover:bg-gray-300 disabled:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    {
                        notDownloaded?"Download Data":"Data is Downloaded"
                    }
                </button>

            </div>
            {/* <br></br> */}
            {/* {
                JSON.stringify(data)
            } */}
        </div>
    )
}

export default Finish