import React from "react";

const Book = (props) => {
  const { data } = props;
  return (
    <div>
      <div>
        <p>{data.title}</p>
        <p>{data.author_name}</p>
      </div>
    </div>
  );
};

export default Book;
