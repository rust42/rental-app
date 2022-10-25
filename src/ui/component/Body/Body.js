
import {
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Body/Body.css"
import search from '../Body/search.png'
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";



const Body = () => {
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="rentalbody">
          <div className="search">
                <form action="" className="searchbar">
                    <input type={"text"} placeholder="Search for vechicles" name="vec"/>

                    <div className="datesearch">
                        <div className="dateSearchItem">
                                  <FontAwesomeIcon icon={faCalendarDays} className="dateIcon" />
                                  <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="dateSearchText"
                                  >
                                  {`${format(dates[0].startDate, "MM/dd/yyyy")} To ${format(
                                    dates[0].endDate,
                                    "MM/dd/yyyy"
                                  )}`}
                                  </span>
                                  {openDate && (
                                    <DateRange
                                      editableDateInputs={true}
                                      onChange={(item) => setDates([item.selection])}
                                      moveRangeOnFirstSelection={false}
                                      ranges={dates}
                                      className="date"
                                      minDate={new Date()}
                                    />
                                  )}
                        </div>
                    </div>  

                    <button type="submit"> <img src={search} alt="search"/> </button>
                </form> 
      
          </div>
    </div>
  )
}

export default Body
