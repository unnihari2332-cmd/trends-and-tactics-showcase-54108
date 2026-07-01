import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <Document file="/Portfoliopdf.pdf">
        {Array.from(new Array(18), (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={1000}
          />
        ))}
      </Document>
    </div>
  );
}
