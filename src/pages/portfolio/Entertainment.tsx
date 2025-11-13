import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const Entertainment = () => {
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
              Global Entertainment Hub
            </h1>
            <div className="text-lg font-semibold text-teal mb-6 uppercase tracking-wide">
              Entertainment
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Multi-platform campaign for event promotion with immersive brand experiences and innovative marketing strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">500%</h3>
              <p className="text-muted-foreground">Ticket Sales</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">100K+</h3>
              <p className="text-muted-foreground">Event Attendees</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">92%</h3>
              <p className="text-muted-foreground">Audience Satisfaction</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">50M+</h3>
              <p className="text-muted-foreground">Social Impressions</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Global Entertainment Hub needed to create massive buzz for their events while competing with numerous
                entertainment options in major markets. They required innovative marketing strategies that would not only
                drive ticket sales but create memorable brand experiences that audiences would share and remember.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We created an immersive entertainment marketing ecosystem:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Experiential marketing with interactive brand activations</li>
                <li>• Multi-platform social media campaigns across all channels</li>
                <li>• Integrated promotional campaigns with major media partners</li>
                <li>• Influencer collaborations with entertainment personalities</li>
                <li>• Virtual and augmented reality experiences for promotion</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Achieved</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">500% increase in ticket sales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">100,000+ event attendees across venues</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">50M+ social media impressions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">92% audience satisfaction rating</span>
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

export default Entertainment;