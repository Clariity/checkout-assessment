import { useData } from "../../context/data-context";
import { ViewStarRating } from "../utils";

export function Reviews() {
  const { reviews } = useData();

  return (
    <div aria-label="review list" className="flex flex-col">
      {reviews.map(({ comment, id, name, rating }: Review, index: number) => (
        <div
          className="flex flex-col bg-secondary rounded-md p-4 mb-4 shadow-sm"
          key={id}
        >
          <ViewStarRating id={`review ${index + 1}`} rating={rating} />
          <b className="mb-2">{name}</b>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
}
