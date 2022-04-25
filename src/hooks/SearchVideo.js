import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideo = (defaultQuery) => {
    const [vidList, setVidList] = useState([]);

    useEffect(() => {
       search(defaultQuery);
       console.log(defaultQuery);
    }, [defaultQuery])


    const search = async (query) => {
        const vids = await youtube.get('/search', {params: {q: query}});
        setVidList(vids.data.items);
        console.log(vids);
    }
    
    return [vidList, search];
}

export default useVideo;