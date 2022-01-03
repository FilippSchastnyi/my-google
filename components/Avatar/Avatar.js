const Avatar = ({url}) => {
  return (
    <img className="h-10 rounded-full
       animate-bounce
       cursor-pointer
       transition duration-150
       transform hover:scale-110"
         src={url}
         loading='lazy'
         alt='profile'/>

  );
};

export default Avatar;
