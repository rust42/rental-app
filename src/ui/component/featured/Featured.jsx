import "./featured.css";

const Featured = () => {
  // const { data, loading, error } = useFetch(
  //   "/hotels/countByCity?cities=berlin,madrid,london"
  // );

  return (
    <div className="homeContainer">
    <div className="featured">
      
        <>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>BMW</h1>
             
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mercedes</h1>
            
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/12358194/pexels-photo-12358194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Range Rover</h1>
              
            </div>
          </div>
        </>
     
    </div>
    </div>
  );
};

export default Featured;
