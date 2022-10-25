import "../Body/Body.css"
import pic from '../Body/car2.jpeg'
import search from '../Body/search.png'


const Body = () => {
  return (
    <div className="rentalbody">
{/* 
          <div className="background image">
                  <img
                    src={pic}
                    alt="My Background image"/>  
          </div> */}

          <div className="search">
                <form action="" className="searchbar">
                    <input type={"text"} placeholder="Search for vechicles" name="vec"/>

                      <button type="submit"> <img src={search} alt="search"/> </button>
                </form> 
          </div>  
    </div>
  )
}

export default Body
