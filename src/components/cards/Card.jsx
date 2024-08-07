import './Card.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Card = ({ Icon, bgColor, value, message, percentage }) => {
    return <div className="card">
        <div className="card-info">
            <div className='icon-container' style={{ backgroundColor: bgColor }}>
                {Icon}
            </div>
            <p className='text'>{message}</p>
            <div className='flex'>
                <h2 className='orders'>{value}</h2>
                <p className={percentage < 0 ? 'orders-negative-percentage' : 'orders-positive-percentage'}>
                    {percentage < 0 ? <ArrowDropDownIcon sx={{ fontColor: 'red' }} /> :
                        <ArrowDropUpIcon sx={{ fontColor: '#2bce9d' }} />}
                    {percentage < 0 ? ('' + percentage).substring(1) : percentage}%
                </p>
            </div>
        </div>
    </div>
}
export default Card;