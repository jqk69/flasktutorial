import { useState,useEffect } from 'react'
import './App.css'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

function App() {
  const [contacts,setContact] = useState([])

  const [isModalOpen,setIsModalOpen]=useState(false)
  const closeModal=()=>{
    setIsModalOpen(false)
  }
  const openCreateModal=()=>{
    if (!isModalOpen) setIsModalOpen(true) 
  }
  useEffect(()=>{
    fetchContact()
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
      <button onClick={openCreateModal}>Create New Contact</button><br />
      {isModalOpen && 
        <><br /><div>
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm></ContactForm>
        </div></>
      }
      
    </>
  )
}

export default App
