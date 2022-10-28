
import {
  faCalendarDays,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Body/Body.css"
import search from '../Body/search.png'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import car from './image/car2.jpeg';



const Body = () => {
  const navigate = useNavigate();

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const searchButtonClicked = () => {
    navigate({
      pathname: '/view',
      search: `?pickupDate=${format(dates.startDate, "yyyy-MM-dd")}&&returnDate=${format(
        dates.endDate,
        "yyyy-MM-dd"
      )}`
    });
  };

  return (
    <div className="rentalbody">
      <div className="search">
        <div className="searchbar">
          {/* <img src="/image/car2.jpeg" alt=""/> */}
          {/* <img src="{car}" alt=""/> */}
          <input type={"text"} placeholder="Search for Vehicles" name="vec" />

          <div className="datesearch">
            <div className="dateSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="dateIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="dateSearchText"
              >
                {`${format(dates.startDate, "MM/dd/yyyy")} To ${format(
                  dates.endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates(item.selection)}
                  moveRangeOnFirstSelection={false}
                  ranges={[dates]}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>
          <button onClick={searchButtonClicked}>
             {/* <img src={search} alt="search" />  */}
             <FontAwesomeIcon icon={faSearch} />
             </button>
        </div>
      </div>
    </div>
  )
}

export default Body
