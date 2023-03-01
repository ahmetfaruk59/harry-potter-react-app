import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import {getChars} from '../redux/slice.js'

import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import Hero from "../components/Hero"


const Characters = () => {
  const dispatch=useDispatch();
  useEffect(() => {    
      dispatch(getChars())
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  let chars  = useSelector((state) => state.app.chars)
  const [charsPerPage] = useState(14);

  let {isLoading}  = useSelector((state) => state.app)

  // Get current posts
  const indexOfLastPost = currentPage * charsPerPage;
  const indexOfFirstPost = indexOfLastPost - charsPerPage;
  const currentchars = chars.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="chars d-flex">
      {currentchars && currentchars.map((char) => {
        return <Link to={`/characters/${char.id}`} key={char.id}>
          <Hero text={char.name} background={char.image} />
        </Link>
      })}
       <Pagination
        charsPerPage={charsPerPage}
        totalPosts={chars.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Characters