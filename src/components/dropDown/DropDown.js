import "./dropDown.css"
import { Link } from "react-router-dom"

const DropDown = ({name, items, show, setShow}) => {
  return (
    <div className="dropDown"  onMouseEnter={() => setShow('-')} onMouseLeave={() => setShow('+')}>
        <p>{name} {show}</p>
        <div className="dropDown-content">
            {items.map((item, index) => {
                return <Link key={index} className="link" to={item.path}>{item.title}</Link>
            })}
        </div>
    </div>
  )
}
export default DropDown