import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
 const SearchBar=()=>{
    return (
        <div className='search-box'>
            <SearchIcon  sx={{ color: 'white' }} />
        <input className='search-input' type='text' placeholder='Search'/>
        </div>
    )
}
export default SearchBar;