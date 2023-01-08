import { Link } from "react-router-dom"
import "./error.css"


const Error = () => {
  return (
    <div className="error">
      <h1>Oops! no search found</h1>
      <Link className="link" to="/">Back Home</Link>
    </div>
  )
}
export default Error