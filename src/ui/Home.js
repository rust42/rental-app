import Body from "./component/Body/Body";
import Cards from "./component/cards/Cards";
// import Dashes from "./component/Dashes/Dashes";
import Footer from "./component/footer/Footer";
import Summary from "./component/Summary/Summary";
import Feature from "./component/featured/Featured"
import './home.css';

const Home = () => {
    return <>

        {/* <Navbars/> */}
        <Body />

        <Feature />
        <div className="homeContainer">
            <h1 className="homeTitle">Browse By Types </h1>
        </div>
        <Cards />
        {/* <Team/> */}
        <Summary />
        <Footer />


    </>
};

export default Home;