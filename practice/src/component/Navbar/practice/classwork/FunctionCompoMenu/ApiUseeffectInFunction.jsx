import React, { useEffect, useState } from 'react';

const ApiUseeffectInFunction = () => {
    const[state,setdata]=useState("default value");
    const [count, setCount] = useState(0);



    // useEffect(()=>{
    //     console.log("called use effect");
    //     fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
    //         console.log(result);
    //     })
    // })
    // useEffect(()=>{
    //     console.log("called use effect");
    //     fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
    //         console.log(result);
    //     })
    // },[])

    
    // counter START
    
    // const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1); // ✅ Pass a state updater
        }, 5000);
        return () => clearInterval(intervalId);
    }, []); 
    // counter END
    // call using state changing 
    useEffect(()=>{
        console.log("called use effect");
       let store = fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
            console.log(result);
        })
        
  console.log(store)
    },[state])

    // call using counter 
    // useEffect(()=>{
    //     console.log("called use effect");
    //     fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
    //         console.log(result);
    //     })
    // },[count])
    // let productData=result.map



    return (
        <div>
            <h1>{count}</h1>
            <p>{state}</p>
       <button onClick={()=>{setdata("change")}} className='btn btn-danger'>set state</button>    
        </div>

    );
};

export default ApiUseeffectInFunction;