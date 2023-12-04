import "./addBook.scss";

function AddBook({ setBookBox, bookBox, edited, setEdited }) {
  const myBook = (e) => {
    e.preventDefault();
  };
  return (
    <div className={bookBox ? "addBook-window" : "d-none"}>
      <div className="close-box" onClick={() => setBookBox(false)}></div>
      <div className="box">
        <div className="title-cancel">
          <div className="title">
            {edited == 1 ? "Edit Book" : "Create a book"}
          </div>
          <div
            className="cancel"
            onClick={() => {
              setBookBox(false);
              setEdited(0);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <form onSubmit={myBook}>
          <label htmlFor="title">Title</label>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter your title"
            />
          </div>
          <label htmlFor="author">Author</label>
          <div>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Enter your author"
            />
          </div>
          <label htmlFor="cover">Cover</label>
          <div>
            <img src="images/cover.svg" alt="Cover" />
            <input
              type="text"
              name="cover"
              id="cover"
              placeholder="Enter your cover"
            />
          </div>
          <label htmlFor="published">Published</label>
          <div>
            <img src="images/published.svg" alt="published" />
            <input
              type="date"
              name="published"
              id="published"
              placeholder="Enter your published"
            />
          </div>
          <label htmlFor="pages">Pages</label>
          <div>
            <input
              type="number"
              name="pages"
              id="pages"
              placeholder="Enter your pages"
            />
          </div>
          <div>
            <button
              onClick={() => {
                setBookBox(false);
                setEdited(0);
              }}
              type="button"
            >
              Close
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
