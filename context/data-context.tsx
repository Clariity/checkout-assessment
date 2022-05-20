import { createContext, ReactNode, useContext, useState } from "react";

import { initialReviews } from "../data/initialReviews";

interface DataContextType {
  reviews: Review[];
  uploadReview: (review: Review) => void;
}

interface DataContextProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextType>({
  reviews: initialReviews,
  uploadReview: () => null,
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: DataContextProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  function uploadReview(review: Review) {
    setReviews((oldReviews) => [review, ...oldReviews]);
  }

  return (
    <DataContext.Provider
      value={{
        reviews,
        uploadReview,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
