import solution from "../../assets/images/drone.svg";

const SolutionsSection = () => {
  return (
    <div className="bg-[#F7E7E6] py-14">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
          <div>
            <p className="text-lg font-medium">WE SPECIALIZE IN</p>
            <p className="text-[40px] font-bold text-[#CC0000]">
              DIGITAL
              <br /> BUSINESS <br /> SOLUTIONS
            </p>
            <p className="text-base">
              AsteriskRD Inc, an innovative tech development company,
              specializes in bespoke tech solutions empowering businesses. Our
              client-centric approach ensures excellence, making us a trusted
              partner.
            </p>

            <p className="text-base">
              Rooted in a vision to deliver high-quality, customized solutions,
              we stand ready to pioneer transformative technology, aiding
              clients in thriving within the digital landscape.
            </p>
            <div className="mt-6">
              <img src={solution} alt="" className="w-full" />
            </div>
          </div>
          <div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">01</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                SOFTWARE DEVELOPMENT
              </p>
              <p className="text-base font-normal">
                Our team specializes in creating custom software solutions that
                streamline business processes, enhance efficiency, and provide a
                competitive edge using the latest technologies and
                methodologies.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">02</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                WEB APPLICATION DEVELOPMENT
              </p>
              <p className="text-base font-normal">
                Our web application development services focus on creating
                robust, user-friendly web-based solutions, including e-commerce
                platforms, content manage- ment systems, and complex web
                applications, with the necessary expertise.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">03</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                MOBILE APP DEVELOPMENT
              </p>
              <p className="text-base font-normal">
                Our mobile development services cater to both iOS and Android
                platforms, ensuring intuitive, engaging, and compatible mobile
                apps for the mobile-first era.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">04</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                SMART / IoT DEVICE DEVELOPMENT
              </p>
              <p className="text-base font-normal">
                Our company specializes in creating advanced Smart/IoT devices
                that revolutionize daily life and business operations, offering
                intuitive, secure, and scalable solutions for real-time
                decision-making.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">05</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                PRODUCT-ORIENTED TEAM BUILDING
              </p>
              <p className="text-base font-normal">
                We offer customized product development team building services,
                utilizing both insourced and outsourced solutions, fostering
                innovation and delivering exceptional results in line with your
                vision.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[#CC0000] text-[32px] font-extrabold">06</p>
              <p className="text-[#000000] font-semibold text-[24px]">
                CONSULTING SERVICES
              </p>
              <p className="text-base font-normal">
                Our team specializes in creating custom software solutions that
                streamline business processes, enhance efficiency, and provide a
                competitive edge using the latest technologies and
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
