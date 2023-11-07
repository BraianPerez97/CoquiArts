import React, { useState, SearchInput } from "react";
import UserList from "./UserGallery";

export default function SearchBar(props) {
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchVal);
  });

  return (
    <div className="container">
      <div className="input-wrap">
        <i className="fas fa-search"></i>
        <label for="product-search" id="input-label">
          Product Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        />
        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </div>
      <div className="results-wrap">
        <ul>
          {filteredProducts.map((product) => {
            return (
              <li key={product} className="list-item">
                <a href="#">{product}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/*
function SearchableUserList({ users }) {
  const [searchText, setSearchText] = useState('');
  const foundUsers = filterUsers(users, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <UserList
        videos={foundUsers}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}*/