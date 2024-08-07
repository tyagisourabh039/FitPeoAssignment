import './ShowCase.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const ShowCase=({Icon,bgColor,message})=>{
    return (
        <div className="showcase-container">
            <div className="showcase-card">
                <div className='showcase-icon-container'style={{backgroundColor:bgColor}}>
                {Icon}
                </div>
                <p className='showcase-text'>{message}</p>
            </div> 
            <div className='show-more'>
            <ChevronRightIcon sx={{fontSize:'25px',color:'white'}}/>
            </div>
        </div>
    )
}
export default ShowCase;