import React from "react";

function Course({ image, title, description }) {
  //   console.log(props);
  //   const title = props.title;
  //   const description = props.Description;
  //   const { title, description } = props;
  return (
    <div>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default Course;
