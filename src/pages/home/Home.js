import "./home.scss";
import { useState, useEffect } from "react";
import AddBook from "../../components/addBook/AddBook";
import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.length) {
      navigate("/signup");
    }
  }, [navigate, user.length]);
  const [searchColor, setSearchColor] = useState(false);
  const [bookBox, setBookBox] = useState(false);
  const [edited, setEdited] = useState(0);
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
              <div className="user-logo">
                {user.length ? user[0].data.name : ""}
              </div>
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
            <div
              className="edit-book"
              onClick={() => {
                setBookBox(true);
                setEdited(1);
              }}
            >
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
        <div className="information">
          Hurmatli ish beruvchi! Berilgan API bo'yicha faqat SIGNUP qilsa
          bo'ladi. Kitob qo'shishda Post so'rov jo'natganda kitob ma'lumotlarini
          berib yuborish imkoniyati APIda mavjud emas. Shu boisdan kitob mavjud
          bo'lmagandan so'ng keyingi qadamlar kitobni o'chirish, kitobni
          tahrirlash, umumiy hamma kitoblarni ko'rish imkoniyati yo'q.
        </div>
      </div>

      <AddBook
        setEdited={setEdited}
        edited={edited}
        setBookBox={setBookBox}
        bookBox={bookBox}
      />
    </div>
  );
}

export default Home;
