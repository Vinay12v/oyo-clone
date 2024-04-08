import Image from 'next/image'
import React from 'react'
import Block from './Block';

const Header1 =()=>{
    return(
        <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10 ">
            <Image src={'/logo.png'} alt='logoo' width={200} height={200} className='w-28 h-28'/>
            <div className='border-r-2 border-gray-300 h-full flex'>
                <Block title={'Became a member'} para={'Additional discount off a stay'} />
                <Block title={'oyo for business'} para={'Trusted by 500 coperates'} />
                <Block title={'List your property'} para={'start Earning in 30 mins'}/>
                <Block title={'956533356777'} para={'Book a call Now'}/>
                <div className="flex items-center px-3">
                    <h3 className='font-bold'> Login / signup</h3>
                </div>
            </div>
            
        </div>
        
    )
}

export default Header1;