import React, { useState } from "react";
import productData from "../products.json";
import SelectCategory from "../components/SelectCategory";
import { Link } from "react-router-dom";

const title = (
  <h2>
    Search your <span className="text-warning">One</span> from{" "}
    <span className="text-warning"> Thousands </span> of products
  </h2>
);

const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(productData);
  //console.log(productData)
  //search functionality

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    //filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduct(filtered);
  };
  return (
    <div className="banner-section style-8">
      <div className="container">
        <div className="banner-content d-flex align-items-center justify-content-center">
          <div>
            {title}
            <form className="d-flex align-items-center">
              <SelectCategory select={"all"} />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search your product"
                value={searchInput}
                onChange={handleSearch}
                className="ms-3" 
              />
              <button type="submit" className="ms-2">
                <i className="icofont-search-2"></i>
              </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
              {searchInput &&
                filteredProduct.map((product, i) => (
                  <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Add your image here */}
        </div>
      </div>
    </div>
  );
};

export default Banner;