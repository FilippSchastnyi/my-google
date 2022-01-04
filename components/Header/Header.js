import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import Avatar from "../Avatar/Avatar";
import HeaderOptions from "./Header.options/Header.Options";

const Header = () => {
  const searchInputRef = useRef(null)
  const router = useRouter();

  const search = e =>{
    e.preventDefault();
    const term =searchInputRef.current.value;
    if(!term)return
    router.push(`/search?term=${term}`)
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref={searchInputRef} className="flex-grow w-full
         focus:outline-none"
                 type="text"/>
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 "
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer transition duration-100 transform hover:scale-125 sm:inline-flex" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer transition duration-100 transform hover:scale-125 " />
          <button hidden type="submit" className="btn" onClick={search}>
            Google Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://i02.fotocdn.net/s126/ea543fdc0afcb043/gallery_xs/2872578917.jpg"/>
      </div>
      <HeaderOptions/>
    </header>
  );
};

export default Header;