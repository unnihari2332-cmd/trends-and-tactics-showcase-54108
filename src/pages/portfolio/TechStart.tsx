import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const TechStart = () => {
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
              TechStart Solutions
            </h1>
            <div className="text-lg font-semibold text-teal mb-6 uppercase tracking-wide">
              Technology
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              B2B lead generation and content marketing strategy that positioned a startup as an industry leader.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">400%</h3>
              <p className="text-muted-foreground">Lead Conversion</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">10K+</h3>
              <p className="text-muted-foreground">B2B Clients</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">75%</h3>
              <p className="text-muted-foreground">Market Share</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-orange mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground mb-1">2M+</h3>
              <p className="text-muted-foreground">Content Reach</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                TechStart Solutions, a promising startup, needed to establish credibility and generate quality B2B leads
                in a competitive technology market. They required a comprehensive strategy to position themselves as
                industry thought leaders while building a robust pipeline of enterprise clients.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implemented a data-driven B2B marketing strategy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Thought leadership content showcasing technical expertise</li>
                <li>• Strategic SEO optimization for industry-specific keywords</li>
                <li>• Targeted lead generation campaigns for enterprise clients</li>
                <li>• Account-based marketing for high-value prospects</li>
                <li>• Industry partnerships and speaking opportunities</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Results Achieved</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">400% improvement in lead conversion rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">10,000+ B2B clients acquired</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal rounded-full"></div>
                    <span className="text-muted-foreground">75% market share in target segment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                    <span className="text-muted-foreground">2M+ content reach and engagement</span>
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

export default TechStart;