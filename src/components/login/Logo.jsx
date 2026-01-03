import HeaderLogo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <img src={HeaderLogo} alt="PhotoBooth" className="h-[51px]" />
    </div>
  );
};

export default Logo;
