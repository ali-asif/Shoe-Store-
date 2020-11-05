import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F11%2Fadidas-yeezy-boost-350-v2-pirate-black-black-friday-release-info-1.jpg?q=75&w=800&cbr=1&fit=max"
            alt="First slide"
            height="50%"
            width="50%"
          />
          <Carousel.Caption>
            <h3>Adidas yeezy boost 350 </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0270/5326/0848/products/adidas-yeezy-700-carbon-FW2498-release-date-2-1_600x.jpg?v=1589936927"
            alt="Third slide"
            height="50%"
            width="50%"
          />

          <Carousel.Caption>
            <h3>Adidas yeezy boost 700 </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.uknashop.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/2/0/20181011_172204_006.jpeg"
            alt="Third slide"
            height="50%"
            width="50%"
          />

          <Carousel.Caption>
            <h3>Adidas yeezy boost 500</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home;
