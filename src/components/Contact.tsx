// src/pages/Contact.tsx
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const details = [
    {
      icon: MapPin,
      title: "Chennai Office",
      text: [
        "No.10, 1st floor, 9th Cross St, Kamaraj Colony,",
        "Kodambakkam, Chennai,",
        "Tamil Nadu, 600024.", 
      ],
      iconClass: "text-teal",
    },
    {
      icon: MapPin,
      title: "Coimbatore Office",
      text: [
        "No.7/1, Indra Nagar,Ellai Thottam,",
        "Sowripalayam, Coimbatore,",
        "Tamil Nadu - 641028.", 
      ],
      iconClass: "text-teal",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: ["+91 9944601656"],
      iconClass: "text-orange",
    },
    {
      icon: Mail,
      title: "Email Us",
      text: ["trendsntactics@gmail.com"],
      iconClass: "text-teal",
    },
  ] as const;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // do NOT preventDefault – allow submission to formsubmit.co
    setShowPopup(true);
  };

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    // allow only alphabets + space
    e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    // allow only digits
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* POPUP MODAL */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
              <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
              <p className="mt-2 text-muted-foreground">
                Your message has been sent successfully.
              </p>
              <Button className="mt-6 w-full" onClick={() => setShowPopup(false)}>
                OK
              </Button>
            </div>
          </div>
        )}

        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's Start Your Success Story
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch for a free consultation.
          </p>
        </div>

        {/* LAYOUT: FORM + DETAILS */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: FORM */}
          <div className="glass-card p-6 md:p-7 rounded-2xl h-full">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Send us a message
            </h3>

            <form
              action="https://formsubmit.co/trendsntactics@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Redirect after success (update domain if needed) */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thank-you"
              />
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-3">
                {/* NAME – alphabets only */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="Your name"
                    pattern="[A-Za-z ]+"
                    title="Only alphabets allowed"
                    onInput={handleNameInput}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* PHONE – numbers only */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <Input
                  name="phone"
                  required
                  maxLength={10}
                  pattern="[0-9]+"
                  title="Only numbers allowed"
                  placeholder="10-digit mobile number"
                  onInput={handlePhoneInput}
                />
              </div>

              {/* SUBJECT */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <Input name="subject" placeholder="How can we help?" />
              </div>

              {/* MESSAGE */}
              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="min-h-[120px] resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full mt-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="glass-card p-6 md:p-7 rounded-2xl h-full">
            {details.map(({ icon: Icon, title, text, iconClass }, i) => (
              <div
                key={title}
                className={[
                  i > 0 ? "border-t border-black/10 pt-4 mt-4" : "",
                  "flex items-start gap-3",
                ].join(" ")}
              >
                <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${iconClass}`} />
                <div className="leading-[1.4]">
                  <h4 className="text-lg font-semibold text-foreground">
                    {title}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {text.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx !== text.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
