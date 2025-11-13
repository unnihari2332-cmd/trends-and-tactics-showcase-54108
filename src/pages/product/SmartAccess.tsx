import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SmartAccess() {
  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundImage: "url('/sidelogo.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-[70vh] min-h-[60svh] flex items-center justify-center text-center px-6">
          <img
            src="/fingerprint01.jpg"
            alt="SmartAccess+"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto max-w-4xl pt-24">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              SmartAccess+
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-white/90 text-lg md:text-xl"
            >
              Intelligent Fingerprint-Based Attendance &amp; HR Management
            </motion.p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-10 px-6 md:py-12">
          <div className="container mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
            <div className="flex justify-center">
              <img
                src="/fingerprint.jpg"
                alt="SmartAccess Overview"
                className="w-[36rem] md:w-[42rem] rounded-2xl shadow-2xl object-cover object-center"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-full"
            >
              <p className="text-base md:text-2xl font-medium leading-relaxed text-black text-center md:text-left">
                SmartAccess+ combines advanced biometric hardware with a powerful real-time web
                dashboard. Track attendance, automate payroll, and gain actionable HR insights—all
                in one secure, scalable platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FEATURES / WHY CHOOSE */}
        <section className="py-10 md:py-14 px-6">
          <div className="container mx-auto grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl">
            {[
              { icon: "🔒", title: "Seamless Biometric Authentication", body: "Eliminate buddy punching and ensure accurate attendance with our high-precision fingerprint scanner." },
              { icon: "📊", title: "Real-Time Web Dashboard", body: "Monitor check-ins, generate custom reports, and access live attendance data from anywhere." },
              { icon: "🧩", title: "Comprehensive HR Features", body: "Integrated payroll, leave management, and employee records in one system." },
              { icon: "⚡", title: "Customizable & Scalable", body: "Configure easily for startups or large enterprises—built to scale with your org." },
            ].map((f) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative rounded-2xl bg-foreground/10 backdrop-blur-sm p-6 shadow-sm ring-1 ring-foreground/10 hover:ring-foreground/20 transition"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid place-content-center size-12 rounded-full bg-[#2ecec8] text-black text-2xl font-bold">
                    {f.icon}
                  </span>
                  <h2 className="text-xl md:text-2xl font-semibold text-black">{f.title}</h2>
                </div>
                <p className="text-black/80 leading-relaxed">{f.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* DEMO VIDEO */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Fingerprint Based Attendance System
            </motion.h2>
            <video
              src="/video.mp4"
              className="w-full rounded-2xl shadow-xl border border-black/10"
              controls
              playsInline
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 pb-12 md:pb-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  head: "Employee Clock-In & Clock-Out",
                  points: [
                    "Fingerprint on ESP32 + R307 sensor",
                    "Identity matched with stored records",
                    "Exact clock-in/out logged",
                    "Success confirmation shown",
                  ],
                },
                {
                  head: "Real-Time Data Synchronization",
                  points: [
                    "ESP32 captures timestamps",
                    "Wi-Fi sync to Google Sheets DB",
                    "Dashboard updates instantly",
                    "Automatic retry on errors",
                  ],
                },
                {
                  head: "Reports & Insights",
                  points: [
                    "HR dashboard for managers",
                    "Daily/weekly/monthly summaries",
                    "Track late/early/absenteeism",
                    "Export to Excel or PDF",
                  ],
                },
              ].map((b) => (
                <motion.article
                  key={b.head}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/85 backdrop-blur-sm p-6 shadow-xl ring-1 ring-black/10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#E05D35]">{b.head}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-black/80 leading-relaxed">
                    {b.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
