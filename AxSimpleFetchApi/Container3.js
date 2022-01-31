import React from 'react'
import axios from 'axios'
import { func } from 'prop-types';

//promise get

export const Container3 = () => {

    function postWithHeader() {


        const options = {
            headers: {'bearer token': 'asdasdsafas'}
          };
          axios('https://jsonplaceholder.typicode.com/posts', 
          {
              title: 'Fred',
              body: 'Flintstone',
              userId: 1
            },options)
            .then(function (response) {
                console.log(response)
    
            
            })
            .catch(function (error) {
         
             
             console.log(error);
            });
      }
      
//https://www.npmjs.com/package/axios#request-config
      function PostCustom(){
        const options = {
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'Fred',
                body: 'Flintstone',
                userId: 1
            },
            transformRequest: [(data, headers) => {
              // transform the data
              //use for xml or csv
          
              return data;
            }]
          };

          axios(options)
            .then(function (response) {
         
                console.log(response)
    
            
            })
            .catch(function (error) {
         
             
             console.log(error);
            });

      }
 

    return (
        <div>
            <button onClick={()=>PostCustom()}>Run</button>
        </div>
    )
}

export default Container3;