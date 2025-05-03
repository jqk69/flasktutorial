import { useState,useEffect } from 'react'
import './App.css'
import ContactList from './ContactList'

function App() {
  const [contacts,setContact] = useState([{"firstName":"Rohith","lastName":"rohith","email":"yayayaoo@123",id:1}])
  useEffect(()=>{
    //fetchContact()
  },[])

  const fetchContact=async()=>{

    const response=await fetch("http://127.0.0.1:5000/contacts")
    const data=await response.json()
    setContact(data.contacts)
    console.log(data.contacts)
  }

  return (
    <>
      <ContactList contacts={contacts}/>
    </>
  )
}

export default App
