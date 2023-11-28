import solution from '../../assets/images/solution.svg'

const HeroSection = () => {
  return (
    <div className='py-14'>
        <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1  gap-14">
            <div>
                <img src={solution} alt="" className='w-full'/>
            </div>
            <div className='flex items-center'>
                <div>
                <p className='text-[#000000] text-[25px] font-semibold mb-0 leading-[40px]'>DELIVERING</p>
                <p className='font-bold text-[80px] text-[#CC0000] mb-0 leading-[70px]'>FUTURE</p>
                <p className='text-[#CC0000] text-[70px] mb-0 leading-[60px]'>SOLUTIONS</p>
                <p className='text-[30px] font-semibold'>TODAY</p>
                <p className='text-lg font-light leading-[20px]'>THROUGH ACTIVE</p>
                <p className='text-lg font-light text-[#CC0000]'>PRODUCT RESEARCH & DEVELOPMENT</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection