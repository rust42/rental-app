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
                <h4> Rent a car </h4> <br/>
                <h5> MIU rental service </h5>
              </div>
             

            </div>

            <div className="navbars">

              <div className="firstnavbar">
                        <a href=""> HOME </a>
                        <a href=""> HELP </a>
                        <a href=""> CURRENCY </a>
                        <a href=""> LANGUAGE </a>
                        <a href=""> FIND A LOCATION </a>
                        
                          <a href="login">
                            <button className="button"> SIGN IN </button>
                          </a>
                          <a href="registration">
                            <button className="button"> SIGN UP </button>
                          </a>

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
