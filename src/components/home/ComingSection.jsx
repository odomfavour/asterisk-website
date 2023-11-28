
const ComingSection = () => {
  return (
    <div className="py-14 bg-[#302F27] text-white">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1  gap-16">
          <div>
            <p className="text-2xl font-bold mb-2">— Coming Soon</p>
            <p className="text-[54px] font-bold leading-[45px]">Get Notified</p>
            <p className="text-[38px] font-bold">When we Launch</p>
            <p className="text-base font-bold">*Don’t worry, we wil not spam you :)</p>
          </div>
          <div className=" flex items-center">
            <form action="" className="w-full">
              <div className="mb-6 relative">
                
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter your email address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[100px] focus:ring-blue-500 focus:border-blue-500 block w-full p-6"
                />
                <button className="absolute top-[6.5px] right-2 bg-[#000000] text-white rounded-[100px] px-4 py-4">Notify Me</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSection;
