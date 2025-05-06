import { useState } from "react";

const ContactForm=({})=>{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")

    const onSubmit= async (e)=>{
        e.preventDefault()
        const data={
            firstName,
            lastName,
            email
        }
        const url="http://127.0.0.1:5000/create_contact"
        const option={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const response= await fetch (url,option)
        if (response.status != 201 && response.status !=200)
        {
            const message= await response.json()
            alert(message.message)
        }
        else{

        }
    }

    return(
        <>
        <form onSubmit={onSubmit}>
        <div><br />
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName"value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName"value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br />
            <label htmlFor="email">Email </label>
            <input type="email" name="email"value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <button type="submit">Create Contact</button><br />
        </div>
        </form>
        </>
    )

    
}
export default ContactForm