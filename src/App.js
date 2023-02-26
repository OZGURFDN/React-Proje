import "./App.css";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />
      <Course
        title="Bootstrap 5"
        description="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />
      <Course
        title="Komple Web"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum unde
          alias laboriosam minima! Omnis, quisquam. Optio doloremque deserunt,
          rem inventore magnam maiores et dolore accusamus ad placeat
          repudiandae animi minima?"
      />
      <Course
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
