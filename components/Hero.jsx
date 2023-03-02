import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-10 bg-fixed bg-center bg-cover custom-img pb-8'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-7 text-white z-[2] mt-[-0rem]'>
        <h2 className='text-5xl font-bold  '>{heading}</h2>
        <p className='py-6 text-xl '>{message}</p>
        <a href="/favorite" className='px-8 py-2 border rounded-[20px] bg-white text-black font-semibold '>Shop</a>
      </div>
    </div>
  );
};

export default Hero;
