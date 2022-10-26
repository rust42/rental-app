import "../Vbody/VBody.css"

import car1 from "../../cards/images/car1.webp"

const VBody = () => {
  return (
    <div className="viewbody">

        <div className="filters">
                <h2> FILTER BY </h2>

                <ul className="filterlist"> <br/>
                    <h3>  <li className="item"> Exclusive Offers </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> Deals </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Inquires </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Sign In </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Sign Up </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Help and FAQs </label> </li>
                </ul>



                <ul className="filterlist"> <br/>
                    <h3>  <li className="item"> Vechicle type </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> Sedan </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Convertible </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> SUVs </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Minivans </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Pickup Trucks </label> </li>

                </ul>



                <ul className="filterlist"> <br/>
                    <h3>  <li className="item"> Car types </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> Mini </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Economy </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Compact </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Mid-size </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Standard </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Full-Size </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> SUVs </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Pickup </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Others </label> </li>

                </ul>


                <ul className="filterlist"> <br/>
                    <h3>  <li className="item">  Capacity </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> 2-5 passengers </label> </li>

                </ul>

                <ul className="filterlist"> <br/>
                    <h3>  <li className="item">  Insurances </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> Driver only </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Full Insurances </label> </li>
                </ul>

                <ul className="filterlist"> <br/>
                    <h3>  <li className="item">  Total Price </li> </h3> <br/>

                    <li className="item"> <label> <input type={"checkbox"}/> Less than $100 </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> $100 - $200 </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> $200 - $300 </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> $300 - $400 </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Greater than $400 </label> </li>
                </ul>

                <ul className="filterlist"> <br/>
                    <h3>  <li className="item">  Specifications </li> </h3> <br/>
                    <li className="item"> <label> <input type={"checkbox"}/> Automatic </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Manual </label> </li>
                    <li className="item"> <label> <input type={"checkbox"}/> Unlimited Mileages </label> </li>
                </ul>

        </div>

        <div className="viewcards">
                    <div className="recommended">
                        <form className="form" action="/action_page.php">
                            <select className="name" name="recom" id="recom">
                                <option value="recommended"> SORT BY </option>
                                <option value="recommended">Recommended</option>
                                <option value="price">Price</option>
                                <option value="opel">Type</option>
                                <option value="audi">Model</option>
                            </select>
                        </form>
                    </div>
                <div className="viewcard">
                    <div className="cardimg"> 
                      <img src={car1} alt="next"/>
                     </div>

                    <div className="details">

                        <div className="vechicledetails">
                             <h2> AUDI </h2>
                             <ul className="lists">
                                <li> Name: Audi A3 </li>
                                <li> Model: A3 </li>
                                <li> Color: Green </li>
                                <li> Vin: 12345  </li>
                                <li> Purchase: 2015-10-01  </li>
                             </ul>
                        </div>

                        <div className="actions">
                            <a href=""> Online check in </a> <br/>
                            <a href=""> Payment procedure </a> <br/>
                            <a href=""> Free cancellation </a>
                        </div>

                        <div className="impdetails">
                                <div className="price"> $200 </div>
                                <div> per day </div>
                                
                                <button className="buttons"> RESERVE</button> 
                                {/* <a href=""> RESERVE </a> */}

                        </div>
                    </div>
                </div>

                <div className="viewcard">
                    <div className="cardimg"> 
                      <img src={car1} alt="next"/>
                     </div>

                    <div className="details">

                        <h2> SEDAN </h2> <br/>
                        <p> A sedan has four doors and a traditional trunk. 
                            Like vehicles in many categories, they're available in a range of sizes from small to compacts. </p>
                        <a href=""> READ MORE </a>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default VBody
