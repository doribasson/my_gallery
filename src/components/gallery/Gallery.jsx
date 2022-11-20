import Card from "../card/Card";
import "./gallery.scss";
import { useEffect } from "react";
import {
  getPicturesByIndex,
  incrementIndexPage,
} from "../../redux/action/gallery";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { Zoom } from "react-awesome-reveal";

function Gallery() {
  const dispatch = useDispatch();
  const getGallery = useSelector((state) => state.galleryReducer);
  const { gallery, loading, indexPage } = getGallery;

  const endPage = 34;
  const animates = ["Zoom", "Fade", "Flip", "Rotate", "Zoom", "Bounce", "Roll"];

  useEffect(() => {
    dispatch(getPicturesByIndex(1));
  }, [dispatch]);

  const firstEvent = (e) => {
    if (indexPage < endPage) {
      let bottom =
        e?.target.scrollHeight - e?.target.scrollTop - e?.target.clientHeight <
        50;
      if (bottom) {
        dispatch(getPicturesByIndex(indexPage + 1));
        dispatch(incrementIndexPage(indexPage + 1));
      }
    }
  };

  if (loading) {
    return (
      <div className="loader_container">
        <Loader />
      </div>
    );
  }

  return (
    <div onScroll={firstEvent} className="ImageScrolling">
      {gallery?.length && (
        <div>
          <span className="gallery_header">
            <Zoom> Welcome to gallery </Zoom>
          </span>
          <ul className="gallery_container">
            {gallery?.map((item) => {
              let shuffleAnimate = Math.floor(Math.random() * animates.length);
              return (
                <Card
                  shuffleAnimate={animates[shuffleAnimate]}
                  key={item.id}
                  item={item}
                />
              );
            })}
            <p>{indexPage >= endPage && "end...."}</p>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Gallery;
