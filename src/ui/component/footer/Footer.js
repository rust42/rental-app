import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlists">


      <ul className="itemlist">
          <h3>  <li className="items"> RENTAL CARS  </li> </h3>
          <li className="items">Homes </li>
          <li className="items"> About Us </li>
          <li className="items">Inquires</li>
          <li className="items">Sign In</li>
          <li className="items">Sign Up </li>
          <li className="items">Help & FAQs </li>
        </ul>


      <ul className="itemlist">
      <h3> <li className="items"> RESERVATIONS </li> </h3>
          <li className="items">Car</li>
          <li className="items">SUVs</li>
          <li className="items">City</li>
          <li className="items">Trucks</li>
          <li className="items">Minivans</li>
          <li className="items">Sedans</li>
        </ul>



        <ul className="itemlist">
        <h3> <li className="items"> PROMOTIONS </li> </h3>
          <li className="items"> All deals </li>
          <li className="items">Partner Rewards</li>
          <li className="items"> Car Sales</li>
          <li className="items"> Business cars</li>
          <li className="items">Sign up </li>
          <li className="items">Rewards </li>
        </ul>

        <ul className="itemlist">
        <h3> <li className="items"> INFORMATION </li> </h3>
          <li className="items">Insurances </li>
          <li className="items">Rent a vechicle</li>
          <li className="items">Rental Reservations </li>
          <li className="items">Travel Support </li>
          <li className="items">Add service</li>
          <li className="items"> Cancel service</li>
        </ul>
        <ul className="itemlist">
          <h3><li className="items"> POLICIES </li> </h3>
          <li className="items"> Privacy Policy</li>
          <li className="items">Terms of use</li>
          <li className="items">Vrbo terms & conditions</li>
          <li className="items">Reward terms</li>
          <li className="items">Accessibility</li>
          <li className="items">Personal information</li>
        </ul>
      </div>
      <div className="footertext"> MIU Rental Service <br/> Copyright © SA BROS  </div>
    </div>
  );
};

export default Footer;
