import React from "react";

function Nav(props) {
  const categories = ["Home", "About", "Portfolio", "Contact", "Resume"];

  return (
    <header>
      <div className=" flex-row col-12  justify-space-between nav-text">
    <nav className="flex-row justify-end">
      <ul className="flex-row justify-space-between">
        {categories.map(category => (
          <li className="mx-2" key={category}>
            <a
              href={"#" + category.toLowerCase()}
              onClick={() => props.handlePageChange(category)}
              className={props.currentPage === category ? "navActive" : "category-btn mx-1"}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
      
    </header>
  );
}

export default Nav;
