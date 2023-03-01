import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { getSpells } from "../redux/slice";

const Spells = () => {
  const dispatch=useDispatch();
  useEffect(() => {    
      dispatch(getSpells())
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  let spells  = useSelector((state) => state.app.spells)
  const [spellsPerPage] = useState(5);

  let {isLoading}  = useSelector((state) => state.app)

  // Get current posts
  const indexOfLastPost = currentPage * spellsPerPage;
  const indexOfFirstPost = indexOfLastPost - spellsPerPage;
  const currentSpells = spells.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="spells d-flex">

      {currentSpells && currentSpells.map((spell) => {
               return <div className="spell" key={spell.id}>
                <span>{spell.name}: </span>
                <p>{spell.description}</p>
              </div>
      })}


        <Pagination
        charsPerPage={spellsPerPage}
        totalPosts={spells.length}
        paginate={paginate}
      /> 
    </div>
  )
}
export default Spells