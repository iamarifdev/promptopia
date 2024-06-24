import UpdatePromptClient from "@/components/UpdatePromptClient";
import { Suspense } from "react";

const UpdatePrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptClient />
    </Suspense>
  );
};

export default UpdatePrompt;
