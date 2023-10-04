import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <header className="flex flex-col items-center py-10 gap-2 leading-8 max-w-6xl mx-auto">
      <img src={logo} alt="The Dragon News" />
      <p className="text-lg text-gray-500">Journalism Without Fear of Favour</p>
      <p className="text-xl font-medium text-gray-500"><span className="text-gray-700">{moment().format("dddd,")}</span>{moment().format(" MMMMM D, YYYY")}</p>
    </header>
  );
};

export default Header;
