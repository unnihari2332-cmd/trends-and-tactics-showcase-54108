import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const UrbanFood = () => {
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
              Urban Food Co.
            </h1>
            <div className="text-lg font-semibold text-teal mb-6 uppercase tracking-wide">
              Food & Beverage
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Social media strategy and influencer partnerships that transformed brand presence in the competitive food industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">180%</h3>
              <p className="text-muted-foreground">Follower Growth</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">25K+</h3>
              <p className="text-muted-foreground">Daily Customers</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">95%</h3>
              <p className="text-muted-foreground">Brand Recognition</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">5M+</h3>
              <p className="text-muted-foreground">Content Views</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Urban Food Co. needed to stand out in the highly competitive food and beverage industry.
                With countless food brands vying for attention on social media, they required a unique strategy
                to build brand awareness, engage food enthusiasts, and drive foot traffic to their locations.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We created a comprehensive food marketing strategy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mouth-watering visual content creation and food photography</li>
                <li>• Strategic partnerships with food influencers and bloggers</li>
                <li>• Viral marketing campaigns featuring signature dishes</li>
                <li>• User-generated content campaigns encouraging customer shares</li>
                <li>• Location-based marketing to drive foot traffic</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Achieved</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">180% increase in social media followers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">25,000+ daily customers across locations</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">5M+ content views and engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">95% brand recognition in target markets</span>
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

export default UrbanFood;