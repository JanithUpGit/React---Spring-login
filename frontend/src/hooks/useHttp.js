import { useEffect, useState } from "react";

export default function useHttp(url, config = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControler = new AbortController();
    const signal = abortControler.signal;

    const fetchData = async () => {

        setLoading(true);
        setError(null);
       

     try{
        
         const response = await fetch(url, { ...config, signal });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      const resData = await response.json();
      setData(resData);


     }catch(error){
        if(error.name === 'AbortError'){
            console.log('Fetch aborted'); 
        }else{
            setError(error);
        }
     }finally{
        setLoading(false);
     }
    };

    fetchData();

    return ()=>{
        abortControler.abort();
    }

  }, [url,JSON.stringify(config)]);


  return {data ,loading, error};
}
