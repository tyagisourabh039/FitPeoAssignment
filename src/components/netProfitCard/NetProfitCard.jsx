import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircularProgress from '@mui/joy/CircularProgress';
import './NetProfitCard.css';
const NetProfitCard = () => {
    return (<>
        <div className='net-profit-content'>
            <p className='text'>NetProfit</p>
            <h2 className='orders'>$6759.25</h2>
            <p className={3 < 0 ? 'orders-negative-percentage' : 'orders-positive-percentage'}>
                {3 < 0 ? <ArrowDropDownIcon sx={{ fontColor: 'red' }} /> :
                    <ArrowDropUpIcon sx={{ fontColor: 'green' }} />}
                {3 < 0 ? ('' + 3).substring(1) : 3}%
            </p>
        </div>
        <div className='net-profit-progress'>
            <CircularProgress determinate variant='solid'
                sx={{ '--CircularProgress-size': '120px', '--CircularProgress-progressColor': "#648bff", '--CircularProgress-trackColor': '#648bff4d' }}
                thickness={14}
                value={70} >
                <div className='inner-text'>
                    <p className='goal-percentage'>70%</p>
                    <p className='goal-text'> Goal completed</p>
                </div>
            </CircularProgress>
            <p className='goal-message'>*The values here has been rounded off</p>
        </div>
    </>
    )
}
export default NetProfitCard;