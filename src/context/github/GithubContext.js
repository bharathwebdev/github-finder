import { createContext,useReducer} from "react";
import GitHubReducer from "./GithubReducer";

const Githubcontext= createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN  = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children})=>{

const InitialState = {
    users:[],
    user:{},
    repos:[],
    loading:false,
}
const [state,dispatch]=useReducer(GitHubReducer,InitialState)
 
 // get initial users(testing purposes)
    // const SearchUsers= async(text)=>{

    //     setLoading()
        
    //     const params = new URLSearchParams({
    //         q:text
    //     })
       

    //     const response  = await fetch(`${GITHUB_URL}/search/users?${params}`,{
    //         headers:{
    //         Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const data = await response.json()
    //      dispatch({
    //          type:'GET_USERS',
    //          payload:data.items,
    //      })
     
    //     }
        // get single user ----------------------------------------
        // const GetSingleUsers= async(login)=>{

        //     setLoading()
            
        //     const response  = await fetch(`${GITHUB_URL}/users/${login}`,{
        //         headers:{
        //         Authorization: `token ${GITHUB_TOKEN}`
        //         }
        //     })

        //     if(response.status === 404){
        //         window.location='/notfound'
        //     }else {
        //           const data = await response.json()
               
        //            dispatch({
        //                type:'GET_USER',
        //                payload:data,
        //            })
        //      }
         
        //     }
            //get repos---------------------------
            // const GetRepos= async(login)=>{

            //     setLoading()
                
            //     const response  = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
            //         headers:{
            //         Authorization: `token ${GITHUB_TOKEN}`
            //         }
            //     })
    
            //     if(response.status === 404){
            //         window.location='/notfound'
            //     }else {
            //           const data = await response.json()
          
            //            dispatch({
            //                type:'GET_REPOS',
            //                payload:data,
            //            })
            //      }
             
            //     }

        //clear users----------------------------
        // const clearUser=()=>{
        //     dispatch({
        //         type:'CLEAR_USERS',
                
        //     })
        // }
        //set loading-------------------------------
        // const setLoading=()=>dispatch({
        //     type:"SET_LOADING",

        // })
        return <Githubcontext.Provider 
                value={{
                    ...state,
                    dispatch,
                //    Users:state.users,
                //    Loading:state.loading,
                //    user:state.user,
                //    repos:state.repos,
                //    clearUser,
                //    GetSingleUsers,
                //    GetRepos,
                }}>
            {children}
        </Githubcontext.Provider>
}
export default Githubcontext; 