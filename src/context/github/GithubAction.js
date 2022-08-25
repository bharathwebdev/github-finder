import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN  = process.env.REACT_APP_GITHUB_TOKEN;

// makinh api using axios -------

const github  = axios.create({
    baseURL:GITHUB_URL ,
    headers:{Authorization: `token ${GITHUB_TOKEN}`}
})
// get users ------ -   -   -   -   -
export const SearchUsers= async(text)=>{
    
    const params = new URLSearchParams({
        q:text
    })
   

    const response  = await github.get(`/search/users?${params}`)

    return response.data.items 
 
    }


   export const getUserandRepos = async(login)=>{
    const params = new URLSearchParams({
        sort:'created',
        per_page:10,
    })
        const [user,repos] = await Promise.all([
            github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
        ])
        return {user:user.data,repo:repos.data}
    }
//     // get single user ----------------------------------------
//    export  const GetSingleUsers= async(login)=>{
//        const response  = await fetch(`${GITHUB_URL}/users/${login}`,{
//            headers:{
//            Authorization: `token ${GITHUB_TOKEN}`
//            }
//        })

//        if(response.status === 404){
//            window.location='/notfound'
//        }else {
//              const data = await response.json()
//              return data
//         }
    
//        }
        
        
//         //get repos---------------------------
//     export  const GetRepos= async(login)=>{
//         const params = new URLSearchParams({
//                 sort:'created',
//                 per_page:10,
//             })
        
            
//             const response  = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
//                 headers:{
//                 Authorization: `token ${GITHUB_TOKEN}`
//                 }
//             })

//             if(response.status === 404){
//                 window.location='/notfound'
//             }else {
//                   const data = await response.json()
      
//                     return data
//              }
         
//             }