import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CiSearch } from "react-icons/ci";
import "../styles/SearchList.css";

const SearchList = ({ products }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [filterProducts, setFilteredProducts] = useState([]);
  const [initialFilteredProducts, setInitialFilteredProducts] = useState([]);
  const [search, setSearch] = useState(query);

  useEffect(() => {
    if (query) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setInitialFilteredProducts(results);
      setFilteredProducts(results);
    }
  }, [query, products]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (search) {
      let result = initialFilteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(result);
    }
  };

  return (
    <section className="searchlists">
      <div className="search_bar flex">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch
          style={{ fontSize: "1.2rem", cursor: "pointer" }}
          onClick={searchHandler}
        />
      </div>
      <h1>Search Results:</h1>
      <div className=" men_collection results">
        {filterProducts.map((data) => {
          return (
            <div className="new_wrapper" key={data.id}>
              <div className="new_arrivals">
                <div className="latest">
                  <img src={data.image} alt="" />
                </div>
                {/* <Link to={`/product/${data.id}`}> */}
                <span>Quick Look</span>
                {/* </Link> */}
              </div>

              <div className="info">
                <span>{data.name}</span>
                <br />
                <span>Rs. {data.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchList;
