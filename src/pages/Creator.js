import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ComicPage from "../components/ComicPage";
import "../styles/creator.css";
import ComixTextModal from "../components/ComixTextModal";
import { generateImage } from "../services/comics";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const INITIAL_SIZE = 10;
const BASE_STRUCTURE = {
  is_loading: false,
  is_created: false,
  text: "",
  image: null,
};

function Creator() {
  const [pages, setPages] = useState([]);
  const [currPageId, setCurrPageId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (pages.length === 0) {
      let temp = [];
      temp = Array(INITIAL_SIZE).fill({ ...BASE_STRUCTURE });
      setPages(temp);
    }
  }, []);

  const generate = async (pageId, text) => {
    // This function handles the fetching of generated images and setting it to the state
    setLoader(pageId, true);
    setText(pageId, text);
    let image = await generateImage(text);
    setImage(pageId, image);
    setLoader(pageId, false);
  };

  const setText = (pageId, text) => {
    // Modifies the text for the current Comic Page
    setPages((pages) =>
      pages.map((item, id) => {
        if (id === pageId) {
          return { ...item, text: text };
        }
        return item;
      })
    );
  };

  const setLoader = (pageId, flag) => {
    // Modifies the loading state of current comic page
    setPages((pages) =>
      pages.map((item, id) => {
        let newItem = { ...item };
        if (id === pageId) {
          newItem.is_loading = flag;
        }
        return newItem;
      })
    );
  };

  const setImage = (pageId, image) => {
    // Adds the image to the current comic page
    setPages((pages) =>
      pages.map((item, id) => {
        let newItem = { ...item };
        if (id === pageId) {
          if (!image) {
            newItem.image = null;
            newItem.is_created = false;
          } else {
            newItem.image = image;
            newItem.is_created = true;
          }
        }
        return newItem;
      })
    );
  };

  const goToNextPage = () => {
    // Handle movement to next page
    if (currPageId === pages.length - 1) return;
    setCurrPageId((page) => page + 1);
  };

  const goToPrevPage = () => {
    // handles movement to prev page
    if (currPageId === 0) return;
    setCurrPageId((page) => page - 1);
  };

  const openModal = () => {
    // opens the modal to edit/create the text for current page
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Closes the modal
    setIsModalOpen(false);
  };

  return (
    <div className="comic__creator">
      <div>
        <NavBar />
      </div>
      <div className="comic__creator_main_content">
        <div className="comic__page__main__canvas">
          <ComicPage page={pages[currPageId]} />
        </div>
      </div>
      <button className="comic__creator__generate__btn" onClick={openModal}>
        Create
      </button>
      {/* <ComicList pages={pages} /> */}
      {isModalOpen && (
        <ComixTextModal
          currPageId={currPageId}
          closeModal={closeModal}
          generate={generate}
        />
      )}
      <div className="comic__creator__nav__btns">
        <button onClick={goToPrevPage} disabled={currPageId === 0}>
          <ArrowDropUpIcon />
        </button>
        <button
          onClick={goToNextPage}
          disabled={currPageId === pages.length - 1}
        >
          <ArrowDropDownIcon />
        </button>
      </div>
    </div>
  );
}

export default Creator;
