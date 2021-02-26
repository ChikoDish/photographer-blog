import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={Blogs} exact />
          <Route path="/add" component={AddBlog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
