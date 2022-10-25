import "./Summary.css"

const Summary = () => {
  return (
    <div className="summary">
      {/* <h1 className="heading">Save time AND save money!</h1> */}
      {/* <h1 className="heading">Start A Reservation!</h1> */}
      {/* <h1 className="heading">Making Your Trip Better!!! </h1> */}
      <h1 className="heading">Wanna Make Your <br/> Trip Better!!! </h1>
      <span className="tagline">Sign up and we'll forward the best deals to you</span>
      <div className="searchbar">
        <input type="text" placeholder=" Email US " />
        <button className="button"> Send </button>
      </div>
    </div>
  )
}

export default Summary