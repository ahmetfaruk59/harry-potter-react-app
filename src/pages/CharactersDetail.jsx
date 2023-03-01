import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Quote from '../components/Quote'
import image from '../assets/images/harry.jpg'
const CharactersDetail = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  let characters = useSelector((state) => state.app.chars)
  const charater = characters.find((char) => char.id == id)
  
  let firsLetterCapital = s => s.replace(/./, c => c.toUpperCase())
  useEffect(() => {
    if (charater == undefined) {
      navigate('/characters')
    }
  }, [])

  return (
    <div className="detail d-flex">

      <div className="hero-image">
        <img src={charater.image} alt={charater.name} />
      </div>

      <div className="detail-row d-flex">
        <div className="detail-col d-flex">
          <span>Hero:</span>
          <Quote text={ firsLetterCapital(charater.name)} />
        </div>
        <div className="detail-col d-flex">
          <span>Species:</span>
          <Quote text={ firsLetterCapital(charater.species)} />
        </div>
        <div className="detail-col d-flex">
          <span>Gender:</span>
          <Quote text={firsLetterCapital(charater.gender)} />
        </div>
        <div className="detail-col d-flex">
          <span>House:</span>
          <Quote text={firsLetterCapital(charater.house)} />
        </div>
        <div className="detail-col d-flex">
          <span>Birthday:</span>
          <Quote text={charater.dateOfBirth} />
        </div>
        <div className="detail-col d-flex">
          <span>Year:</span>
          <Quote text={charater.yearOfBirth} />
        </div>
      </div>

      <div className="detail-row d-flex">
        <div className="detail-col d-flex">
          <span>Ancestry:</span>
          <Quote text={firsLetterCapital(charater.ancestry)} />
        </div>
        <div className="detail-col d-flex">
          <span>Eye Colour:</span>
          <Quote text={firsLetterCapital(charater.eyeColour)} />
        </div>
        <div className="detail-col d-flex">
          <span>Hair Colour:</span>
          <Quote text={firsLetterCapital(charater.hairColour )} />
        </div>
        <div className="detail-col d-flex">
          <span>Patronus:</span>
          <Quote text={ firsLetterCapital(charater.patronus)} />
        </div>
        <div className="detail-col d-flex">
          <span>Alive:</span>
          <Quote text={charater.alive?'Yes':'No'} />
        </div>
        <div className="detail-col d-flex">
          <span>Actor:</span>
          <Quote text={charater.actor}/>
        </div>
      </div>
    </div>
  )
}
{/* <Quote text='selamselamselamselam selamselamselam' /> */ }
export default CharactersDetail