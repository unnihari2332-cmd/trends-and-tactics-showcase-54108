import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PortfolioPage() {
  const [numPages, setNumPages] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-10">
        <Document
          file="/Portfoliopdf.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={(err) => console.error(err)}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div key={index} className="flex justify-center mb-6">
              <Page
                pageNumber={index + 1}
                width={window.innerWidth > 768 ? 900 : window.innerWidth - 20}
              />
            </div>
          ))}
        </Document>
      </main>

      <Footer />
    </div>
  );
}
