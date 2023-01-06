import {useEffect, useState} from 'react';
import useSWR from 'swr'

const UserName = ({username}) => {
  return (<h4> user name: {username}</h4>)
}

const Email = () => {
const fetcher = (url) => fetch(url).then(res => res.json())
const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUser(data))
//   }, [])
  return (
    // <div>
    //   {user && user?.map((item) => {
    //     return  <h4  key={item.id}> email: {item.email}</h4>
    //   })}
    
    // </div>
    <div>
      {data && data?.map((item) => {
        return  <h4  key={item.id}> email: {item.email}
        this is master branch testing
        </h4>
      })}
    
    </div>
)
}
const Name = () => {
//     const [user, setUser] = useState(null);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUser(data))
//   }, [])
const fetcher = (url) => fetch(url).then(res => res.json())
const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return (
    // <div>
    //   {user && user?.map((item) => {
    //     return  <h4  key={item.id}> email: {item.name}</h4>
    //   })}
    
    // </div>
     <div>
     {data && data?.map((item) => {
       return  <h4  key={item.id}> title: {item.title}</h4>
     })}
   
   </div>
)
}

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUser(data))
  // }, [])

  return (
    <div className="App">
      <Email/>
      <Name/>
    </div>
  );
}

export default App;
