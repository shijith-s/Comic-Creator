import React from "react";
import "../styles/comicPage.css";
import Loader from "./Loader";

function ComicPage({ page }) {
  return (
    <div className="comic__page__canvas">
      {page?.is_loading ? (
        <Loader />
      ) : (
        <div className="comic__page__canvas__content">
          {page?.image && <img src={page?.image} alt={page?.text} />}
        </div>
      )}
    </div>
  );
}

export default ComicPage;
