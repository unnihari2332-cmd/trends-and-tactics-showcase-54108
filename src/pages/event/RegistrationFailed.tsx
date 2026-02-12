import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationFailed = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md text-center">
        <div className="rounded-2xl border border-border bg-card shadow-lg p-8 flex flex-col items-center gap-4">
          <XCircle className="w-16 h-16 text-destructive" />
          <h1 className="text-2xl font-bold text-foreground">Payment Failed</h1>
          <p className="text-muted-foreground">Your payment could not be processed. Please try again or contact support if the issue persists.</p>
          <div className="flex gap-3 mt-4">
            <Button asChild>
              <Link to="/event/registrations">Try Again</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default RegistrationFailed;
