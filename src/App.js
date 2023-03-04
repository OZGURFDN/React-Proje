import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <Course
      image={Angular}
        title="Angular"
        description="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />

      <Course
        image={bootstrap5}
        title="Bootstrap 5"
        description="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />

      <Course
        image={ccsharp}
        title="Komple Web"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />

      <Course
        image={kompleweb}
        title="Frontend"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />
    </div>
  );
}

export default App;
