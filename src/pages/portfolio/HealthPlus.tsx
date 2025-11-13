import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const HealthPlus = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-12 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              HealthPlus Clinic
            </h1>
            <div className="text-lg font-semibold text-teal mb-6 uppercase tracking-wide">
              Healthcare
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Patient acquisition through targeted digital channels and community engagement programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">200%</h3>
              <p className="text-muted-foreground">Patient Growth</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">5K+</h3>
              <p className="text-muted-foreground">New Patients</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">98%</h3>
              <p className="text-muted-foreground">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">24/7</h3>
              <p className="text-muted-foreground">Online Support</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                HealthPlus Clinic needed to expand their patient base while building trust in the healthcare community.
                They required a sensitive approach to digital marketing that would educate potential patients about
                healthcare services while maintaining the highest standards of medical professionalism and ethics.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We developed a trust-focused healthcare marketing strategy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Educational content campaigns about preventive healthcare</li>
                <li>• Patient-centric digital experiences and online booking</li>
                <li>• Community engagement programs and health awareness initiatives</li>
                <li>• Testimonial campaigns showcasing patient success stories</li>
                <li>• 24/7 online support and telemedicine integration</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Achieved</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">200% increase in patient acquisition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">5,000+ new patients registered</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">98% patient satisfaction rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">24/7 online support system launched</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HealthPlus;