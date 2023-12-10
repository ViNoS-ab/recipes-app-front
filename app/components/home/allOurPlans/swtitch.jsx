export const Switch = ({ isActive, setIsActive }) => {
    const toggleClass = " transform translate-x-8";
  return (
    
    <div
    className="md:w-16 md:h-8 w-12 h-6 flex items-center bg-gray-300 rounded-lg mx-5 p-1 cursor-pointer"
    onClick={() => {
      setIsActive(!isActive);
    }}
  >
    <div
      className={
        "bg-foodCrevet md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
        (isActive ? null : toggleClass)
      }
    ></div>
  </div>
  )
}
