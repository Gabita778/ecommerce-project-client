import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/context/context.js";
import PropTypes from "prop-types";

SearchProducts.propTypes = {
  closeSearchProducts: PropTypes.func.isRequired,
};

export default function SearchProducts(props) {
  const { filterProducts } = useContext(Context);
  const [error, setError] = useState("");

  const searches = [
    "jackets",
    "scarf",
    "Cecil",
    "leather",
    "white",
    "pink",
    "black",
  ];

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchText) return setError("Please use a keyword");
    const searchValues = searchText
      .split(" ")
      .map((term) => term.trim())
      .join(",");
    navigate(searchText ? `products/?${searchValues}` : "/products");
    filterProducts(searchText);
    setSearchText("");
    props.closeSearchProducts();
  };

  const handleSearchItemClick = (item) => {
    setSearchText(item);
    filterProducts(item);
  };

  return (
    <div className="search-container">
      <p className="search-info">
        Browse our products and use the filter to quickly find what you need!
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="keyword, ex. brand, color, material..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <br></br>
        <button onClick={handleSearch}>filter</button>
      </div>

      <div className="trending">
        <h2>Trending searches</h2>
        {searches.map((search, index) => (
          <div
            className="search-item"
            key={index}
            onClick={() => handleSearchItemClick(search)}
          >
            {search}
          </div>
        ))}
      </div>
    </div>
  );
}
