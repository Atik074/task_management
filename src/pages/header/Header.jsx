import { CiSearch } from "react-icons/ci";

export default function Header(){
    return (
        <nav className="py-6 md:py-8">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
    
            <div>
            <a href="/">
                  <img className="w-[70px] h-[70px]   inline-block rounded " src="https://shorturl.at/CZppy" alt="Lws" />  
              </a>  
              <span className="text-[30px] text-[#F5BF42]  font-bold  mx-2">Task Management</span>
            </div>
          <form>
            <div className="flex">
              <div
                className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]"
              >
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-black focus:outline-none"
                  placeholder="Search Task"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-3"
                >
                 <CiSearch className="text-black text-xl font-semibold"/>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        
        </div>
      </nav>
    );
}