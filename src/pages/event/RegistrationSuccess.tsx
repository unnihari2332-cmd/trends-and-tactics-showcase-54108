import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationSuccess = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md text-center">
        <div className="rounded-2xl border border-border bg-card shadow-lg p-8 flex flex-col items-center gap-4">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
          <h1 className="text-2xl font-bold text-foreground">Registration Successful!</h1>
          <p className="text-muted-foreground">Thank you for registering. Your payment has been recorded. You will receive a confirmation email shortly.</p>
          <Button asChild className="mt-4">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default RegistrationSuccess;
