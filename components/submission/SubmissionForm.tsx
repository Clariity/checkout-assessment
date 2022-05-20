import { ChangeEvent, useState } from "react";
import Filter from "bad-words";

import { useData } from "../../context/data-context";
import { validateEmail } from "../../functions/helpers";
import {
  Button,
  CommentInput,
  ErrorMessage,
  Heading,
  ResultModal,
  StarRating,
  TextInput,
} from "../utils";

interface Errors {
  name?: string;
  email?: string;
  rating?: string;
  comment?: string;
}

export function SubmissionForm() {
  const { reviews, uploadReview } = useData();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const wordFilter = new Filter();

  function checkErrors() {
    const newErrors = {
      ...((!name || wordFilter.isProfane(name)) && {
        name: "A full name must be provided. The name must not contain any profanity.",
      }),
      ...((!email || !validateEmail(email)) && {
        email: "A valid email must be provided.",
      }),
      ...(rating === 0 && {
        rating: "A rating of AT LEAST 1 star must be provided.",
      }),
      ...((!comment || wordFilter.isProfane(comment)) && {
        comment:
          "A comment must be provided. The comment must not contain any profanity.",
      }),
    };
    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  }

  // submit review
  async function handleSubmit() {
    // errors present so don't submit
    if (checkErrors()) return;

    const id = String(reviews.length + 1); // would have used UUID but it wasn't playing ball with jest
    const newSubmission = {
      id,
      name,
      email,
      rating,
      comment,
      timestamp: new Date(),
    };

    uploadReview(newSubmission);

    setShowResultModal(true);
    resetForm();
  }

  function resetForm() {
    setName("");
    setEmail("");
    setRating(0);
    setComment("");
  }

  return (
    <div className="flex flex-col h-full">
      <Heading>Submit Review</Heading>

      <TextInput
        error={errors.name}
        id="name"
        label="Full Name"
        placeholder="e.g. Margaret Hamilton"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <TextInput
        error={errors.email}
        id="email"
        label="Email Address"
        placeholder="e.g. margaret.hamilton@nasa.com"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <StarRating
        error={errors.rating}
        id="form"
        rating={rating}
        setRating={setRating}
      />

      <CommentInput
        error={errors.comment}
        id="comment"
        label="Comment"
        placeholder="Enter your review comments here"
        value={comment}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
      />

      {Object.keys(errors).length > 0 && (
        <ErrorMessage>
          The following criteria was not met for your submission:
          <ul className="mt-4 list-disc list-inside">
            {Object.entries(errors).map(([key, error]) => (
              <li key={key}>{`${key}: ${error}`}</li>
            ))}
          </ul>
        </ErrorMessage>
      )}

      <Button onClick={handleSubmit}>Submit</Button>

      {showResultModal && (
        <ResultModal setShowResultModal={setShowResultModal} />
      )}
    </div>
  );
}
