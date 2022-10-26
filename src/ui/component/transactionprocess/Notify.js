import "../transactionprocess/Notify.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { useDispatch, useSelector } from "react-redux";


const Notify = () => {

  // const http;


  return (
    <div className="notify">
        <div className="circle">

          {/* {http.loading && ( */}
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
          {/* )}   */}
        </div>
    </div>
  )
}

export default Notify
