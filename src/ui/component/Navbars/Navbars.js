import "../Navbars/Navbars.css"
import imgs from '../Navbars/logo.png'

const Navbars = () => {
  return (
    <div className="mainbody">

      <div className="logo">
        <div className="logoimage">
          <img src={imgs} alt="Logo" />
        </div>
        <div className="logotext">
          <h1> SA BROS </h1>
          <h4> Rent a car </h4> <br />
        </div>


      </div>

      <div className="navbars">

        <div className="firstnavbar">
          <a href="/"> Home </a>
          <a href="/"> Help </a>
          <a href="/"> Currency </a>
          <a href="/"> Language </a>
          <a href="/"> Find a Location </a>

          <a href="login">
            <button className="button"> Sign in</button>
          </a>
          <a href="registration">
            <button className="button"> Sign Up </button>
          </a>

        </div>

        <div className="secondnavbar">

          <a href="/"> Reservation </a>
          <a href="/"> Vehicles </a>
          <a href="/"> Location </a>
          <a href="/"> Car Sales </a>
          <a href="/"> Know Us </a>

        </div>
      </div>
    </div>
  )
}

export default Navbars
