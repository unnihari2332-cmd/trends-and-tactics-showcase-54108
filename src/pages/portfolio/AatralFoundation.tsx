<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aatral Foundation – Case Study | Trends & Tactics</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-image: url('/sidelogo.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left center;
      background-attachment: fixed;
    }

    .reel-container {
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      border-radius: 0.75rem;
      border: 1px solid #e5e7eb;
      background: white;
      max-width: 20rem;
      margin: 0 auto;
    }

    .reel-track {
      display: flex;
      width: 100%;
    }

    .reel-slide {
      min-width: 100%;
      scroll-snap-align: start;
    }

    .reel-iframe {
      width: 100%;
      aspect-ratio: 9/16;
    }

    .dot {
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 9999px;
      transition: background-color 0.3s;
      cursor: pointer;
      border: none;
      padding: 0;
    }

    .dot.active {
      background-color: #000;
    }

    .dot.inactive {
      background-color: #d1d5db;
    }

    .sticky-video {
      position: sticky;
      top: 6rem;
    }

    @media (max-width: 1024px) {
      .sticky-video {
        position: static;
      }
    }
  </style>
</head>
<body class="min-h-screen bg-gray-50 text-gray-900">

  <!-- Hero Section -->
  <section class="relative min-h-[40vh] flex items-center justify-center">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/0011.jpg'); background-position: center 30%;"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

    <div class="relative z-10 container mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
      <nav class="flex items-center justify-center gap-2 text-xs md:text-sm text-white/80 mb-4">
        <a href="/" class="hover:text-white transition-colors">Home</a>
        <span class="opacity-60">›</span>
        <a href="/portfolio" class="hover:text-white transition-colors">Portfolio</a>
        <span class="opacity-60">›</span>
        <span class="text-white">Aatral Foundation</span>
      </nav>

      <h1 class="text-3xl md:text-5xl font-normal text-white">
        Aatral Foundation — Social Media Growth Case Study
      </h1>
    </div>
  </section>

  <!-- Overview with Video -->
  <section class="py-10">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
        
        <!-- Left: Content -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-teal-600 mb-3">
            <span class="inline-flex items-center gap-2">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              Non-Profit · Community Impact
            </span>
            <span class="inline-flex items-center gap-2 text-gray-600 normal-case">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Erode, Tamil Nadu
            </span>
            <span class="inline-flex items-center gap-2 text-gray-600 normal-case">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              Founder: <span class="font-semibold">Aatral Ashok Kumar</span>
            </span>
          </div>

          <p class="text-gray-700 leading-relaxed mb-6">
            Complete social-media transformation that amplified a local NGO's voice, engagement, and community reach. Starting from <strong>3,000 followers</strong>, we implemented a story-led content strategy and community-first design that scaled the audience to <strong>30,000+ followers</strong> while strengthening volunteer and donor pipelines.
          </p>

          <!-- Metrics Grid -->
          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-3">
              <svg class="h-5 w-5 mb-1 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                <polyline points="16 7 22 7 22 13" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
              </svg>
              <div class="text-base font-bold text-black">900%</div>
              <div class="text-xs text-gray-600 text-center">Audience Growth</div>
            </div>

            <div class="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-3">
              <svg class="h-5 w-5 mb-1 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <div class="text-base font-bold text-black">30K+</div>
              <div class="text-xs text-gray-600 text-center">Followers</div>
            </div>

            <div class="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-3">
              <svg class="h-5 w-5 mb-1 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
              </svg>
              <div class="text-base font-bold text-black">7×</div>
              <div class="text-xs text-gray-600 text-center">Engagement Rate</div>
            </div>

            <div class="flex flex-col items-center rounded-xl bg-gray-50 border border-gray-200 p-3">
              <svg class="h-5 w-5 mb-1 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                <circle cx="12" cy="12" r="6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                <circle cx="12" cy="12" r="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
              </svg>
              <div class="text-base font-bold text-black">Top Local</div>
              <div class="text-xs text-gray-600 text-center">Local Awareness</div>
            </div>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sticky-video">
          <h3 class="text-lg font-semibold mb-4 text-black">Featured Content</h3>
          
          <div id="reelScroller" class="relative">
            <div class="reel-container">
              <div class="reel-track" id="reelTrack">
                <div class="reel-slide">
                  <iframe class="reel-iframe" src="https://www.instagram.com/reel/DN135CVwoPW/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" frameborder="0" loading="lazy"></iframe>
                </div>
                <div class="reel-slide">
                  <iframe class="reel-iframe" src="https://www.instagram.com/reel/DNR0uYqNRkk/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" frameborder="0" loading="lazy"></iframe>
                </div>
                <div class="reel-slide">
                  <iframe class="reel-iframe" src="https://www.instagram.com/reel/DGkp2d0Ph--/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" frameborder="0" loading="lazy"></iframe>
                </div>
                <div class="reel-slide">
                  <iframe class="reel-iframe" src="https://www.instagram.com/reel/DGVOLnFB79u/embed" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" frameborder="0" loading="lazy"></iframe>
                </div>
              </div>
            </div>

            <!-- Dots -->
            <div class="mt-3 flex items-center justify-center gap-2" id="dots">
              <button class="dot active" data-index="0" aria-label="Go to slide 1"></button>
              <button class="dot inactive" data-index="1" aria-label="Go to slide 2"></button>
              <button class="dot inactive" data-index="2" aria-label="Go to slide 3"></button>
              <button class="dot inactive" data-index="3" aria-label="Go to slide 4"></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Challenge & Our Approach -->
  <section class="py-8">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        
        <!-- Challenge -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 class="text-2xl font-semibold mb-4 text-black">Challenge</h2>
          <p class="text-gray-700 leading-relaxed">
            Despite impactful on-ground initiatives, Aatral Foundation had a limited online footprint with just <strong>3,000 followers</strong>. Their impact stories were not reaching potential donors, volunteers, and partners. They needed a cohesive digital identity and growth framework to scale visibility, trust, and engagement.
          </p>
        </div>

        <!-- Our Approach -->
        <div class="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 class="text-2xl font-semibold mb-4 text-black">Our Approach</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            We implemented a focused social-media growth strategy that included:
          </p>
          <ul class="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
            <li>• <span class="font-semibold">Visual &amp; Content Rebrand:</span> cohesive identity, color system, and templates aligned to the mission.</li>
            <li>• <span class="font-semibold">High-Impact Content Calendar:</span> weekly reels, impact stories, volunteer spotlights, and BTS content.</li>
            <li>• <span class="font-semibold">Community Engagement:</span> polls, Q&amp;As, and cause-led campaigns to drive shares and comments.</li>
            <li>• <span class="font-semibold">Targeted Local Outreach:</span> geo-targeted boosts and collaborations with local influencers and NGOs.</li>
            <li>• <span class="font-semibold">Analytics &amp; Optimization:</span> monthly reviews to refine topics, formats, and posting windows.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- Results -->
  <section class="py-8 pb-16">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-4 text-black">Results Achieved</h2>
        
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3 text-gray-700">
            <div class="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <span class="font-semibold text-black block mb-1">900% audience growth</span>
              <span class="text-sm">Followers scaled from <strong>3,000</strong> to <strong>30,000+</strong></span>
            </div>
            <div class="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <span class="font-semibold text-black block mb-1">7× engagement</span>
              <span class="text-sm">Significant lift in likes, shares, comments, and video views</span>
            </div>
          </div>
          <div class="space-y-3 text-gray-700">
            <div class="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <span class="font-semibold text-black block mb-1">Community mobilisation</span>
              <span class="text-sm">More volunteer sign-ups and donor inquiries through impact-led campaigns</span>
            </div>
            <div class="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <span class="font-semibold text-black block mb-1">Recognised local voice</span>
              <span class="text-sm">One of the most visible NGOs in the Erode region</span>
            </div>
          </div>
        </div>

        <div class="mt-6 rounded-lg bg-teal-50 border border-teal-200 p-4">
          <div class="flex items-start gap-3">
            <svg class="h-5 w-5 text-teal-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            <div>
              <p class="text-sm font-semibold text-black mb-1">Project Details</p>
              <p class="text-sm text-gray-700">
                <strong>Client:</strong> Aatral Foundation | <strong>Founder:</strong> Aatral Ashok Kumar | <strong>Location:</strong> Erode, Tamil Nadu
              </p>
              <p class="text-sm text-gray-600 mt-2">
                A comprehensive social-media transformation aligning brand, content, community, and analytics—designed to drive measurable, mission-aligned growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    // Auto-scrolling reels functionality
    const reelTrack = document.getElementById('reelTrack');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = 4;
    let currentIndex = 0;
    let autoScrollTimer;

    function scrollToSlide(index) {
      currentIndex = index;
      const scrollLeft = index * reelTrack.clientWidth;
      reelTrack.parentElement.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      
      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.remove('inactive');
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
          dot.classList.add('inactive');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      scrollToSlide(currentIndex);
    }

    function startAutoScroll() {
      autoScrollTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoScroll() {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
      }
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoScroll();
        scrollToSlide(index);
        startAutoScroll();
      });
    });

    // Pause on hover
    const reelContainer = document.querySelector('.reel-container');
    reelContainer.addEventListener('mouseenter', stopAutoScroll);
    reelContainer.addEventListener('mouseleave', startAutoScroll);

    // Start auto-scroll
    startAutoScroll();
  </script>

</body>
</html>
