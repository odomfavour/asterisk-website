import solution from '../../assets/images/solution.svg'

const HeroSection = () => {
  return (
    <div className='py-14'>
        <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
            <div>
                <img src={solution} alt="" className='w-full'/>
            </div>
            <div className='flex items-center'>
                <div>
                <p className='text-[#000000]'>DELIVERING</p>
                <p className='font-bold text-[60px] text-[#CC0000]'>FUTURE</p>
                <p className='text-[#CC0000] text-[50px]'>SOLUTIONS</p>
                <p className='text-[30px] font-semibold'>TODAY</p>
                <p className='text-lg font-normal'>THROUGH ACTIVE</p>
                <p className='text-lg teext-normal text-[#CC0000]'>PRODUCT RESEARCH & DEVELOPMENT</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HeroSection