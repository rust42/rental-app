import { Box, CircularProgress } from "@mui/material";

const LoadingIndicator = () => {
    return <div style={ { alignItems: 'center', 
                            display: 'flex', 
                            justifyContent: 'center',
                            padding: '20em '}}>  
          <div className="">
              <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
              </Box>
          </div>
    </div>;
};

export default LoadingIndicator;