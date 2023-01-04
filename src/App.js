import {useEffect, useState} from 'react';


const UserName = ({username}) => {
  return (<h4> user name: {username}</h4>)
}

const Email = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUser(data))
  }, [])
  return (
    <div>
      {user && user?.map((item) => {
        return  <h4  key={item.id}> email: {item.email}</h4>
      })}
    
    </div>
)
}
const Name = ({name}) => {
  return (<h4>Name: {name}</h4>)
}

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUser(data))
  // }, [])

  return (
    <div className="App">
      <Email/>
      {/* {
       user && user?.map((item) => {
          return (<div key={item.id}>
             <UserName username={item?.username}/>
             <UserName username={item?.username}/>
             <Email />
             <Name name={item.name}/>
             <hr/>
          

          </div>)
        })
      } */}
   

    </div>
  );
}

export default App;
