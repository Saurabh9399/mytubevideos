import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import VideoCard from './VideoCard';

const SearchResults = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchResultsArray = useSelector(store => store.app.searchSuggestionsClickResults)

    useEffect(() => {
        dispatch(closeMenu(false));
        if(searchResultsArray.length === 0) {
            navigate("/")
        }
        
        return () => {
            dispatch(closeMenu(true));
        };
    },[]);
    console.log(searchResultsArray.length);
   
  return (
    <div className="grid col-span-12 mt-6">
        <div className="flex flex-wrap justify-center">
      {searchResultsArray.map((item,index) => (
        <Link to={"/watch?v=" + item.id.videoId} key={index}>
          <VideoCard info={item} />
        </Link>
        // console.log(item)
      ))}
    </div>
    </div>
  )
}

export default SearchResults