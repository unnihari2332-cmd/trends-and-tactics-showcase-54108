import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import luxeJewelryHero from "@/assets/luxe-jewelry-hero.jpg";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const LuxeJewelry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${luxeJewelryHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Luxe Jewelry Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Elevating luxury jewelry brands through sophisticated digital marketing and elegant design.
          </motion.p>
        </div>
      </section>
      
      <section className="pt-12 pb-12 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="text-lg font-semibold text-teal mb-6 uppercase tracking-wide">
              Retail
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Festive campaign driving exceptional sales through strategic social media marketing and influencer partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">300%</h3>
              <p className="text-muted-foreground">Sales Growth</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">50K+</h3>
              <p className="text-muted-foreground">New Customers</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">85%</h3>
              <p className="text-muted-foreground">Customer Retention</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">15M+</h3>
              <p className="text-muted-foreground">Social Reach</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Luxe Jewelry Collection needed to establish a premium brand presence in the competitive luxury jewelry market.
                They required a sophisticated marketing strategy that would resonate with high-end consumers during peak shopping seasons,
                particularly during festive periods when jewelry purchases spike significantly.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We developed a comprehensive luxury marketing strategy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Premium brand positioning with sophisticated visual identity</li>
                <li>• High-end visual content creation showcasing jewelry craftsmanship</li>
                <li>• Strategic influencer partnerships with luxury lifestyle influencers</li>
                <li>• Targeted advertising campaigns for affluent demographics</li>
                <li>• Exclusive festive collections and limited-time offers</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Achieved</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">300% increase in sales during festive season</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">50,000+ new luxury customers acquired</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">15M+ social media reach achieved</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">85% customer retention rate</span>
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

export default LuxeJewelry;