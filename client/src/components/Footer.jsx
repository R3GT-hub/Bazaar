import React from 'react'
import {ImGithub} from 'react-icons/im'
import { bazaarlogolight, paymentlogo } from "../assets/index";
import {
    FaFacebookF,FaTwitter,FaInstagram, FaYoutube,FaHome
} from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='w-32 flex flex-col gap-1'>
                <img className='w-[100%]' src={bazaarlogolight} alt="logo" />
                <p >www.Bazaar.com</p>
                <img className='w-[100%]' src={paymentlogo} alt="" />
                <div className='flex gap-3 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                    <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white'>locate us</h2>
                <div className='text-base flex flex-col gap-1'>
                <p>MBD, Delhi, India</p>
                <p>Mobile: 00968 97859628</p>
                <p>Phone: 00968 24769821</p>
                <p>e-mail: bazar@gmail.com</p>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold text-white mb-3'>profile</h2>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span>my account</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span>help and support</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span>checkout</p>
                <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span>order tracking</p>
            </div>
            <div className="flex flex-col justify-center">
<input
className="bg-transparent border px-4 py-2 text-sm"
placeholder="e-mail"
type="text"
/>
<button className="text-sm border text-white border-t-0 ☐ hover:bg-gray-900
lactive:bg-white">
Subscribe
</button>
</div>

        </div>

    </div>
  )
}

export default Footer