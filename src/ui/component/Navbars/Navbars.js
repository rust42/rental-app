import "../Navbars/Navbars.css"
import imgs from '../Navbars/logo.png'

const Navbars = () => {
  return (
    <div className="mainbody">

            <div className="logo">
              <div className="logoimage">
                <img src={imgs} alt="Logo"/>
              </div>
              <div className="logotext">
                <h1> SA BROS </h1> 
                <h5> Rent a car </h5>
              </div>
             

            </div>

            <div className="navbars">

              <div className="firstnavbar">
                        <a href=""> HOME </a>
                        <a href=""> HELP </a>
                        <a href=""> CURRENCY </a>
                        <a href=""> LANGUAGE </a>
                        <a href=""> FIND A LOCATION </a>
                        
                        <div className="sign">
                           Do you have an account 
                          {/* <a href=""> SIGN IN </a> */}
                          {/* <button className="button"
                          // onClick={"http://localhost:3000/login"}> SIGN IN </button>
                          onClick={"/login"}> SIGN IN </button> */}
                          <a href="login">
                            <button className="button"> SIGN IN </button>
                          </a>
                           Don't you have an account
                          {/* <a href=""> SIGN UP </a> */}
                          <a href="registration">
                            <button className="button"> SIGN UP </button>
                          </a>
                          {/* <button className="button"
                          onClick={"http://localhost:3000/registration"}> SIGN UP </button> */}
                        </div>
                        

              </div>
              
              <div className="secondnavbar">

                    <a href=""> RESERVATIONS </a>
                    <a href=""> VECHILES </a>
                    <a href=""> LOCATIONS </a>
                    <a href=""> CAR SALES </a>
                    <a href=""> KNOW US </a>

               </div>
            </div> 
    </div>
  )
}

export default Navbars
