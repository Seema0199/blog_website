import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

// step1
export const AppContext = createContext();

 export default function AppContextprovider({childer}) {
    const  [loading, setLoading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, setTotalpages] = useState(null);

    // data filling pending

    async function fetchBlogposts(page=1){
        setLoading(true);
        let url = `${baseUrl}? page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setpage(data.page);
            setposts(data.posts);
            setTotalpages(data.totalpages)
        }
        catch(error){
        console.log("Error in fetching data");
        setpage(1);
        setposts([]);
        setTotalpages(null);
        }
        setLoading(false);
    }
     function handlepagechange(page){
        setpage(page);
        fetchBlogposts(page);

     }
    const  value = {
        posts,
        setposts,
        loading,
        setLoading,
        page,
        setpage,
        totalpages,
        setTotalpages
        fetchBlogposts,
        handlepagechange,
    };
    return <AppContext.Provider value={value}>
        {childer}
    </AppContext.Provider>;

}