import youtube from "../apis/youtube";
import { useState, useEffect } from 'react';

// in this hook, the input is the default search term. 
// and the outpu is a list of videos and a searching method
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;