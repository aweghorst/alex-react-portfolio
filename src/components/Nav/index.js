import React from "react";

function Nav(props) {
  const categories = ["Home", "About", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="flex-row justify-end">
      <ul className="flex-row justify-space-between">
        {categories.map(category => (
          <li className="mx-2" key={category}>
            <a
              id={category.toLowerCase() + "btn"}
              href={"#" + category.toLowerCase()}
              onClick={() => props.handlePageChange(category)}
              className={props.currentPage === category ? "navActive" : "category-btn mx-2"}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
