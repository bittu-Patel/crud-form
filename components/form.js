import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"

const formReducer = (state,event) => {
return{
  ...state,
  [event.target.name]:event.target.value
}
}

export default function form(){

    const [formData,setFormData] = useReducer( formReducer,{})

    const handleSubmit = (e) => {
        e.preventDefault();
   console.log(formData)
    }
    return(
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded:md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded:md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded:md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded:md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} name="date" className="border w-full px-5 py-3 focus:outline-none rounded:md" placeholder="Date" />
            </div>
            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                     Active
                </label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={setFormData} value="Inactive" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                     Inactive
                </label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
                </button>
        </form>
    )
}