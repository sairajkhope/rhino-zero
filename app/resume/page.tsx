"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // Directly open the PDF in a new tab
    window.open("/resume.pdf", "_blank");
    // Go back to the previous page
    window.history.back();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>Opening resume...</p>
    </div>
  );
}
