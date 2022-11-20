import "./card.scss";
import Image from "../image/Image";
import { Zoom, Fade, Flip, Rotate, Bounce, Roll } from "react-awesome-reveal";

function Card({ item, shuffleAnimate }) {
  if (shuffleAnimate === "Flip") {
    return (
      <Flip>
        <li className="card_container">
          <Image
            src={item?.download_url}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Flip>
    );
  }

  if (shuffleAnimate === "Fade")
    return (
      <Fade>
        <li className="card_container">
          <Image
            src={item?.download_url}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Fade>
    );
  if (shuffleAnimate === "Rotate")
    return (
      <Rotate>
        <li className="card_container">
          <Image
            src={item?.download_url}
            text={item?.author}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Rotate>
    );
  if (shuffleAnimate === "Zoom")
    return (
      <Zoom>
        <li className="card_container">
          <Image
            src={item?.download_url}
            text={item?.author}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Zoom>
    );
  if (shuffleAnimate === "Bounce")
    return (
      <Bounce>
        <li className="card_container">
          {/* {item.id} */}
          <Image
            src={item?.download_url}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Bounce>
    );
  if (shuffleAnimate === "Roll")
    return (
      <Roll>
        <li className="card_container">
          <Image
            src={item?.download_url}
            alt={item?.author}
            style={{ borderRadius: "10px", objectFit: "cover" }}
          />
          <span className="text"> {item?.author}</span>
        </li>
      </Roll>
    );
}

export default Card;
