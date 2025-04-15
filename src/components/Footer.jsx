import { ArrowUpRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="w-full mx-auto">
        <div className="px-6 md:px-12">

          {/* Main footer content - split into left and right */}
          <div className="flex flex-col md:flex-row justify-between">
            
            {/* Left section */}
            <div className="flex flex-col space-y-6 md:w-1/2">
              <div className="flex flex-col items-start">
                <h3 className="text-[#eb5939] text-2xl md:text-3xl font-bold italic mb-2 font-whitenice">
                  Turning Coffee Into Code & Chaos
                </h3>

                <span className="flex flex-row items-baseline space-x-1 text-[#b7ab98]">
                  <h1 className="text-8xl md:text-15xl font-highrise">MEET&nbsp;DHEERAJ</h1>
                  <h2 className="text-4xl md:text-3xl font-bold tracking-tightest">.dev</h2>
                </span>
              </div>

              <div className="flex items-center mt-6 md:mt-auto">
                <div className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold mr-2">
                  AD
                </div>
                <p className="text-sm text-[#b7ab98]">
                  <span className="italic">Designed</span> and Developed by Appaji Dheeraj
                </p>
              </div>
            </div>
            
            {/* Right section */}
            <div className="flex flex-col justify-between md:w-1/3 mt-8 md:mt-0">
              <div className="flex space-x-6 md:space-x-8 mb-8 mr-1">
                <a href="#" className="flex items-center text-[#b7ab98] hover:text-purple-400 transition-colors">
                  INSTAGRAM <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
                <a href="#" className="flex items-center text-[#b7ab98] hover:text-purple-400 transition-colors">
                  GITHUB <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
                <a href="#" className="flex items-center text-[#b7ab98] hover:text-purple-400 transition-colors">
                  LINKEDIN <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="border-t border-[#b7ab98] border-opacity-60 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7ab98] italic w-20 font-whitenice text-2xl">email</span>
                    <a href="mailto:dheeraj.nagaraja@gmail.com" className="text-[#b7ab98] hover:text-purple-400 transition-colors">
                      dheeraj.nagaraja@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-y border-[#b7ab98] border-opacity-60 pt-4 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#b7ab98] italic w-20 font-whitenice text-2xl">contact</span>
                    <a href="tel:+919481660290" className="text-[#b7ab98] hover:text-purple-400 transition-colors">
                      +91-9481660290
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer