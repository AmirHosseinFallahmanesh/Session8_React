import React from 'react'
import axios from 'axios'
import { func } from 'prop-types';

//insterceptor

export const Container4 = () => {

    axios.interceptors.request.use(config => {
        // perform a task before the request is sent
        console.log('Request was sent');
      
        return config;
      }, error => {
        // handle the error
        console.log("Request Rejected")
        return Promise.reject(error);
      });
  
      function Post(){
        const options = {
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'Fred',
                body: 'Flintstone',
                userId: 1
            }
          };

          axios(options)
            .then(function (response) {
         
                console.log(response)
    
            
            })
            .catch(function (error) {
         
             
             console.log(error);
            });

      }
 
      function Cancell(){
        const source = axios.CancelToken.source();

        axios.get('https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif', {
          cancelToken: source.token
        }).catch(thrown => {
          if (axios.isCancel(thrown)) {
              console.log("here")
            console.log(thrown.message);
          } 
        });
        
        // cancel the request (the message parameter is optional)
        source.cancel('Request canceled.');
      }

    return (
        <div>
            <button onClick={()=>Cancell()}>Run</button>
        </div>
    )
}

export default Container4;