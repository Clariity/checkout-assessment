interface ViewStarRatingProps {
  id: string;
  rating: number;
}

export function ViewStarRating({ id, rating }: ViewStarRatingProps) {
  return (
    <div className="flex" id={`star rating ${id}`}>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              aria-label={`star ${index + 1} ${id}`}
              className={index + 1 <= rating ? "text-theme" : "text-white"}
              key={`star ${index + 1}`}
            >
              <span className="text-xl">&#9733;</span>
            </div>
          );
        })}
    </div>
  );
}
