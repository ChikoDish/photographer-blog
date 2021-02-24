import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={Blogs} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
