import React,{useState} from 'react'
import axios from 'axios'

//axios post
export const Container1 = () => {

    const [data,setData]=useState("")
    const [header,setHeader]=useState("")
  
    const PostData=()=>{

        axios('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Fred',
            body: 'Flintstone',
            userId: 1
          })
          .then(function (response) {
              console.log(response)
            setData(response.data)
            setHeader(response.headers)
          
          })
          .catch(function (error) {
       
           
           console.log(error);
          });
         
    }


    return (
        <>
        <div>
            <div>
                <h1>Data</h1>
                     {data.title} {data.body}{data.id}
             </div>
            
       
            
        </div>
        <button onClick={()=>PostData()}> Send Datas</button>
        </>
    )
}

export default Container1