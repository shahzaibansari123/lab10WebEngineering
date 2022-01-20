import logo from "./logo.svg";
import "./App.css";
import { Route, Router, useParams, Routes, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Student 1</Link>
          </li>
          <li>
            <Link to="/student2">Student 2</Link>
          </li>
          <li>
            <Link to="/student">Student Details</Link>
          </li>
          <li>
            <Link to="/student">Student Grid</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Student1} />
        <Route path="/student2" component={Student2} />
        <Route path="/student2info/:id" component={Student2info} />
        <Route path="/student" component={Student} />
      </div>
    </Router>
  );
}

const Student1 = () => (
  <div>
    <h1>Shahzaib Ansari</h1>
    <p>Here Shahzaib Profile Page: se2019</p>
  </div>
);

const Student2 = () => (
  <div>
    <h1>Shareh</h1>
    <p>Here Shareh Profile Page: se2019</p>
  </div>
);

const Student2info = () => {
  debugger;
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Shareh</h1>
      <p>Here Shareh Profile Page: se2019 {id}</p>
    </div>
  );
};

const Student = () => {
  const { url } = useRouteMatch();
  return (
    <Routes>
      <Route path={`${url}/`} exact component={StudentGrid} />
      <Route path={`${url}/:id`} component={StudentDetail} />
    </Routes>
  );
};

const StudentGrid = () => {
  return (
    <div>
      <h1>Student Grid</h1>
    </div>
  );
};

const StudentDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Student Detail</h1>
      <p>Student detail Page: se2019 {id}</p>
    </div>
  );
};
export default App;
