import "./Team.css"
import pic from '../team/p1.png'


const Team = () => {
    return (
        <div className="team">

            <div className="teamtext">

                <h1 className="meet"> Meet </h1> <br />
                <h1 className="the"> The </h1><br />
                <h1 className="pro"> Professional's </h1>
            </div>
            <div className="teamcontact">
                <div className="contact">
                    <img src={pic} alt="" />
                    <h2> SANDEEP KOIRALA  </h2>
                    <h2> CONTACT: 123456789</h2>
                </div>

                <div className="contact">
                    <img src={pic} alt="" />
                    <h2> BINOD PANT </h2>
                    <h2> CONTACT: 123456789</h2>
                </div>

                <div className="contact">
                    <img src={pic} alt="" />
                    <h2> JENISH  </h2>
                    <h2> CONTACT: 123456789</h2>
                </div>
            </div>


        </div>
    )
}

export default Team
