import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Loaders from "../utilities/loaders";


const Collection = () => {
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let flush = false
    if (flush === false){
        setLoading(true)
        Axios({
          method: "GET",
          url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
        }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    
        return () => {flush = true}
    }
  }, [limit])

  const handleLimit = (option) =>{
    if (option ==="+"){
        setLimit((prev) => prev + 1)
    }else{
        setLimit((prev) => prev - 1)
    }
  }

  if (loading) return <Loaders/>
 

  return (
    <React.Fragment>

        <h3>{limit} collection</h3>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data.url} alt="First slide" height={450} width={450}/>
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        <button className="btn btn-outline-primary" onClick={() => handleLimit('+')}>+</button>
        <button className="btn btn-outline-primary" onClick={() => handleLimit('-')}>-</button>
      </ButtonGroup>

    </React.Fragment>
  );
};

export default Collection;
