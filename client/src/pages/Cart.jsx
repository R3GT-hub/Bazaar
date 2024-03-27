import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";
import Cartitem from '../components/Cartitem'
import { ToastContainer,toast } from 'react-toastify'
import StripeCheckout from "react-stripe-checkout";
const Cart = () => {
  const productData=useSelector((state)=>state.bazar.productData);
  const userInfo=useSelector((state)=>state.bazar.userInfo);
const [totalAmt,setTotalAmt] =useState("");
const [paynow,setPaynow]=useState(false);
useEffect(()=>{
  let price = 0;
  productData.map((item)=>{
    price+=item.price*item.quantity;
    return price;
  });
  setTotalAmt(price.toFixed(2));
},[productData]);

const handleCheckout=()=>{
if(userInfo){
  setPaynow(true);
}
else{
  toast.error("Signin to checkout");
}
};

const payment=async(token)=>{
  await axios.post("http://localhost:8000/pay",{
    amount:totalAmt,
    token:token,
  })
}
  return (
    <div>
      
      <img className='w-full h-60 object-cover' src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?" alt="" />
<div className='max-w-screen-xl mx-auto py-20 flex'>
  <Cartitem/>
  <div className='w-1/3 bg-[#fafafa] py-6 px-4 '>
<div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
  <h2 className='text-2xl font-medium'>cart total</h2>
  <p className='flex items-center gap-4 text-base'>
    Subtotal{" "}
    <span className='font-titleFont font-bold text-lg'>${totalAmt}</span>
  </p>
  <p className='flex items-start gap-4 text-base'>
    Shipping{" "}
    <span>
      Lorem ipsum dolor sit amet consectetur
    </span>

  </p>
</div>
<p className='font-titleFont font-semibold flex justify-between mt-6'>{" "}Total <span className='text-xl font-bold'>${totalAmt}</span></p>
<button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500' >Proceed to Checkout</button>
{
  paynow&& <div className='w-full mt-6 flex items-center justify-center'>
    <StripeCheckout
    stripeKey="pk_test_51OyJecSABJpkqT8BwhOrzAhyCXMvdC3Ye71dOqT4VmCudKJmq7VKuSSCVlBG15OIpooQ02aqlIWmftbzCrA9HPc900IaOCU6kI"
    name="Bazar Online Shopping"
    amount={totalAmt * 100}
    Label="Pay to bazar"
    description={`Your Payment amount is ${totalAmt} ` }
    token={payment}
    email={userInfo.email}
    />
    </div>
}
  </div>
</div>
< ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseonFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}
export default Cart;