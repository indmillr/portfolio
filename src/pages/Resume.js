import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

export default function Resume() {
  return (
    <div>
      <PDFViewer document={{ url: "../Resume--IanMiller.pdf" }} />
    </div>
  );
}
