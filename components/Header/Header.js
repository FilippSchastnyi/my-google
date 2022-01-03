import Image from "next/image";
import {router} from "next/client";

const Header = () => {
  return (
    <hader>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </hader>
  );
};

export default Header;