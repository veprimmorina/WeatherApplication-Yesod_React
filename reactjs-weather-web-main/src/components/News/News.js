import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function News() {
  const [allNews, setAllNews] = useState()
  
    useEffect(()=>{
      axios.get('http://localhost:3000/news-for-weather').then(response=>{
        setAllNews(response.data);
        console.log(response.data)
      })
    }, [])
    
  return (
    
    <div className="bg-light">
    {

      allNews!==undefined || allNews==="" ? 
      
    <MDBContainer>
      {
       
          <MDBRow className="gx-5 border-bottom pb-4 mb-5 pt-5">
          <MDBCol md="6" className="mb-4">
            <img src={allNews?.articles[0]?.urlToImage} className="rounded"/>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4>
              <strong>{allNews?.articles[0]?.title}</strong>
            </h4>
            <p className="text-muted">
              {allNews?.articles[0]?.description}
            </p>
            <MDBBtn>Read More</MDBBtn>
          </MDBCol>
        </MDBRow>
        
         
        
    
}
      <MDBRow className="gx-lg-5">
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src={allNews?.articles[1]?.urlToImage}
                className="img-fluid rounded"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-info">
                  <MDBIcon fas icon="plane" className="me-1" />
                  Travels
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> {allNews?.articles[1]?.publishedAt?.split("T")[0]}</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>{allNews?.articles[1]?.title}</h5>
              <p>
              {allNews?.articles[1]?.description}
              </p>
            </a>
            <hr />
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src= {allNews?.articles[26]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong> {allNews?.articles[26]?.title}</strong>
                  </p>
                  <p>
                    <u>{allNews?.articles[26]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[4]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[4]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[4]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[5]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[5]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[5]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[6]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[6]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[6]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src={allNews?.articles[2]?.urlToImage}
                className="img-fluid rounded"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-danger">
                  <MDBIcon fas icon="chart-pie" className="me-1" />
                  Business
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> {allNews?.articles[2]?.publishedAt?.split("T")[0]}</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>{allNews?.articles[2]?.title}</h5>
              <p>
              {allNews?.articles[2]?.description}
              </p>
            </a>
            <hr />
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[7]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[7]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[7]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[8]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[8]?.title}</strong>
                  </p>
                  <p>
                    <u>{allNews?.articles[8]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[1]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="image"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[20]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[20]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[21]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Image news"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[21]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[21]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-4 mb-lg-0">
          <div>
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
              rippleTag="div"
              rippleColor="light"
            >
              <img
                src={allNews?.articles[3]?.urlToImage}
                className="img-fluid rounded"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBRow className="mb-3">
              <MDBCol col="6">
                <a href="" className="text-warning">
                  <MDBIcon fas icon="code" className="me-1" />
                  Technology
                </a>
              </MDBCol>
              <MDBCol col="6" className="text-end">
                <u> {allNews?.articles[3]?.publishedAt?.split("T")[0]}</u>
              </MDBCol>
            </MDBRow>
            <a href="#!" className="text-dark">
              <h5>{allNews?.articles[3]?.title}</h5>
              <p>
              {allNews?.articles[3]?.description}
              </p>
            </a>
            <hr />
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[22]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt=""
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[22]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[22]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[23]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[23]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[23]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[24]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[24]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[24]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
            <a href="#!" className="text-dark">
              <MDBRow className="mb-4 border-bottom pb-2">
                <MDBCol size="3">
                  <img
                    src={allNews?.articles[25]?.urlToImage}
                    className="img-fluid shadow-1-strong rounded"
                    alt="Hollywood Sign on The Hill"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <p className="mb-2">
                    <strong>{allNews?.articles[25]?.title}</strong>
                  </p>
                  <p>
                    <u> {allNews?.articles[25]?.publishedAt?.split("T")[0]}</u>
                  </p>
                </MDBCol>
              </MDBRow>
            </a>
          </div>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>

    : ""}
    </div>
  );
}