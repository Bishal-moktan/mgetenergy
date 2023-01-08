import "./landing.css"

const Landing = ({page}) => {
  return (
    <div className="landing__section">
        <div className="landing__section-info">
          <h1>{page}</h1>
          <h5>Home / {page}</h5>
        </div>
    </div>
  )
}
export default Landing