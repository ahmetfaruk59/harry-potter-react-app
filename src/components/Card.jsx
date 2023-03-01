import {FaHatWizard} from 'react-icons/fa'
import {GiWizardStaff} from 'react-icons/gi'
import {BsBook} from 'react-icons/bs'
import {MdMovieFilter} from 'react-icons/md'

const Card = ({text}) => {
  return (
    <div className="card d-flex">    
        <h2>{text}</h2>
        {(() => {
        switch (text) {
          case 'characters':
            return < FaHatWizard/>;
          case 'movies':
            return <MdMovieFilter />;
          case 'books':
            return < BsBook/>;
          case 'spells':
            return <GiWizardStaff />;
          default:
            return null;
        }
      })()}
    </div>   
  )
}

export default Card