import "./Footer.css"
import pic from '../footer/p1.png'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footertext">
            <h1 className="meet"> Meet </h1> <br/>
            <h1 className="the"> The </h1><br/> 
            <h1 className="pro"> Professional's </h1> 
        </div>
        <div className="footercontact">
        <div className="contact">
            <img src={pic} alt="My Image"/>
            <h2> SANDEEP KOIRALA  </h2>     
            <h2> CONTACT: 123456789</h2>
        </div>

        <div className="contact">
            <img src={pic} alt="My Image"/>
            <h2> BINOD PANT </h2>     
            <h2> CONTACT: 123456789</h2>
        </div>

        <div className="contact">
            <img src={pic} alt="My Image"/>
            <h2> JENISH  </h2>     
            <h2> CONTACT: 123456789</h2>
        </div>
        </div>

       
    </div>
  )
}

export default Footer
