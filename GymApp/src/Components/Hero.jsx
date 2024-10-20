import ButtonCom from "./ButtonCom"

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4' > 

    <div className='flex flex-col gap-4'>

      <p>Its Time To Get</p>

      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl' >Swole <span className='text-blue-400'>normous</span></h1>

    </div>
<p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400'>unbelievably swolenormous</span> and accept all risk of becoming the local <span className='text-blue-400'>mass montrosity</span>,affilicted with severe body dismorphia,unable to fit through doors</p>

<ButtonCom func={() => {
                window.location.hash = '#generate'
            }} text={"Accept & Begin"}></ButtonCom>

    </div>
  )
}

export default Hero
