const VehicleItem = ({vehicle}) => {
    return  <div className="viewcard">
    <div className="cardimg"> 
      <img src="/image/car1.webp" alt="next"/>
     </div>

    <div className="details">

        <div className="vechicledetails">
             <h2> {vehicle.brand} </h2>
             <ul className="lists">
                <li> Name: {vehicle.description} </li>
                <li> Model: {vehicle.model} </li>
                <li> Color: {vehicle.color} </li>
                <li> Vin: {vehicle.vin}  </li>
                <li> Purchase: {vehicle.purchaseDate}  </li>
             </ul>
        </div>

        <div className="actions">
            <a href=""> Online check in </a> <br/>
            <a href=""> Payment procedure </a> <br/>
            <a href=""> Free cancellation </a>
        </div>

        <div className="impdetails">
                <div className="price"> ${vehicle.pricePerDay} </div>
                <div> per day </div>
                
                <button className="buttons"> RESERVE</button> 
                {/* <a href=""> RESERVE </a> */}

        </div>
    </div>
</div>
};

export default VehicleItem;