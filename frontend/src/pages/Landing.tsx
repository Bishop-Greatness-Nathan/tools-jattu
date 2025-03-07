import { Link } from "react-router-dom"
import Logo from "../components/Logo"

function Landing() {
  return (
    <div className='w-[90%] md:[w-85%] m-auto flex py-5 items-center'>
      {/* left part */}
      <div className='w-full lg:w-[60%]'>
        <div className='flex items-center space-x-5 mb-2'>
          <Logo container='w-[100px] rounded-full overflow-hidden' />
          <h1 className='w-full text-xl lg:text-4xl font-extrabold text-[var(--primary)] '>
            Tools! Tools!! Tools!!! Jattu
          </h1>
        </div>
        {/* SMALL SCREEN IMAGE */}
        <div className='md:hidden w-full m-auto mt-3 rounded-md overflow-hidden shadow-lg'>
          <img src='/tools_landing_img.jpg' alt='' className='w-full' />
        </div>
        <div>
          <div className='mt-5'>
            <h2 className='text-[var(--primary)] font-semibold uppercase'>
              About Us
            </h2>
            <p className='text-sm md:text-base'>
              Tools Tools Tools is one of the sales arm of Barthoy Nig LTD;
              provider of high-quality industrial tools and equipment, committed
              to delivering durable, innovative, and reliable solutions to meet
              the demands of the industrial sector. Our business arm focuses on
              ensuring that businesses of all sizes have access to cutting-edge
              tools that enhance productivity, efficiency, and safety. With a
              deep understanding of the industry and a customer-centric
              approach, we are your trusted partner for all industrial needs.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-[var(--primary)] font-semibold uppercase'>
              Our Vision
            </h2>
            <p className='text-sm md:text-base'>
              To be a reliable provider of industrial tools and equipment ,
              empowering businesses with innovative solutions that drive
              industrial growth and operational excellence.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-[var(--primary)] font-semibold uppercase'>
              Our Mission
            </h2>
            <p className='text-sm md:text-base'>
              Our mission is to supply the highest quality industrial tools and
              equipment, backed by exceptional customer service and technical
              expertise. We aim to support businesses by offering tools that
              maximize performance, increase efficiency, and foster growth.
            </p>
          </div>
          <div className='mt-10'>
            <Link
              to='/register'
              className='bg-[var(--primary)] py-2 px-4 rounded text-white text-lg mr-4 hover:bg-[var(--hoverColor)] ease-in-out duration-300'
            >
              Create Account
            </Link>
            <Link
              to='/login'
              className='bg-[var(--primary)] py-2 px-4 rounded text-white text-lg hover:bg-[var(--hoverColor)] ease-in-out duration-300'
            >
              Login
            </Link>

            <Link
              to='/explore'
              className='block mt-4 w-[180px] text-center bg-[var(--primary)] py-2 px-4 rounded text-white text-lg hover:bg-[var(--hoverColor)] ease-in-out duration-300'
            >
              Explore The App
            </Link>
          </div>
        </div>
      </div>
      {/* right part */}
      <div className='hidden lg:block w-[40%]'>
        <div className='w-[90%] ml-auto rounded-lg overflow-hidden h-[80%] shadow-xl'>
          <img src='/tools_landing_img.jpg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Landing
