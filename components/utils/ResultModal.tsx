import { Button } from "./Button";
import { Modal } from ".";

interface ResultModalProps {
  setShowResultModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResultModal({ setShowResultModal }: ResultModalProps) {
  return (
    <Modal title="Thank You" onClose={() => setShowResultModal(false)}>
      <div className="flex flex-col">
        <h2 className="text-xl mb-4">Review Submitted</h2>
        <p className="mb-4">
          Your review has been successfully submitted. Thank you for taking the
          time to review.
        </p>
        <div className="ml-auto">
          <Button onClick={() => setShowResultModal(false)}>Close</Button>
        </div>
      </div>
    </Modal>
  );
}
