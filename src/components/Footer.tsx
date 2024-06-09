
const Footer = () => {
  return (
    <div className="py-5 bg-slate-200 dark:bg-slate-950 text-center text-gray-800 dark:text-gray-500 rounded-t-lg">
    <a href="#hero" className="block text-xl md:text-2xl font-poppins font-semibold">
        Anzoe John
    </a>
    <a
        href="mailto:anzoejohn@gmail.com"
        className="text-sm md:text-md font-poppins hover:text-indigo-500"
    >
        anzoejohn@gmail.com
    </a>
    <p className="text-xs mt-2 text-gray-800 font-poppins dark:text-gray-500">
        © Anzoe John's site {new Date().getFullYear()}. All rights reserved
    </p>
</div>
  )
}

export default Footer