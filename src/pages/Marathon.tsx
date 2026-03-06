import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Marathon = () => {
  const [formData, setFormData] = useState({ fullName: "", phone: "", distance: "" });
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.distance) {
      setSaving(true);
      try {
        await (supabase as any).from("marathon_registrations").insert({
          full_name: formData.fullName,
          phone: formData.phone,
          distance_km: parseFloat(formData.distance),
        });
      } catch (err) {
        console.error("Failed to save registration:", err);
      }
      setSaving(false);
      setSubmitted(true);
    }
  };

  const downloadPDF = async () => {
    if (!certificateRef.current) return;
    const canvas = await html2canvas(certificateRef.current, { scale: 3, useCORS: true, backgroundColor: null });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
    pdf.save(`${formData.fullName.replace(/\s+/g, "_")}_Marathon_Certificate.pdf`);
  };

  // Corner ornament SVG
  const CornerOrnament = ({ style }: { style: React.CSSProperties }) => (
    <div style={{ position: "absolute", width: "60px", height: "60px", ...style }}>
      <svg viewBox="0 0 60 60" width="60" height="60">
        <rect x="2" y="2" width="56" height="56" rx="4" fill="none" stroke="#9a8c2c" strokeWidth="2" />
        <circle cx="30" cy="30" r="16" fill="none" stroke="#9a8c2c" strokeWidth="1.5" />
        <line x1="2" y1="2" x2="20" y2="20" stroke="#9a8c2c" strokeWidth="1.5" />
        <line x1="58" y1="2" x2="40" y2="20" stroke="#9a8c2c" strokeWidth="1.5" />
        <line x1="2" y1="58" x2="20" y2="40" stroke="#9a8c2c" strokeWidth="1.5" />
        <line x1="58" y1="58" x2="40" y2="40" stroke="#9a8c2c" strokeWidth="1.5" />
      </svg>
    </div>
  );

  // Medal SVG
  const MedalSVG = () => (
    <svg viewBox="0 0 120 160" width="120" height="160">
      {/* Ribbons */}
      <polygon points="40,80 20,160 50,130 60,80" fill="#8B7D2B" />
      <polygon points="80,80 100,160 70,130 60,80" fill="#6B5D1B" />
      {/* Medal circle outer */}
      <circle cx="60" cy="55" r="45" fill="url(#medalGrad)" stroke="#8B7D2B" strokeWidth="2" />
      {/* Medal teeth */}
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i * 360) / 28;
        const rad = (angle * Math.PI) / 180;
        const x1 = 60 + 42 * Math.cos(rad);
        const y1 = 55 + 42 * Math.sin(rad);
        const x2 = 60 + 48 * Math.cos(rad);
        const y2 = 55 + 48 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8B7D2B" strokeWidth="2" />;
      })}
      {/* Inner circle */}
      <circle cx="60" cy="55" r="32" fill="url(#medalInner)" />
      <defs>
        <radialGradient id="medalGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <radialGradient id="medalInner" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#E8C547" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#A68B1B" />
        </radialGradient>
      </defs>
    </svg>
  );

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
                <Input id="distance" type="number" min="1" required placeholder="e.g. 5" value={formData.distance} onChange={e => setFormData(p => ({ ...p, distance: e.target.value }))} />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={saving}>
                {saving ? "Saving..." : "Generate Certificate"}
              </Button>
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

            {/* Responsive wrapper */}
            <div className="flex justify-center overflow-auto">
              <div className="w-full max-w-[1122px]" style={{ aspectRatio: "1122/793" }}>
                <div style={{ width: "1122px", height: "793px", transformOrigin: "top left" }} className="scale-[0.3] sm:scale-[0.5] md:scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-top-left">
                  <div
                    ref={certificateRef}
                    style={{
                      width: "1122px",
                      height: "793px",
                      background: "#f5f0e8",
                      position: "relative",
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                      overflow: "hidden",
                    }}
                  >
                    {/* Outer gold border */}
                    <div style={{
                      position: "absolute", inset: "14px",
                      border: "3px solid #9a8c2c",
                    }} />
                    {/* Inner dotted border */}
                    <div style={{
                      position: "absolute", inset: "22px",
                      border: "1.5px dashed #c4a35a",
                    }} />

                    {/* Corner ornaments */}
                    <CornerOrnament style={{ top: "6px", left: "6px" }} />
                    <CornerOrnament style={{ top: "6px", right: "6px", transform: "scaleX(-1)" }} />
                    <CornerOrnament style={{ bottom: "6px", left: "6px", transform: "scaleY(-1)" }} />
                    <CornerOrnament style={{ bottom: "6px", right: "6px", transform: "scale(-1)" }} />

                    {/* Content */}
                    <div style={{
                      position: "absolute", inset: "40px",
                      display: "flex", flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      paddingTop: "50px",
                    }}>
                      {/* CERTIFICATE title */}
                      <h1 style={{
                        fontSize: "64px",
                        fontWeight: 700,
                        color: "#5a1a1a",
                        fontStyle: "italic",
                        textDecoration: "underline",
                        textDecorationColor: "#5a1a1a",
                        textUnderlineOffset: "8px",
                        margin: 0,
                        letterSpacing: "4px",
                      }}>
                        CERTIFICATE
                      </h1>

                      {/* of Participation */}
                      <p style={{
                        fontSize: "28px",
                        fontStyle: "italic",
                        color: "#333",
                        margin: "8px 0 0 0",
                      }}>
                        of Participation
                      </p>

                      {/* Main text */}
                      <p style={{
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        margin: "30px 0 0 0",
                        maxWidth: "700px",
                        lineHeight: 1.5,
                      }}>
                        We are proudly present this For participants
                        <br />in Women's day marathon that we organized
                        <br />on 08/03/2026
                      </p>

                      {/* Participant name */}
                      <p style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#9a8c2c",
                        fontStyle: "italic",
                        margin: "20px 0 0 0",
                      }}>
                        {formData.fullName}
                      </p>

                      {/* Distance */}
                      <p style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#5a1a1a",
                        margin: "8px 0 0 0",
                      }}>
                        Distance: {formData.distance} KM
                      </p>

                      {/* Medal */}
                      <div style={{ marginTop: "20px" }}>
                        <MedalSVG />
                      </div>
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
