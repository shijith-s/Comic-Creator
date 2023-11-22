import React from "react";
import ComicPage from "./ComicPage";
import "../styles/comicList.css";

function ComicList({ pages, currPageId, switchPage }) {
  return (
    <div className="comic__page__list">
      {pages.map((page, idx) => (
        <div
          className={`comic__page__list__item${
            idx === currPageId ? " comic__page__list__item__active" : ""
          }`}
          onClick={() => switchPage(idx)}
        >
          <ComicPage key={idx} page={page} />
          <div className="comic__page__list__item__id">Page {idx + 1}</div>
        </div>
      ))}
    </div>
  );
}

export default ComicList;
