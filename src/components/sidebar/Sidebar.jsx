import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
const Sidebar = () => {
    const [activeIcon, setActiveIcon] = useState(0);
    const handleMenuChange = (num) => {
        setActiveIcon(num);
    }
    const handleLogout = () => {

    }
    return <div className="sidebar">
        <div className="sidebar-menu">
            {activeIcon == 0 ?
                <div className="active">
                    <HomeIcon className='activeIcon' color="primary" />
                </div> :
                <div className="inactive">
                    <HomeOutlinedIcon onClick={() => handleMenuChange(0)} className='inactiveIcon' />
                </div>}
            {activeIcon == 1 ?
                <div className="active">
                    <InsertChartIcon className='activeIcon' color="primary" />
                </div> :
                <div className="inactive">
                    <InsertChartOutlinedIcon className='inactiveIcon' onClick={() => handleMenuChange(1)} />
                </div>}
            {activeIcon == 2 ?
                <div className="active">
                    <InventoryOutlinedIcon className='activeIcon' color="primary" />
                </div> :
                <div className="inactive">
                    <InventoryOutlinedIcon onClick={() => handleMenuChange(2)} className='inactiveIcon' />
                </div>}
            {activeIcon == 3 ?
                <div className="active">
                    <AccountBalanceWalletIcon className='activeIcon' color="primary" />
                </div> :
                <div className="inactive">
                    <AccountBalanceWalletOutlinedIcon onClick={() => handleMenuChange(3)} className='inactiveIcon' />
                </div>}
            {activeIcon == 4 ?
                <div className="active">
                    <ShoppingBagIcon className='activeIcon' color="primary" />
                </div> :
                <div className="inactive">
                    <ShoppingBagOutlinedIcon onClick={() => handleMenuChange(4)} className='inactiveIcon' />
                </div>}
        </div>
        <div className="inactive">
            <LogoutIcon onClick={handleLogout} className='inactiveIcon' />
        </div>
    </div>
}
export default Sidebar;