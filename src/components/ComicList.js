import React from "react";
import ComicPage from "./ComicPage";

function ComicList({ pages }) {
  return (
    <div className="comic__page__list">
      {pages.map((page, idx) => (
        <ComicPage key={idx} page={page} />
      ))}
    </div>
  );
}

export default ComicList;
