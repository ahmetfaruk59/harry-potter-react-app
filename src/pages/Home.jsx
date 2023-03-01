import Card from "../components/Card"
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useEffect } from "react"
import {getChars, getSpells} from '../redux/slice.js'
import { getRandomQuote } from "../utils/quoteData"
const Home = () => {
  const dispatch=useDispatch();

  const {hero,sentence}=getRandomQuote()
  useEffect(() => {    
      dispatch(getChars())
      dispatch(getSpells())
  },[])
  
  return (
    <div className="d-flex home">
      <Link className="cardLink" to={'/characters'}>
        <Card text="characters" />
      </Link>

      <Link className="cardLink" to={'/movies'}>
        <Card text="movies" />
      </Link>
      <Link className="cardLink" to={'/books'}>
        <Card text="books" />
      </Link>
      <Link className="cardLink" to={'/spells'}>
        <Card text="spells" />
      </Link>
      <div className="quote d-flex">
            <p className="d-flex"><span>"</span>{sentence}<span>"</span></p>
            <h4>- {hero}</h4>
      </div>
    </div>
  )
}

export default Home