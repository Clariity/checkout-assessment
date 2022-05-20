import { useData } from "../../context/data-context";
import { ProgressBar } from "../utils";

export function ReviewGraph() {
  const { reviews } = useData();

  const starGroups = reviews.reduce(
    (acc: number[], { rating }: { rating: number }) => {
      acc[rating - 1] += 1;
      return acc;
    },
    [0, 0, 0, 0, 0]
  );

  return (
    <div className="flex flex-col-reverse">
      {starGroups.map((n: number, i: number) => (
        <div className="flex mb-6 w-full" key={i}>
          <p className="w-10">{i + 1} &#9733;</p>
          <ProgressBar number={n} total={reviews.length} />
        </div>
      ))}
    </div>
  );
}
