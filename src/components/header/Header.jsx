import './Header.css'
import logo from '../../assets/logo.png';
import SearchBar from '../searchBar/SearchBar';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
const Header = () => {
    return <div className="header">
        <div className="left-elements">
            <img src={logo} height={50} />
            <SearchBar />
        </div>
        <div className="right-elements">
            <div className="rounded">
                <EmailOutlinedIcon sx={{ color: 'white' }} />
            </div>

            <div className="rounded">
                <SettingsOutlinedIcon sx={{ color: 'white' }} />
            </div>

            <div className="rounded">
                <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />
                <div className='notification-dot'></div>
            </div>

            <Avatar alt="" src="" />
        </div>
    </div>
}
export default Header;