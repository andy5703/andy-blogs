import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching data from:", url);
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource!');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                    setIsPending(false);
                })
                .catch(err =>{
                    if(err.name === "AbortError"){
                        setIsPending(false);
                        console.log("fetch aborted")
                    } else {
                        setError(err.message);
                    }
                })
        }, 1000)

        return () => abortCont.abort();
    }, [url]);
    return{data, isPending, error};
}
export default useFetch;