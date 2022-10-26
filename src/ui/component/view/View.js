import { useLocation } from "react-router-dom"
import Navbars from "../Navbars/Navbars"
import VBody from "./Vbody/VBody"


const View = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <>
        <Navbars/>
        <VBody/>
    </>
  
  )
}

export default View
