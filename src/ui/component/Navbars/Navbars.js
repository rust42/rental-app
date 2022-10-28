import "../Navbars/Navbars.css"
import imgs from '../Navbars/logo.png'
import { useSelector } from "react-redux"
import { logout } from "../../../reducers/auth";
import { useDispatch } from "react-redux";

const Navbars = () => {

  const dispatch = useDispatch();
  const logoutButtonClicked = () => {
    dispatch(logout());
  };

  const user = useSelector(state => state.login).login.user;
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

          {!user && <a href="/login">
            <button className="button"> Sign in</button>
          </a>}
          {!user &&
            <a href="/registration">
              <button className="button"> Sign Up </button>
            </a>}

          {user &&
            <button className="button" onClick={logoutButtonClicked}> Sign out</button>}
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
