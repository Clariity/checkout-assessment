import { useEffect, useState } from "react";

interface StarRatingProps {
  error?: string;
  id: string;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export function StarRating({ error, id, rating, setRating }: StarRatingProps) {
  const [hover, setHover] = useState<number>(rating);

  // reset hover
  useEffect(() => {
    if (rating === 0) setHover(0);
  }, [rating]);

  return (
    <>
      <label className="mb-[2px]" htmlFor={`star rating ${id}`}>
        Rating
      </label>
      <div
        className={`rounded-md mx-auto px-2 ${
          error ? "outline outline-error outline-2" : ""
        }`}
        id={`star rating ${id}`}
      >
        {Array(5)
          .fill(0)
          .map((_, index) => {
            return (
              <button
                aria-label={`star ${index + 1} ${id}`}
                className={
                  index + 1 <= (hover || rating) ? "text-theme" : "text-white"
                }
                type="button"
                key={`star ${index + 1}`}
                onClick={() => setRating(index + 1)}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="text-6xl">&#9733;</span>
              </button>
            );
          })}
      </div>
    </>
  );
}
