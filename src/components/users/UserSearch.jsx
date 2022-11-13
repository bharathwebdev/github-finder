import { useState,useContext} from "react"

import Githubcontext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext";
import { SearchUsers } from "../../context/github/GithubAction";

function UserSearch() {
    const [text,settext]=useState('')
    
    const {users,dispatch} = useContext(Githubcontext);
    const {setAlert} = useContext(AlertContext)
    // console.log(initial.users)
    
  const handlechange=(e)=> settext(e.target.value)

const handleSubmit=async(e)=>{
    e.preventDefault()
    if(text===''){
        setAlert("please enter something",'error')
    }else {

        dispatch({
            type:'SET_LOADING',
        })
        //todo- something 
        
       const users = await SearchUsers(text);
    
       dispatch({
        type:'GET_USERS',
        payload:users
       })
        
        
    }
}
const handleClear=()=>{
     dispatch({
        type:'CLEAR_USERS'
     })
}
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input
                         className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                        type='text' 
                        placeholder='Search...'
                        value={text}
                        onChange={handlechange}
                        />
                        <button 
                        type="submit" 
                        className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        {
        (users.length>0)&&
        <div>
            <button className="btn btn-ghost btn-lg clear-sh" onClick={handleClear}>clear</button>
        </div>
        }
       
    </div>
  )
}

export default UserSearch