const Hero = () => {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-32">
			<div className="text-center ">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-gray-800 dark:text-slate-500 font-semibold">
					Hi, This is Anzoe John
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					I'm a Software Engineer{' '}
				</p>
				<a
					href="#projects"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-950 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 md:text-md "
				>
					See Projects
				</a>
			</div>
		</div>
  )
}

export default Hero