import './Search.css';

const Search=(props)=>{
    const searchBarHandler=(event)=>{
        props.onSearch(event.target.value);
    }
    return(
        <>
        <input type='text' placeholder="Search....." onChange={searchBarHandler} className='search-bar'></input>

        </>
    );
};
export default Search;