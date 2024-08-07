import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './FeedbackCard.css'
const FeedbackCard = ({ src, name, rating, message }) => {
    return (<>
        <div className='user'>
            <Avatar src={src} />
            <p className='user-name' >{name}</p>
        </div>
        <Rating value={rating} readOnly emptyIcon={<StarIcon style={{ opacity: 0.7, color: 'white' }} fontSize="inherit" />} />
        <p className='user-message'>{message}</p>
        <hr className='line'></hr>
    </>
    )
}
export default FeedbackCard;