import { Heading, SEO } from "../components/utils";
import { ReviewGraph, Reviews } from "../components/reviews";
import { SubmissionForm } from "../components/submission";

export default function Index() {
  return (
    <div className="flex flex-col container pb-6">
      <SEO description="Review your checkout experience" title="review" />

      <div className="flex flex-col h-full">
        <div className="flex flex-col mb-8 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <SubmissionForm />
          </div>

          <div className="w-full xl:w-1/2 xl:pl-4">
            <Heading>Reviews</Heading>
            <ReviewGraph />
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
}
