import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false); // ✅ POPUP STATE

  const details = [
    // ...same as before
  ];

  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-6">

        {/* --- Popup Modal --- */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
              <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
              <p className="mt-2 text-muted-foreground">
                Your message has been sent successfully.
              </p>

              <Button
                className="mt-6 w-full"
                onClick={() => setShowPopup(false)}
              >
                OK
              </Button>
            </div>
          </div>
        )}

        {/* --- Heading --- */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's Start Your Success Story
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch for a free consultation.
          </p>
        </div>

        {/* --- Form + Details Layout --- */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT FORM */}
          <div className="glass-card p-6 md:p-7 rounded-2xl h-full">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Send us a message
            </h3>

            <form
              action="https://formsubmit.co/trendsntactics@gmail.com"
              method="POST"
              onSubmit={() => setShowPopup(true)}   // ✅ SHOW POPUP ON SUBMIT
            >
              {/* After-success redirect */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input name="name" required placeholder="Your name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input name="email" type="email" required placeholder="your@email.com" />
                </div>
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input name="phone" type="tel" placeholder="+91 00000 00000" />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Subject</label>
                <Input name="subject" placeholder="How can we help?" />
              </div>

              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE CONTACT DETAILS */}
          {/* your existing details UI here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
