import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";

const Marathon = () => {
  const [formData, setFormData] = useState({ fullName: "", phone: "", distance: "" });
  const [submitted, setSubmitted] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.distance) {
      setSubmitted(true);
    }
  };

  const downloadPDF = async () => {
    if (!certificateRef.current) return;
    const canvas = await html2canvas(certificateRef.current, { scale: 3, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
    pdf.save(`${formData.fullName.replace(/\s+/g, "_")}_Marathon_Certificate.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 px-4">
        {!submitted ? (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Award className="w-12 h-12 mx-auto mb-3 text-[#E05D35]" />
              <h1 className="text-3xl font-bold text-foreground">Marathon Certificate Generator</h1>
              <p className="text-muted-foreground mt-2">Fill in your details to generate your participation certificate</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card shadow-lg p-8">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" required placeholder="Enter your full name" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="Enter your phone number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distance">Marathon Distance (KM)</Label>
                <Input id="distance" type="number" min="1" required placeholder="e.g. 42" value={formData.distance} onChange={e => setFormData(p => ({ ...p, distance: e.target.value }))} />
              </div>
              <Button type="submit" className="w-full" size="lg">Generate Certificate</Button>
            </form>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex justify-center gap-4 flex-wrap">
              <Button onClick={downloadPDF} size="lg" className="gap-2">
                <Download className="w-5 h-5" /> Download Certificate as PDF
              </Button>
              <Button variant="outline" size="lg" onClick={() => setSubmitted(false)}>
                Generate Another
              </Button>
            </div>

            {/* Certificate */}
            <div className="flex justify-center overflow-auto">
              <div
                ref={certificateRef}
                style={{
                  width: "1122px",
                  height: "793px",
                  background: "linear-gradient(135deg, #fffbe6 0%, #fff7e0 50%, #fff3d0 100%)",
                  position: "relative",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  overflow: "hidden",
                }}
              >
                {/* Outer border */}
                <div style={{
                  position: "absolute", inset: "16px",
                  border: "4px solid #b8860b",
                  borderRadius: "12px",
                }} />
                {/* Inner border */}
                <div style={{
                  position: "absolute", inset: "28px",
                  border: "2px solid #daa520",
                  borderRadius: "8px",
                }} />
                {/* Corner ornaments */}
                {["top-left", "top-right", "bottom-left", "bottom-right"].map(pos => {
                  const isTop = pos.includes("top");
                  const isLeft = pos.includes("left");
                  return (
                    <div key={pos} style={{
                      position: "absolute",
                      [isTop ? "top" : "bottom"]: "20px",
                      [isLeft ? "left" : "right"]: "20px",
                      width: "60px", height: "60px",
                      borderTop: isTop ? "4px solid #b8860b" : "none",
                      borderBottom: !isTop ? "4px solid #b8860b" : "none",
                      borderLeft: isLeft ? "4px solid #b8860b" : "none",
                      borderRight: !isLeft ? "4px solid #b8860b" : "none",
                      borderRadius: "4px",
                    }} />
                  );
                })}

                {/* Content */}
                <div style={{
                  position: "absolute", inset: "50px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  textAlign: "center", gap: "8px",
                }}>
                  <div style={{ fontSize: "16px", letterSpacing: "6px", color: "#b8860b", textTransform: "uppercase", fontWeight: 600 }}>
                    Certificate of Participation
                  </div>
                  <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#1a1a1a", margin: "4px 0", lineHeight: 1.1 }}>
                    Marathon Participation Certificate
                  </h2>
                  <div style={{ width: "200px", height: "3px", background: "linear-gradient(90deg, transparent, #b8860b, transparent)", margin: "8px 0" }} />
                  <p style={{ fontSize: "18px", color: "#555", margin: "4px 0" }}>This is to certify that</p>
                  <p style={{ fontSize: "38px", fontWeight: 700, color: "#b8860b", fontStyle: "italic", margin: "4px 0" }}>
                    {formData.fullName}
                  </p>
                  <p style={{ fontSize: "17px", color: "#555", margin: "2px 0" }}>
                    Phone: {formData.phone}
                  </p>
                  <p style={{ fontSize: "18px", color: "#333", margin: "8px 0", maxWidth: "600px", lineHeight: 1.5 }}>
                    has successfully participated in the marathon and completed a distance of
                  </p>
                  <p style={{ fontSize: "48px", fontWeight: 800, color: "#E05D35", margin: "0" }}>
                    {formData.distance} KM
                  </p>
                  <div style={{ width: "200px", height: "3px", background: "linear-gradient(90deg, transparent, #b8860b, transparent)", margin: "12px 0" }} />
                  <p style={{ fontSize: "16px", color: "#777" }}>
                    Date: {currentDate}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginTop: "28px" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ width: "180px", borderBottom: "2px solid #b8860b", marginBottom: "6px" }} />
                      <span style={{ fontSize: "13px", color: "#888" }}>Event Organizer</span>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ width: "180px", borderBottom: "2px solid #b8860b", marginBottom: "6px" }} />
                      <span style={{ fontSize: "13px", color: "#888" }}>Authorized Signature</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Marathon;
