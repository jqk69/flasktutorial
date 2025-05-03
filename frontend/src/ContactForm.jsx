import { useState } from "react";

const ContactForm=({})=>{
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useSate("")

    const onSubmit=(e)=>{
        e.preventDefault
    }

    return(
        <>
        <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName"value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName"value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <label htmlFor="email">Email </label>
            <input type="email" name="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">Create Contact</button>
        </div>
        </form>
        </>
    )

    
}
export default ContactForm