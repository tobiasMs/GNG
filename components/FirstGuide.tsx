import React from "react"

type Props = {
    setState: (value: number | 0) => void,
    state: number
}

const FirstGuide:React.FC<Props> = ({setState, state}) => {

    return (
        <>
        <div>
            {/* <h2 className="mt-6 text-center text-xl font-extrabold text-white">Petunjuk Sesi</h2> */}
            <p className="mt-2 text-center text-5xl text-gray-400">
                Kamu akan mendapatkan 12 (DUA BELAS) SESI <br/>
                TES yang berbeda. <br/>
                Setiap sesi akan ditampilkan kata-kata yang menjadi TARGET dan kata lain yang menjadi <br/>
                PENGALIH. <br/>
                Tugasmu adalat KLIK SPACE BAR secepat mungkin ketika muncal kata yang menjadi <br/>
                TARGET pada setiap sesinya. <br/>
                JANGAN KLIK APAPUN, JIKA MUNCUL SELAIN KATA TARGET. <br/>
                Ikuti setiap sesi hingga tuntas
            </p>
            <button
            onClick={()=>setState(state+1)}
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
            Lanjut 
            </button>
        </div>
        </>
    )
}

export default FirstGuide