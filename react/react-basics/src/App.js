const books = [
  {
    id: 0,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 1,
    author: "Alice Schertle",
    title: "Little Blue Truck's Valentine",
    img: "https://images-na.ssl-images-amazon.com/images/I/910lu-HKDYL._AC_UL200_SR200,200_.jpg",
  },
];

function App() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
