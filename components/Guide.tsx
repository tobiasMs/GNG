import React from "react"

type Props = {
    setState: (value: number | 0) => void,
    state: number,
    words: string[]
}

const Guide:React.FC<Props> = ({setState, state, words}) => {

    return (
        <>
        <div>
            <h2 className="mt-4 text-center text-xl font-extrabold text-white">Petunjuk Sesi</h2>
            <p className="mt-2 text-center text-lg text-gray-400">
                Target =  <span className="text-white font-bold">{words[0]}</span>. <br/>
                Klik spacebar bila kata yang menjadi target muncul. <br/><br/>
                Jangan klik apapun jika muncul bukan kata target. <br/><br/>
                Lakukan terus seperti itu sampai sesi berakhir<br/><br/>
                {/* Tidak perlu menekan spasi untuk kata <span className="text-white font-bold">{words[1]}</span>. */}
            </p>
            <button
            onClick={()=>setState(state+1)}
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
            Lanjutkan 
            </button>
        </div>
        </>
    )
}

export default Guide