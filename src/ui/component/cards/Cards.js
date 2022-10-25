import "../cards/Cards.css"

const Cards = () => {
  return (
    <div className="cardscontainer">
        
        <div className="card">
            <div className="cardimage car1"> </div>
            <h2> SEDAN </h2> <br/>
            <p> A sedan has four doors and a traditional trunk. 
                Like vehicles in many categories, they're available in a range of sizes from small to compacts. </p>
                <a href=""> READ MORE </a>
        </div>

        <div className="card">
            <div className="cardimage car2"> </div>
            <h2> CONVERTIBLE </h2> <br/>
            <p> A convertible retracts into the body leaving the passenger cabin open to the elements 
                Most has a fully powered fabric roof that folds down, but a few have to be lowered by hand.</p>
                <a href=""> READ MORE </a>
        </div>

        <div className="card">
            <div className="cardimage car3"> </div>
            <h2> SPORT-UTILITY VEHICLE </h2> <br/>
            <p> SUVs often also referred to as crossovers tend to be taller and boxier than sedans,
                 offer an elevated seating position, and have more ground clearance than a car.</p>
                 <a href=""> READ MORE </a>
        </div>

        <div className="card">
            <div className="cardimage car4"> </div>
            <h2> MINIVAN </h2> <br/>
            <p> Minivans are the workhorses of the family-car world, 
                the best at carrying people and cargo in an efficient package. 
                They're called minivans but they are far from "mini." </p>
                <a href=""> READ MORE </a>
        </div>
        
        <div className="card">
            <div className="cardimage car5"> </div>
            <h2> PICKUP TRUCK </h2> <br/>
            <p> A pickup truck has a passenger cab and an open cargo bed in the rear. 
                Virtually all pickups offer some form of all-wheel drive or part-time four-wheel drive </p>
                <a href=""> READ MORE </a>
        </div>
        
    </div>
  )
}

export default Cards
