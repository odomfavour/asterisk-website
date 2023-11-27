
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const HeaderSection = () => {
  return (
    <nav className='py-4 bg-[#F0F0F0] border border-[BFBFBF]'>
        <div className="w-11/12 mx-auto">
            <div className="flex md:flex-row md:items-center items-start justify-between">
                <img src={logo} alt="" />
                <div>
                    <ul className='md:flex items-center gap-8 '>
                        <li className=''>
                            <Link to="#" className='text-base font-semibold'>Home</Link>
                        </li>
                       
                    </ul>
                </div>
                {/* <div className="flex gap-6 items-center">
                    <Link to="/signup" className='bg-lightPurple text-white rounded-[38px] px-4 py-[13px] text-base font-semibold'>Get Started</Link>
                </div> */}
            </div>
        </div>
    </nav>
  )
}

export default HeaderSection