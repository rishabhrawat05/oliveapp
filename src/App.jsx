import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import oliveapplogo from './assets/oliveapplogo.png'
import { ArrowRightIcon, CaretDownIcon, CaretRightIcon, CaretUpIcon, CrossIcon, ListIcon, XIcon } from '@phosphor-icons/react'
import { RiAppleFill } from '@remixicon/react'

const productImg = ['https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=256&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=256&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=256&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-5.png&w=256&q=75']
const detailImg = ['https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1-details.png&w=640&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2-details.png&w=640&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fstrawberry-vanilla.png&w=640&q=75', 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-5-details.png&w=640&q=75']

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hoveredDropdown, setHoveredDropdown] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === productImg.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? productImg.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === productImg.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
    <main className='min-h-screen w-full flex flex-col items-center justify-center gap-4 md:gap-8 lg:gap-10 pt-4 md:pt-6 lg:pt-8 pr-4 md:pr-6 lg:pr-8 pl-4 md:pl-6 lg:pl-8 pb-0 font-inter'>
      <div id='primary-div' className='h-full w-full rounded-xl flex flex-col border md:p-0 p-2 relative'>
        <div id='header' className='w-full h-16 md:h-20 flex items-center justify-between p-2 md:p-4 gap-2'>
          <div className='w-20 md:w-24 lg:w-32 flex-shrink-0'>
            <img src={oliveapplogo} alt="Olive App" className='h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28' />
          </div>
          <div id='tabs' className='hidden md:flex flex-1 items-center justify-center text-gray-600 gap-2 lg:gap-4 text-xs md:text-sm font-semibold'>
            <button 
              onMouseEnter={() => setHoveredDropdown('solutions')}
              onMouseLeave={() => setHoveredDropdown(null)}
              className='flex gap-2 items-center justify-center hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>
              Solutions 
              {hoveredDropdown === 'solutions' ? <CaretUpIcon /> : <CaretDownIcon />}
            </button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>Features</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>Pricing</button>
            <button 
              onMouseEnter={() => setHoveredDropdown('blog')}
              onMouseLeave={() => setHoveredDropdown(null)}
              className='flex gap-2 items-center justify-center hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>
              Blog 
              {hoveredDropdown === 'blog' ? <CaretUpIcon /> : <CaretDownIcon />}
            </button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>Restaurants</button>
            <button 
              onMouseEnter={() => setHoveredDropdown('food')}
              onMouseLeave={() => setHoveredDropdown(null)}
              className='flex gap-2 items-center justify-center hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3'>
              Food 
              {hoveredDropdown === 'food' ? <CaretUpIcon /> : <CaretDownIcon />}
            </button>

          </div>
          <div id="auth" className='flex items-center justify-end gap-2 md:gap-3 flex-shrink-0'>
            <p className='hidden sm:block text-[#253713] text-xs md:text-sm'>Sign in</p>
            <button id='get-olive' className=' gap-1 hidden md:flex  md:gap-2 items-center font-semibold justify-center rounded-full pt-2 pb-2 pr-3 pl-3 md:pt-3 md:pb-3 md:pr-4 md:pl-4 text-white text-xs md:text-sm'>Get Olive <ArrowRightIcon size={16} className='hidden sm:block' /></button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden flex items-center justify-center p-2 hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-lg'>
              {isMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} className='text-[#253713]' />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id='mobile-menu' className='md:hidden w-full bg-white  rounded-xl flex flex-col gap-2 p-4 '>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Solutions</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Features</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Pricing</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Blog</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Restaurants</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Food</button>
            <button className='hover:bg-gray-300/30 cursor-pointer transition-all ease-in-out rounded-xl pt-2 pb-2 pr-3 pl-3 text-left'>Sign in</button>
            <button className='bg-[#253713] text-white font-semibold text-sm rounded-full py-3 px-4 hover:bg-[#1a260c] items-center justify-center gap-3 flex transition w-full'>Get Olive <ArrowRightIcon/></button>
          </div>
        )}
        <div id='content' className='flex-1 w-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 px-2'>
          <div className='flex md:flex-row flex-col  items-center  pb-6 pt-10'>
            <div className='flex  items-center -space-x-3'>
              <div className='w-9 h-9 rounded-full border-2 border-white overflow-hidden  transform  duration-300 hover:z-99 transition-all ease-in-out cursor-pointer'>
                <img src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=75' alt='User 1' className='w-full h-full object-cover ' />
              </div>
              <div className='w-9 h-9 rounded-full border-2 border-white overflow-hidden  transform duration-300 hover:z-99 transition-all ease-in-out cursor-pointer'>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=75' alt='User 2' className='w-full h-full object-cover' />
              </div>
              <div className='w-9 h-9 rounded-full border-2 border-white overflow-hidden  transform duration-300 hover:z-99 transition-all ease-in-out cursor-pointer'>
                <img src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=75' alt='User 3' className='w-full h-full object-cover' />
              </div>
              <div className='w-9 h-9 rounded-full border-2 border-white overflow-hidden  transform duration-300 hover:z-99 transition-all ease-in-out cursor-pointer'>
                <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=75' alt='User 4' className='w-full h-full object-cover' />
              </div>
              <div className='w-9 h-9 rounded-full opacity-50 from-gray-300 to-gray-400 border-2 border-white flex items-center justify-center text-gray-700 text-xs   transform  duration-300 hover:z-99 transition-all ease-in-out  cursor-pointer backdrop-blur-md'>3k+</div>
            </div>
            <p className='text-xs md:pt-0 pt-4 text-gray-600'>Trusted by thousands of healthy families</p>
          </div>
          <h1 className='text-3xl md:text-5xl lg:text-7xl text-center font-medium text-[#253713] max-w-4xl leading-tight md:leading-tight lg:leading-none px-2 md:px-10 lg:px-30 tracking-tight'>The Safest Way to Shop for Groceries</h1>
          <p className='text-xs md:text-base lg:text-lg text-gray-500 text-center max-w-2xl leading-relaxed px-2 md:px-10 lg:px-22'>Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet and Get Expert-Backed Food Insights</p>
          <button id='ios-download' className='flex gap-2 md:gap-3 items-center justify-center rounded-full px-12 py-2 md:px-4 md:py-3 text-white font-semibold text-md md:text-sm bg-[#253713] hover:bg-[#1a260c] transition'>
            <RiAppleFill size={14}/>
            Download for iOS
          </button>
          
        </div>
        <div id='phone' className='flex-1 w-full flex pt-8 items-center justify-center gap-8'>
          <div className='h-[500px] w-80 bg-white rounded-4xl rounded-b-none border-b-0 border-8 border-[#d0d2d1] flex flex-col items-center justify-center'>
            <div className=' h-7 mt-2 rounded-full w-28 bg-black flex items-center justify-end pr-3'>
              <div className='h-5 w-5 rounded-full border border-white/25 bg-black'></div>
            </div>

            <div className='w-full h-full flex flex-col items-center justify-center pt-10 relative overflow-hidden'>
              <div className='relative h-32 w-full shrink-0 overflow-hidden flex items-center justify-center'>
                <div className='relative flex items-center justify-center'>
                  {[
                    (currentSlide - 1 + productImg.length) % productImg.length,
                    currentSlide,
                    (currentSlide + 1) % productImg.length
                  ].map((index, position) => (
                    <div
                      key={index}
                      className={`h-32 w-32 flex items-center justify-center transition-all duration-500 ease-out flex-shrink-0 ${
                        position === 0
                          ? 'opacity-40 scale-90 -translate-x-12'
                          : position === 1
                          ? 'opacity-100 scale-100 translate-x-0'
                          : 'opacity-40 scale-90 translate-x-12'
                      }`}
                    >
                      <img
                        src={productImg[index]}
                        alt={`Product ${index + 1}`}
                        className='w-full h-full rounded-xl object-cover'
                      />
                    </div>
                  ))}
                </div>
              </div>

              
              
              <div className='flex-1 w-full relative overflow-hidden bg-white '>
                {detailImg.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Detail ${index + 1}`}
                      className='w-full h-full object-top object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
