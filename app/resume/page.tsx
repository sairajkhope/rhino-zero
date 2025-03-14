"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // Redirect to the PDF file
    window.location.href = "/resume.pdf";
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p>Loading resume...</p>
    </div>
  );
}
