import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className=" dark:text-black custom-img bg-no-repeat bg-cover bg-center">
      {/* <div className='absolute top-0 left-0 right-0 bottom-40 bg-black/10 z-[1]' /> */}
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello, welcome to 
			<span className="dark:text-black">ELAYNE</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Happy Shopping!!!</p>
		<div className="flex flex-wrap justify-center">
      <button  className="px-8 py-3 m-2 text-lg font-semibold rounded-3xl bg-white dark:text-gray-900"><Link href="/favorite">Shop</Link></button>
		</div>
	</div>
</section>
  );
};

export default Hero;
