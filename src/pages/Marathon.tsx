import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CERT_W = 1122;
const CERT_H = 793;

const CertificateContent = ({ fullName, distance }: { fullName: string; distance: string }) => (
  <div style={{
    width: `${CERT_W}px`,
    height: `${CERT_H}px`,
    position: "relative",
    backgroundImage: "url('/certificate-bg.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* Name overlay positioned on the underlined space */}
    <div style={{
      position: "absolute",
      top: "40%",
      left: "0",
      width: "100%",
      fontSize: "36px",
      fontWeight: 700,
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#1a1a1a",
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "1",
    }}>
      {fullName} - {distance} KM
    </div>
  </div>
);

const Marathon = () => {
  const [formData, setFormData] = useState({ fullName: "", phone: "", distance: "" });
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const pdfCertRef = useRef<HTMLDivElement>(null);

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
    if (!pdfCertRef.current) return;
    const canvas = await html2canvas(pdfCertRef.current, {
      scale: 3,
      useCORS: true,
      width: CERT_W,
      height: CERT_H,
      windowWidth: CERT_W,
      windowHeight: CERT_H,
      scrollX: 0,
      scrollY: 0,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
    pdf.save(`${formData.fullName.replace(/\s+/g, "_")}_Marathon_Certificate.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 py-10 px-4">
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

            {/* Visible scaled preview */}
            <div className="flex justify-center overflow-hidden">
              <div className="w-full" style={{ maxWidth: `${CERT_W}px`, aspectRatio: `${CERT_W}/${CERT_H}` }}>
                <div className="relative w-full h-0" style={{ paddingBottom: `${(CERT_H / CERT_W) * 100}%` }}>
                  <div style={{
                    width: `${CERT_W}px`,
                    height: `${CERT_H}px`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transformOrigin: "top left",
                    transform: `scale(var(--cert-scale, 1))`,
                  }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.parentElement;
                        if (parent) {
                          const scale = parent.clientWidth / CERT_W;
                          el.style.setProperty("--cert-scale", String(Math.min(scale, 1)));
                        }
                      }
                    }}
                  >
                    <CertificateContent fullName={formData.fullName} distance={formData.distance} />
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden full-size certificate for PDF capture */}
            <div style={{ position: "fixed", left: "-9999px", top: 0 }} aria-hidden="true">
              <div ref={pdfCertRef}>
                <CertificateContent fullName={formData.fullName} distance={formData.distance} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Marathon;
