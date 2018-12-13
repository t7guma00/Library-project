import React, { Component } from "react";
import "./App.css";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import UpdateBook from "./Components/UpdateBook";
import DeleteBook from "./Components/DeleteBook";
import Books from "./Views/Books";
import Tools from "./Views/Tools";
import Home from "./Views/Home";
import SignIn from "./Views/Signin";
import SignUp from "./Views/Signup";
import About from "./Views/About";
import SelectedBook from "./Components/SelectedBook";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./Components/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/home"
            render={() => (
              <div className="App">
                <Home />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/signin"
            render={() => (
              <div className="App">
                <SignIn />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/signup"
            render={() => (
              <div className="App">
                <SignUp />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/booklist"
            render={() => (
              <div className="App">
                <BookList />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/books"
            render={() => (
              <div className="App">
                <Books />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/addbook"
            render={() => (
              <div className="App">
                <AddBook />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/updatebook"
            render={() => (
              <div className="App">
                <UpdateBook />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/deletebook"
            render={() => (
              <div className="App">
                <DeleteBook />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/tools"
            render={() => (
              <div className="App">
                <Tools />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/about"
            render={() => (
              <div className="App">
                <About />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/register"
            render={() => (
              <div className="App">
                <Register />
              </div>
            )}
          />

          <Route path="/selectedbook/:id" exact component={SelectedBook} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
