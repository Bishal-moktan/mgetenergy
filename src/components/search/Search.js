import { AiOutlineClose } from "react-icons/ai"
import "./search.css"
const Search = ({show, setShow}) => {
  return (
    <div className={show?'search__container isOpen': 'search__container'}>
    <div className="search-icon" onClick={() => setShow(false)}>

        <AiOutlineClose />
        </div>
        <input type="text" placeholder="Search here..." />
    </div>
  )
}
export default Search