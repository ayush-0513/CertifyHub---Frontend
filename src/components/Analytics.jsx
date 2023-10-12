import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>CERTIFICATE VALIDATION DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your Certificates Carefully</h1>
          <p>
          Managing certificates carefully is a critical aspect of maintaining the security and reliability of digital communications and online systems. Certificates serve as the digital keys that enable secure connections, data encryption, and authentication on the internet. Whether you're dealing with SSL/TLS certificates for securing websites, digital certificates for user authentication, or code-signing certificates for software integrity,. 
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
