import MenuItem from '../components/MenuItem'; // Adjust the path based on your folder structure
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  return (
    <div>
      <MenuItem title="Home" address="/" Icon={AiFillHome} />
    </div>
  );
};

export default Header;
