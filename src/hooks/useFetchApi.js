import { useEffect, useState } from "react";


export default function useFetchApi() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("https://codealo-commerce-cms.onrender.com/products");
    
    useEffect(()=> {
        const getData = async () => {
            try {
                let datos = await fetch(url);
                setData(await datos.json());
            } catch (error) {
                console.log(error)
            } 
        }
        getData();
    },[url])

    return {
        data
    }
}