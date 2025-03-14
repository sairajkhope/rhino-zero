"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

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
