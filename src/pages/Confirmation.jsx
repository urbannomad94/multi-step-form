const Confirmation = ({activeStep}) => {
    return (
      <main>
        <SideBar activeStep={activeStep} />
        <PersonalInfoForm updateStep={updateStep} />
      </main>
    )
}

export default Confirmation;