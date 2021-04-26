import "./App.css";
import React from "react";
import IdCard from "./components/idCard/IdCard";
import Book from "./components/book/book";
import Movie from "./components/movie/movie";
import Wrapper from "./components/wrapper/wrapper";
function App() {
  return (
    <div className="App">
      <h1>Id Card</h1>

      <Wrapper>
        <IdCard
          name="Brad"
          surname="Pitt"
          date="1963"
          city="Shawnee"
          src="bradpitt.jpg"
        />
        <IdCard
          name="Angelina"
          surname="Jolie"
          date="1975"
          city="Los Angeles"
          src="angelinajolie.jpg"
        />
        <IdCard
          name="George"
          surname="Clooney"
          date="1961"
          city="Lexington"
          src="georgeclooney.jpg"
        />
      </Wrapper>

      <h1>Movie Card</h1>
      <Wrapper>
        <Movie
          name="Limitless"
          year="2011"
          genre="Sci-Fi"
          director="Neil Burger"
          actors="Bradley Cooper, Anna Friel"
          src="limitless.jpg"
        />
        <Movie
          name="Ace Ventura"
          year="1994"
          genre="Comedy"
          director="Tom Shadyac"
          actors="Jim Carrey, Courtney Cox"
          src="aceventura.jpg"
        />
        <Movie
          name="Se7en"
          year="2011"
          genre="Crime,Drama"
          director="David Fincher"
          actors="Morgan Freeman, Brad Pitt"
          src="seven.jpg"
        />
      </Wrapper>
      <h1>Book Card</h1>
      <Wrapper>
        <Book
          name="Game of Thrones"
          year="1996"
          author="George R.R. Martin"
          src="got.jpg"
          quote="“Fear cuts deeper than swords.”"
        />
        <Book
          name="Secret"
          year="2006"
          author="Rhonda Byrne"
          src="secret.jpg"
          quote="”Your thoughts become things”"
        />
        <Book
          name="The Old Man and the Sea"
          year="1952"
          author="Ernest Hemingway"
          src="TheOldMan.jpg"
          quote="“It's silly not to hope. It's a sin he thought.”"
        />
      </Wrapper>
    </div>
  );
}

export default App;
