import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGet(url) {
    const [bookData, setBookData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [refreshToggle, setRefreshToggle] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await axios.get(url).catch((err)=>{
                setErrMessage(err.message) 
            }).then(response => setBookData(response.data.books))
            setLoading(false);
        }
            fetchData();
    }, [url,refreshToggle]);

    function refresh() {
        setRefreshToggle(!refreshToggle);
    }

    return { bookData, isLoading, refresh, errMessage };
}