import React from 'react'
import axios from 'axios'

//promise get

export const Container2 = () => {

    function getUserAccount() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
      }
      
      function getUserPermissions() {
        return axios.get('https://jsonplaceholder.typicode.com/posts/1');
      }
      
      function start1(){
        Promise.all([getUserAccount(), getUserPermissions()])
        .then(function (results) {
          const acct = results[0];
       
          const perm = results[1];
          
          console.log(acct)
          console.log(perm)
        });
      }

      function Start2(){
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
          ])
          .then(responseArr => {

            console.log( responseArr[0]);
            console.log( responseArr[1]);
          });
      }




    return (
        <div>
            <button onClick={()=>Start2()}>Run</button>
        </div>
    )
}

export default Container2;