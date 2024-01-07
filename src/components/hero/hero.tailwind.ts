const Styles = {
  container: "w-full sm:h-[86vh] flex flex-col relative antialised",

  layer: "absolute w-full h-full flex",

  header: "h-16 md:h-24 flex justify-center items-center lg:mx-2 xl:mx-20",

  nav: "flex mx-4 md:mx-8 w-full justify-between items-center",

  list: "hidden md:flex items-center justify-end flex-1 xl:flex-none font-bold text-white gap-5 xl:gap-12 xl:mr-40",

  heroWrapper: "flex flex-col flex-1 mb-12",

  hero: "xl:mx-20 h-full flex items-start mt-5 md:mt-0 sm:items-center",

  heroLeft:
    "sm:ml-14 lg:mx-20 2xl:ml-28 xl:mr-20 flex flex-col gap-1 md:gap-8 w-full items-center sm:items-start sm:w-[550px]",

  title:
    "text-[30px] lg:text-[2.75em] font-semibold tracking-tight text-white leading-10 lg:leading-4",

  subtitle:
    "text-xl font-semibold text-white text-[18px] lg:text-[1.5em] mb-4 md:mb-0",

  formWrapper: "w-full px-7 sm:px-0",

  form: "flex flex-col sm:flex-row gap-1 md:gap-1.5 mb-3 w-full",

  input:
    "w-full sm:w-1/3 px-6 py-4 md:py-2 rounded-md hover:outline outline-blue-400",

  button:
    "w-full px-6 py-4 sm:w-1/3 bg-[#1276D3] mt-4 sm:mt-0 text-white rounded-md hover:outline outline-black",

  continueWrapper: "border-b border-[whitesmoke] h-7 relative mb-7 md:mb-0",

  continue:
    "text-white w-fit rounded-md px-2 absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-4 z-1 bg-[#949493]",

  link: "text-white font-bold cursor-pointer hover:underline",

  listIcon: "text-white md:hidden",

  signin:
    "text-white font-bold cursor-pointer hover:underline hidden md:flex ml-10 xl:ml-0",

  linkText: "text-white cursor-pointer hover:underline",

  authWrapper: "flex gap-3 md:gap-4 my-2",

  icon: "bg-white w-[3.375em] h-[3.375em] flex justify-center items-center rounded-lg cursor-pointer",

  signin2: "text-white mt-8 md:mt-0",
};

export default Styles;
