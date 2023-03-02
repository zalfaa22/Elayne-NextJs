import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#ffd1ac] dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello, welcome to 
			<span className="dark:text-violet-400">ELAYNE</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Happy Shopping!!!</p>
		<div className="flex flex-wrap justify-center">
			<a href="/favorite" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Shop</a>
		</div>
	</div>
</section>
  );
};

export default Hero;
