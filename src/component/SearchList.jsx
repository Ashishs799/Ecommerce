import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CiSearch } from "react-icons/ci";
import "../styles/SearchList.css";
import { Sorting } from "./Sorting";
import { Link } from "react-router-dom";

const SearchList = ({ products }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [filterProducts, setFilteredProducts] = useState([]);
  const [initialFilteredProducts, setInitialFilteredProducts] = useState([]);
  const [search, setSearch] = useState(query);
  const [sort, setSort] = useState("");

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

  const sortItemsHandler = () => {
    let sortItems;
    switch (sort) {
      case "ascending":
        sortItems = [...filterProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return setFilteredProducts(sortItems);

      case "descending":
        sortItems = [...filterProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return setFilteredProducts(sortItems);

      case "highest":
        sortItems = [...filterProducts].sort((a, b) => b.price - a.price);
        return setFilteredProducts(sortItems);

      case "lowest":
        sortItems = [...filterProducts].sort((a, b) => a.price - b.price);
        return setFilteredProducts(sortItems);

      case "default":
        sortItems = filterProducts;
        return setFilteredProducts(sortItems);
    }
  };
  useEffect(() => {
    sortItemsHandler();
  }, [sort]);

  return (
    <section className="searchlists">
      <div className="cover flex_column">
        <span className="result_txt">Search Results:</span>
        <div className="search_ flex">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch onClick={searchHandler} />
        </div>
      </div>
      <div className="row">
        <div className="sorting flex m-0">
          <div className="sorting_wrapper">
            <span className="sortby" s>
              Sort by:{" "}
            </span>
            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="default">Default</option>
              <option value="ascending">Name (A - Z)</option>
              <option value="descending">Name (Z - A)</option>
              <option value="lowest">Price (Lowest - Highest)</option>
              <option value="highest">Price (Highest - Lowest)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="men_collection results">
        {filterProducts.map((data) => {
          return (
            <div className="new_wrapper" key={data.id}>
              <Link to={`/product/${data.id}`}>
                <div className="new_arrivals">
                  <div className="latest">
                    <img src={data.image} alt="" />
                  </div>

                  <span>Quick Look</span>
                </div>
              </Link>

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
