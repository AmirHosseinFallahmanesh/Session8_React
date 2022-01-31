import React from 'react'

export const  Container = () => {

    const simplePost=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json()
  
  )
  .then((json) => console.log(json));
    }

    const simplePut=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }

    const simplePatch=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
    }

    const sipmeDelete=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
    }

    return (
        <div>
            <button onClick={()=>simplePost()} >Simpe Post</button>
        </div>
    )
}

export default Container;