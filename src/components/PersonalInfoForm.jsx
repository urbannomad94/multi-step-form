import { useEffect, useState } from 'react'
import Button from './Button';
import PersonalInfoCSS from './PersonalInfoForm.module.css'

const PersonalInfoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [clicked, setClicked] = useState(false);

    const disabled = name.length > 0 && email.length > 0  && phone.length > 0 ? false : true;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name} Email: ${email} Phone: ${phone}`);
    }

  return (
    <div className={PersonalInfoCSS.container}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form onSubmit={handleSubmit}>
            <div className={PersonalInfoCSS.formElement}>
                <div className={PersonalInfoCSS.errorContainer}>
                    <label htmlFor="name">Name</label>
                    <span className={name.length === 0 ? 'error' : 'hidden'}>This field is required</span>
                </div>
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
                <div className={PersonalInfoCSS.errorContainer}>
                    <label htmlFor="email">Email Address</label>
                    <span className={email.length === 0 ? 'error' : 'hidden'}>This field is required</span>
                </div>
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
                <div className={PersonalInfoCSS.errorContainer}>
                    <label htmlFor="phone">Phone Number</label>
                    <span className={phone.length === 0 ? 'error' : 'hidden'}>This field is required</span>
                </div>
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
            <div className="btnContainer">
                <Button disabled={disabled} type="next" />
            </div>
        </form>

    </div>
  )
}

export default PersonalInfoForm
