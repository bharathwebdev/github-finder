import UserResult from "../users/userResult";
import {FaGithub}from 'react-icons/fa'
import UserSearch from "../users/UserSearch";
import Githubcontext from "../../context/github/GithubContext";
import { useContext } from "react";
import Spinner from "../layouts/spinner";
const Home=()=>{
    const {users ,loading} = useContext(Githubcontext)
    return (
        <>
        <UserSearch/>
        <UserResult/>
        {(users == null )|| (users == '') && (loading == false) &&
         <div className="nn">Welcome to Github Finder <FaGithub/> </div>
            }

        </>
    )
}
export default Home;