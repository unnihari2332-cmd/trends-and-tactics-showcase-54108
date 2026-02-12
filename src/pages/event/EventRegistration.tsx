import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, XCircle, Smartphone } from "lucide-react";
import { z } from "zod";

const registrationSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  eventName: z.string().trim().min(1, "Event name is required").max(200),
  paymentAmount: z.number().min(1, "Amount must be at least ₹1"),
});

const UPI_ID = "karthikjungleemara-2@oksbi";
const BUSINESS_NAME = "EventRegistration";

type Step = "form" | "processing" | "confirm" | "txn_id";

const EventRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("form");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventName: "",
    paymentAmount: "",
  });
  const [transactionId, setTransactionId] = useState("");

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const result = registrationSchema.safeParse({
      ...form,
      paymentAmount: Number(form.paymentAmount),
    });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((e) => {
        const key = e.path[0] as string;
        fieldErrors[key] = e.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handlePayNow = () => {
    if (!validateForm()) return;
    const amount = Number(form.paymentAmount);
    const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(BUSINESS_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(form.eventName)}`;
    window.location.href = upiUrl;
    setStep("processing");
    // After a brief delay, show confirm buttons
    setTimeout(() => setStep("confirm"), 3000);
  };

  const handlePaymentSuccess = () => {
    setStep("txn_id");
  };

  const handlePaymentFailed = () => {
    navigate("/event/registration-failed");
  };

  const handleSubmitRegistration = async () => {
    if (!transactionId.trim()) {
      toast({ title: "Transaction ID is required", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("event_registrations").insert({
        full_name: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        event_name: form.eventName.trim(),
        payment_amount: Number(form.paymentAmount),
        upi_transaction_id: transactionId.trim(),
        payment_status: "success",
      });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "You have already registered for this event with this email.", variant: "destructive" });
        } else {
          toast({ title: "Registration failed. Please try again.", variant: "destructive" });
        }
        setSubmitting(false);
        return;
      }
      navigate("/event/registration-success");
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg">
          <div className="rounded-2xl border border-border bg-card shadow-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Event Registration</h1>
            <p className="text-muted-foreground mb-6 text-sm">Fill in your details and complete the payment via UPI.</p>

            {step === "form" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="John Doe" />
                  {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@example.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="9876543210" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input id="eventName" value={form.eventName} onChange={(e) => updateField("eventName", e.target.value)} placeholder="Annual Tech Summit 2026" />
                  {errors.eventName && <p className="text-xs text-destructive mt-1">{errors.eventName}</p>}
                </div>
                <div>
                  <Label htmlFor="paymentAmount">Payment Amount (₹)</Label>
                  <Input id="paymentAmount" type="number" min="1" value={form.paymentAmount} onChange={(e) => updateField("paymentAmount", e.target.value)} placeholder="500" />
                  {errors.paymentAmount && <p className="text-xs text-destructive mt-1">{errors.paymentAmount}</p>}
                </div>
                <Button onClick={handlePayNow} className="w-full mt-2 gap-2" size="lg">
                  <Smartphone className="w-5 h-5" /> Pay via UPI
                </Button>
              </div>
            )}

            {step === "processing" && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <p className="text-lg font-medium text-foreground">Processing Payment...</p>
                <p className="text-sm text-muted-foreground">Complete the payment in your UPI app and return here.</p>
              </div>
            )}

            {step === "confirm" && (
              <div className="flex flex-col items-center justify-center py-8 gap-6">
                <p className="text-lg font-semibold text-foreground text-center">Did your payment go through?</p>
                <div className="flex gap-4 w-full">
                  <Button onClick={handlePaymentSuccess} className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white">
                    <CheckCircle2 className="w-5 h-5" /> Payment Successful
                  </Button>
                  <Button onClick={handlePaymentFailed} variant="destructive" className="flex-1 gap-2">
                    <XCircle className="w-5 h-5" /> Payment Failed
                  </Button>
                </div>
              </div>
            )}

            {step === "txn_id" && (
              <div className="space-y-4 py-4">
                <p className="text-sm text-muted-foreground">Enter the UPI Transaction ID from your payment app to confirm your registration.</p>
                <div>
                  <Label htmlFor="transactionId">UPI Transaction ID</Label>
                  <Input id="transactionId" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} placeholder="e.g. 412345678901" />
                </div>
                <Button onClick={handleSubmitRegistration} disabled={submitting} className="w-full" size="lg">
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Submit Registration
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventRegistration;
