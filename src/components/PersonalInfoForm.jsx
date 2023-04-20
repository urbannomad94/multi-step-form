import React, { useState } from 'react'
import PersonalInfoCSS from './PersonalInfoForm.module.css'

const PersonalInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
    }

  return (
    <div className={PersonalInfoCSS.container}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
            <div className={PersonalInfoCSS.formElement}>
                <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="e.g. Stephen King"
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    required />
                
            </div>
            <div className={PersonalInfoCSS.formElement}>
                <label htmlFor="email">Email Address</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                    required /> 
            </div>
            <div className={PersonalInfoCSS.formElement}>
                <label htmlFor="phone">Phone Number</label>
                    <input
                    type="tel"
                    name="phone"
                    placeholder="e.g +1 234 567 890"
                    value={phone}
                    onChange={e => {
                        setPhone(e.target.value)
                    }}
                    required />
            </div>
        </form>
        <button>Next Step</button>
    </div>
  )
}

export default PersonalInfoForm
