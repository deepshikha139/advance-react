import { useState } from "react";
import './App.css'

const FiveStar = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const onClickStar = (item) => {
        rating === 1 ? setRating(0) : setRating(item);
    }
    const onMouseOver = (item) => {
        setHover(item);
    }
    const onMouseLeave = () => {
        setHover(rating);
    }


    return (
        <div>
        {
          [1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => onClickStar(num)}
              onMouseOver={() => onMouseOver(num)}
              onMouseLeave={() => onMouseLeave()}
            >
              <span
                className={
                    `star ${(num <=rating) || (num <= hover)
                        ? 'on' : 'off'
                      }`
                }
              >&#9733;</span>
            </button>
          ))
        }
      </div>
    );
}

export default FiveStar;