
import { useContext } from "react";
import Spinner from "../layouts/spinner";
import UserItem from "./UserItem";
import Githubcontext from "../../context/github/GithubContext";

const UserResult=()=>{
 const {loading,users}=useContext(Githubcontext)

    
    if(!loading){
        return(
            <div className="grid grid-cols-1 gap-8 xl:grid-col-4 lg:grid-cols-3 md:grid-cols-2">
                {
                    users.map(data=>(
                        <UserItem key={data.id} user={data}/>
                    ))
                }
            </div>
         )
    }else {
        return <Spinner/>
    }
   
}
export default UserResult;