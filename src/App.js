import React from 'react'

import Wrap from './Components/Wrap'
import Box from './secondcomponent/box';
import Days from './secondcomponent/days';
import Faq from './secondcomponent/Faq';
import Footer from './secondcomponent/Footer2';
import Navbar from './secondcomponent/navbar';
const App = () => {
  return (
    <div className='bg-[#EBFAF0]' >
      <Navbar/>
      <Days/>
      <div className='grid grid-cols-12 gap-1 p-40 	' >
        <div className=' pt-20 col-span-2 	' >
          <ul>
            <p>These are what we call the pulse basics.they're what every customer gets.</p>
            <li>Manage cash flow on a daily,weekly,monthlym or yearly basis</li>
            <li>forecast growth with recurring income or expenses that scale automatically</li>
            <li>Work with any currency</li>
            <li>see money in and money out categorize transaction and run helpful reports</li>
            <li>toggle entries and accounts on and off out different scenarios</li>
          </ul>
          <p>just need the basics</p>
          <p><span>Get them now</span>for #29 per month.</p>

        
        </div>
        <div className='col-span-10 	 ' >
          <Box/>

        </div>
        

      </div>
      <Faq/>
      <Footer/>
    </div>
      

  )
}

export default App