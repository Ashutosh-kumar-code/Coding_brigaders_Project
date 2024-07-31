import React from 'react'

const Footer = () => {
  return (
    <div className='w-full   bottom-0 bg-white pt-20 footer_mainclass'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-4 gap-6 border-b-2 my-2 -mb-0'>
            <div className='flex flex-col gap-3'>
                <h5 className='font-bold text-2xl'>Subscribe to our</h5>
                <div className='flex  gap-3'>
                    <input type="text" placeholder='Enter your email' className='text-lg font-semibold border px-4 py-2' />
                    <button type='button' className='footer_subscribe'>Subscribe</button>
                </div>
                 <div className='text-xs font-semibold'>Stay connected with us on social media for latest updates and more </div>
            </div>
            <div className='flex flex-col items-center justify-center ' style={{width:'76%', marginLeft:'90px'}} >
                <div className='font-bold text-lg py-1'> Quick Link</div>
                <ul>
                    <li className='font-medium mb-2'>About us</li>
                    <li className='font-medium mb-2'>Contact us</li>
                    <li className='font-medium mb-2'>FAQ</li>
                    <li className='font-medium mb-2'>Terms of services</li>
                    <li className='font-medium mb-2'>Privacy Policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <div className='font-bold text-lg py-1'>Connected with us</div>
                <ul>
                    <li  className='font-medium mb-2'>Cookie Policy</li>
                    <li  className='font-medium mb-2'>Community guideline</li>
                    <li  className='font-medium mb-2'>Support</li>
                    <li  className='font-medium mb-2'>Blog</li>
                    <li  className='font-medium mb-2'>Career</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <div className='font-bold text-lg py-1'>Follow us on</div>
                <ul>
                    <li className='font-medium mb-2'>Facebook</li>
                    <li className='font-medium mb-2'>Instagram</li>
                    <li className='font-medium mb-2'>Twitter</li>
                    <li className='font-medium mb-2'>LinkedIn</li>
                    <li className='font-medium mb-2'>YouTube</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-between my-4'>
            <div>@2022. All rights reserved</div>
            <div className='flex gap-4'>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Cookies</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer;
