import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const TipsPortfolio = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* ===== Hero with added bottom spacing ===== */}
      <section
        className="
          relative
          py-24 md:py-28
          pb-40             /* ✅ extra bottom padding for more space */
          overflow-hidden
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/0008jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            The Indian Public School
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-white/90"
          >
            Transforming education through digital innovation and modern marketing strategies.
          </motion.p>
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="relative pb-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-teal-600 mb-4">
                  Education
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Complete rebranding and digital presence transformation that modernized
                  traditional learning environments.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Challenge</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Indian Public School faced declining enrollment and poor online visibility
                  in a competitive educational landscape. Their outdated digital presence failed
                  to communicate their academic excellence and modern teaching methodologies to
                  prospective parents and students. The school needed a comprehensive digital
                  transformation to rebuild trust and attract quality enrollments.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implemented a comprehensive digital transformation strategy that included:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Modern, conversion-focused website redesign with intuitive navigation</li>
                  <li>• Comprehensive SEO strategy targeting local education keywords</li>
                  <li>• Strategic social media campaigns showcasing student achievements</li>
                  <li>• Targeted advertising campaigns reaching prospective parents</li>
                  <li>• Brand guidelines ensuring consistent communication across all channels</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">250% increase in website traffic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">180% increase in enrollment inquiries</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-teal-600" />
                      <span className="text-gray-700">95% rise in social engagement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">#1 ranking for key local school searches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT column */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-black">Project Information</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <TrendingUp className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">250%</div>
                      <div className="text-xs text-gray-600">Engagement</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Users className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">15K+</div>
                      <div className="text-xs text-gray-600">New Students</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Target className="h-6 w-6 mb-2 text-teal-600" />
                      <div className="text-lg font-bold text-black">90%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                    <div className="flex flex-col items-center rounded-xl bg-white border border-gray-200 p-4">
                      <Award className="h-6 w-6 mb-2 text-orange-500" />
                      <div className="text-lg font-bold text-black">#1</div>
                      <div className="text-xs text-gray-600">School Rank</div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white border border-gray-200 p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      A comprehensive digital transformation initiative aligning brand, web, SEO,
                      social, and paid strategy to drive measurable outcomes for parents and students.
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

export default TipsPortfolio;
