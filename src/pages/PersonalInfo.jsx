import React from 'react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import SideBar from '../components/SideBar'
import PersonInfoCSS from './PersonalInfo.module.css'

const PersonalInfo = () => {
  return (
    <main>
      <SideBar />
      <PersonalInfoForm />
    </main>
  )
}

export default PersonalInfo
