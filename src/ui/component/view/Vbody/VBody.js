import "../Vbody/VBody.css";
const VBody = ({ children }) => {
    return (
        <div className="viewbody">
            <div className="filters">
                
                <h2> FILTER BY </h2>
                    <br />
                    <h3 className="item">
                         Exclusive Offers
                    </h3>
                    <br />
                <ul className="filterlist">
                    {" "}
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Deals{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Inquires{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Sign In{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Sign Up{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Help and FAQs{" "}
                        </label>{" "}
                    </li>
                </ul>

                <br/>
                <h3 className="item">
                Vechicle type
                </h3>
                <br/>
                <ul className="filterlist">
                   
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Sedan{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Convertible{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> SUVs{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Minivans{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Pickup Trucks{" "}
                        </label>{" "}
                    </li>
                </ul>
                <br/>
                <h3 className="item">
                Car types
                </h3>
                <br/>
                <ul className="filterlist">
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Mini{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Economy{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Compact{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Mid-size{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Standard{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Full-Size{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> SUVs{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Pickup{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Others{" "}
                        </label>{" "}
                    </li>
                </ul>
                <br/>
                <h3 className="item">
                Capacity
                </h3>
                <br/>
                <ul className="filterlist">
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> 2-5 passengers{" "}
                        </label>{" "}
                    </li>
                </ul>
                <br/>
                <h3 className="item">
                Insurances
                </h3>
                <br/>
                <ul className="filterlist">
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Driver only{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Full Insurances{" "}
                        </label>{" "}
                    </li>
                </ul>
                
                    <br />
                    <h3 className="item"> Total Price 
                    </h3>
                    <br />
                <ul className="filterlist">
                   
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Less than $100{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> $100 - $200{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> $200 - $300{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> $300 - $400{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Greater than $400{" "}
                        </label>{" "}
                    </li>
                </ul>
                <br/>

                <h3 className="item">
                Specifications
                </h3>
                <br/>
                <ul className="filterlist">
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Automatic{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Manual{" "}
                        </label>{" "}
                    </li>
                    <li className="item">
                        {" "}
                        <label>
                            {" "}
                            <input type={"checkbox"} /> Unlimited Mileages{" "}
                        </label>{" "}
                    </li>
                </ul>
            </div>

            <div className="viewcards">{children}</div>
        </div>
    );
};

export default VBody;
