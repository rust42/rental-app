import Body from "./component/Body/Body";
import Cards from "./component/cards/Cards";
// import Dashes from "./component/Dashes/Dashes";
import Footer from "./component/footer/Footer";
import Navbars from "./component/Navbars/Navbars";
import Summary from "./component/Summary/Summary";
import Team from "./component/team/Team";

const Home = () => {
    return <>
    
           <Navbars/>
           <Body/>
           <Cards/>
           
           <Team/>
           <Summary/>
           <Footer/>
 

    </>
};

export default Home;