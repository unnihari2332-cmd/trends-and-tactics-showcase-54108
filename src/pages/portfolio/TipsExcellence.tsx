// src/pages/portfolio/TipsExcellence.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award, Globe, Sparkles, Share2, Layers } from "lucide-react";

const TipsExcellence = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* ===== Hero ===== */}
      <section
        className="
          relative
          py-24 md:py-28
          pb-40
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tips-excellence-hero.jpg')" }} // replace with your asset
        >
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            TIPS Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90"
          >
            Complete Digital Revamp and Social Media Transformation for TIPS Excellence.
          </motion.p>
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="relative pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Tag + Overview */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-3">
                  Education
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A full-scale digital transformation that unified brand voice, modernized web experience,
                  and amplified social engagement to reflect TIPS Excellence’s innovation and academic distinction.
                </p>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Challenge</h2>
                <p className="text-gray-700 leading-relaxed">
                  Though TIPS Excellence stood for innovation and academic distinction, its online presence told
                  a different story. Without a modern website or cohesive social media voice, the brand’s true
                  value remained hidden. To connect with today’s digital-first generation of parents and learners,
                  the institution needed a refreshed, engaging, and unified digital identity.
                </p>
              </div>

              {/* Our Approach */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We executed a full-scale digital transformation and creative strategy that included:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-teal-600" />
                      <div className="font-semibold text-black">Responsive Website</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Modern site showcasing academic strengths, programs, and student achievements.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 className="h-5 w-5 text-orange-500" />
                      <div className="font-semibold text-black">Social Storytelling</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Revitalized social channels with consistent, engaging content and interactive formats.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-5 w-5 text-teal-600" />
                      <div className="font-semibold text-black">Cohesive Brand System</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Unified visuals and tone to present a professional, inspiring identity across platforms.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-orange-500" />
                      <div className="font-semibold text-black">SEO & Performance</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Focused SEO + optimization to elevate visibility and drive qualified discovery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">230% increase in website traffic (3 months)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">200% growth in social media engagement</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">3× rise in admission inquiries via digital</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">
                        Consistent & elevated brand identity across platforms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT column (sticky metrics) */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-black">Project Information</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <TrendingUp className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">230%</div>
                      <div className="text-xs text-gray-600">Traffic Growth</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Users className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">200%</div>
                      <div className="text-xs text-gray-600">Social Engagement</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Target className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">3×</div>
                      <div className="text-xs text-gray-600">Admission Inquiries</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Award className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">A+</div>
                      <div className="text-xs text-gray-600">Brand Consistency</div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A unified brand + performance-driven content system built to attract and convert
                      the modern, digital-first parent and learner.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TipsExcellence;
