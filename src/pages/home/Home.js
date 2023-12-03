import "./home.scss";
import { useState } from "react";
import AddBook from "../../components/addBook/AddBook";

function Home() {
  const [searchColor, setSearchColor] = useState(false);
  const [bookBox, setBookBox] = useState(false);
  return (
    <div className="home-page">
      <header>
        <div className="container">
          <nav>
            <div className="logo-search">
              <img src="images/logo.svg" alt="Logo" />
              <label
                onClick={() => setSearchColor(true)}
                htmlFor="search"
                className={searchColor ? "search searchColor" : "search"}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type={"text"}
                  placeholder={"Search for any training you want "}
                  id={"search"}
                />
                <i className="fa-solid fa-xmark"></i>
              </label>
            </div>
            <div className="user">
              <div className="bell">
                <img src="images/bell.svg" alt="Bell " />
              </div>
              <div className="user-logo">User</div>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="books">
          <div className="title">
            You've got <span>7 book</span>
          </div>
          <div className="addBook">
            <input type="text" placeholder="Enter your name" />
            <button type={"button"} onClick={() => setBookBox(true)}>
              <span>+</span>
              Create a book
            </button>
          </div>
        </div>
        <div className="task">Your task today</div>
        <div className="books-table">
          <div className="book-item">
            <div className="delete-book">
              <i className="fa-solid fa-trash"></i>
            </div>
            <div className="edit-book">
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="book-title">Raspberry Pi User Guide</div>
            <div className="book-info">
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </div>
            <div className="book_year-page">
              <div className="book-year">Eben Upton: 2012-year</div>
              <div className="book-page">211 pages</div>
            </div>
          </div>
        </div>
      </div>
      <AddBook setBookBox={setBookBox} bookBox={bookBox} />
    </div>
  );
}

export default Home;
