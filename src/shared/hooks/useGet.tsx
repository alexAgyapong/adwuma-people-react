import React, { useEffect, useState } from 'react'
import axios from "axios";
const useGet = (url: string) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getRequest = async () => {
            const response = await axios.get(url);
            if (response.data) {
                setData(response.data);
            }
        }
        getRequest();
        return () => {
            console.log('clean up here...')
        }
    }, [url])
    return { data };
}

export default useGet
