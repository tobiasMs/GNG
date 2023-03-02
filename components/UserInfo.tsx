import React from "react"

type UserData = {
    name: String,
    age: String,
    gender: String
}

type Props = {
    setState: (value: number | 0) => void,
    setUserData: (value: UserData) => void,
    userData: UserData
}

const UserInfo:React.FC<Props> = ({setState, userData, setUserData}) => {

    return (
        <>

        <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-300">
            Nama 
            </label>
            <div className="mt-1">
            <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                onChange={(e)=>{
                    setUserData({
                        name: e.target.value,
                        age: userData.age,
                        gender: userData.gender
                    })
                }}
                required
                className="appearance-none block w-full bg-gray-900 text-white px-3 py-2 border border-gray-400 rounded-md placeholder-gray-300 focus:outline-none focus:ring-white focus:border-white sm:text-lg"
            />
            </div>
        </div>
    
        <div>
            <label htmlFor="age" className="block text-lg font-medium text-gray-300">
            Umur 
            </label>
            <div className="mt-1">
            <input
                id="age"
                name="age"
                type="text"
                autoComplete="age"
                onChange={(e)=>{
                    setUserData({
                        name: userData.name,
                        age: e.target.value,
                        gender: userData.gender
                    })
                }}
                required
                className="appearance-none block w-full bg-gray-900 text-white px-3 py-2 border border-gray-400 rounded-md placeholder-gray-300 focus:outline-none focus:ring-white focus:border-white sm:text-lg"
            />
            </div>
        </div>
        <div>
            <label htmlFor="gender" className="block text-lg font-medium text-gray-300">
            Jenis Kelamin 
            </label>
            <div className="mt-1">
                <select
                    id="gender"
                    name="gender"
                    className="block w-full pl-3 pr-10 bg-gray-900 text-white py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-lg rounded-md"
                    defaultValue="Laki-laki"
                    onChange={(e)=>{
                        setUserData({
                            name: userData.name,
                            age: userData.age,
                            gender: e.target.value
                        })
                    }}
                    required
                >
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                </select>
            {/* <input
                id="gender"
                name="gender"
                type="text"
                autoComplete="gender"
                onChange={(e)=>{
                    setUserData({
                        name: userData.name,
                        age: userData.age,
                        gender: e.target.value
                    })
                }}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm shadow-white placeholder-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-lg"
            /> */}
            </div>
        </div>

        <div>
            <button
            onClick={()=>setState(1)}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-medium text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
            Lanjut
            </button>
        </div>
        </>
    )
}

export default UserInfo