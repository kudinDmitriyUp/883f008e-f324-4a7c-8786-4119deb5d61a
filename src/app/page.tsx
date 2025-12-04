"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitGlobeKpi from '@/components/sections/hero/HeroSplitGlobeKpi';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Zap, Users, MessageCircle, HelpCircle, Rocket, Globe, TrendingUp, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869587869-608vga0w.jpg"
          logoAlt="Webild Logo"
          button={{
            text: "Start Free",
            href: "#contact"
          }}
          className="border-b border-primary-cta/10"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitGlobeKpi
          title="AI-Powered Chat for Your Website"
          description="Webild transforms websites with intelligent chat technology. Engage visitors 24/7 with AI-driven conversations that understand context and deliver results."
          tag="AI Innovation"
          tagIcon={Sparkles}
          kpis={[
            { value: "24/7", label: "Always Available" },
            { value: "99.9%", label: "Uptime" },
            { value: "10x", label: "Faster Responses" }
          ]}
          buttons={[
            { text: "Start Building", href: "#contact" },
            { text: "View Demo", href: "#features" }
          ]}
          globePosition="right"
          containerClassName="gap-8 md:gap-12"
          titleClassName="text-4xl md:text-6xl font-bold"
          descriptionClassName="text-lg md:text-xl"
          buttonClassName="px-6 py-3 rounded-lg"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Trusted by businesses worldwide to transform customer engagement"
          metrics={[
            { icon: Zap, label: "API Calls Monthly", value: "50M+" },
            { icon: Globe, label: "Websites Powered", value: "5,000+" },
            { icon: TrendingUp, label: "Customer Satisfaction", value: "98%" },
            { icon: Shield, label: "Enterprise Clients", value: "500+" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          features={[
            {
              id: 1,
              tag: "Integration",
              title: "One-Click Setup",
              subtitle: "Install Webild in seconds",
              description: "Add a single line of code to your website. No complex setup, no developer required. Webild instantly starts learning from your content.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869589706-a38xc8v4.jpg",
              imageAlt: "AI integration setup",
              buttons: [{ text: "See Integration", href: "#" }]
            },
            {
              id: 2,
              tag: "Intelligence",
              title: "AI Training",
              subtitle: "Machine learning optimization",
              description: "Webild's advanced algorithms analyze your website content, learn your brand voice, and train themselves to provide accurate, contextual responses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869590506-ri2josum.jpg",
              imageAlt: "Machine learning training",
              buttons: [{ text: "Learn More", href: "#" }]
            },
            {
              id: 3,
              tag: "Deployment",
              title: "Live Results",
              subtitle: "Real-time conversation AI",
              description: "Your Webild chat goes live instantly. Engage visitors with intelligent conversations, handle inquiries, and convert leads while you sleep.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869591606-vdzmv2zf.jpg",
              imageAlt: "Cloud deployment",
              buttons: [{ text: "Deploy Now", href: "#" }]
            }
          ]}
          title="How Webild Works"
          description="Our intelligent AI engine learns from your website to deliver perfect responses every time."
          tag="The Process"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          containerClassName="gap-12 md:gap-16"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          team={[
            {
              id: "1",
              name: "Alex Chen",
              role: "CEO & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869592077-levu7pnz.jpg"
            },
            {
              id: "2",
              name: "Dr. Sarah Kim",
              role: "Head of AI Research",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869592727-2vugm64u.jpg"
            },
            {
              id: "3",
              name: "Marcus Johnson",
              role: "VP of Engineering",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869593416-kdzmtzx3.jpg"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              role: "Product Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869593897-z996ep2s.jpg"
            }
          ]}
          animationType="slide-up"
          title="Meet the Webild Team"
          description="Experts in AI, engineering, and product design working to revolutionize web conversations."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              handle: "@jameswilson",
              testimonial: "Webild increased our customer engagement by 300%. The AI understands our products perfectly and handles inquiries 24/7.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869594424-cp7jej0k.jpg"
            },
            {
              id: "2",
              name: "Lisa Zhang",
              handle: "@lisatech",
              testimonial: "Implementation took 5 minutes. Our support team was able to focus on complex issues while Webild handled routine questions.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869595102-9vbnjobk.jpg"
            },
            {
              id: "3",
              name: "David Brown",
              handle: "@davidbiz",
              testimonial: "The ROI is incredible. We reduced support costs by 40% while improving customer satisfaction scores significantly.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869595609-81g5o3cg.jpg"
            },
            {
              id: "4",
              name: "Sophia Garcia",
              handle: "@sophiagrow",
              testimonial: "Webild's AI learns our brand voice instantly. Every conversation feels natural and on-brand with our company values.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869596342-0t1p5d5g.jpg"
            },
            {
              id: "5",
              name: "Michael Torres",
              handle: "@michaeltech",
              testimonial: "The analytics dashboard gives us real insights into customer behavior. We've optimized our site based on conversation data.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869596974-frq7pjxn.jpg"
            },
            {
              id: "6",
              name: "Rachel Kim",
              handle: "@racheldesign",
              testimonial: "Best decision we made. Webild converted visitors we would have lost. The chat feels like talking to a real team member.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869597907-s0alihcl.jpg"
            }
          ]}
          title="What Our Customers Say"
          description="See how Webild has transformed customer engagement for businesses like yours."
          tag="Testimonials"
          tagIcon={MessageCircle}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          faqs={[
            {
              id: "1",
              title: "How long does it take to set up Webild?",
              content: "Setup takes just 5 minutes. Add a single line of code to your website and Webild starts learning immediately. No technical knowledge required."
            },
            {
              id: "2",
              title: "Can Webild work with any website platform?",
              content: "Yes! Webild works with WordPress, Shopify, Next.js, React, custom websites, and more. If your site has a web interface, Webild can be integrated."
            },
            {
              id: "3",
              title: "How does Webild learn about my business?",
              content: "Our AI analyzes your website content, FAQs, blog posts, and product pages. It learns your tone, values, and answers to provide contextual responses."
            },
            {
              id: "4",
              title: "Is my data secure with Webild?",
              content: "Absolutely. We use enterprise-grade encryption, comply with GDPR/CCPA, and never share customer data. Your content stays on your servers."
            },
            {
              id: "5",
              title: "What if the AI gives an incorrect answer?",
              content: "Our dashboard lets you review and correct conversations. The AI learns from corrections and improves over time. You maintain full control."
            },
            {
              id: "6",
              title: "Can I customize the chat appearance?",
              content: "Yes! Full customization of colors, positioning, messages, and behavior. Match your brand perfectly with our advanced styling options."
            }
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about Webild and how it works with your website."
          tag="FAQ"
          tagIcon={HelpCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869598583-9ubbhzlc.jpg"
          imageAlt="Customer support assistance"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Website?"
          description="Join thousands of businesses using Webild. Start your free trial today and see how AI-powered chat can increase engagement and conversions."
          useInvertedBackground="noInvert"
          tagIcon={Rocket}
          inputPlaceholder="your@email.com"
          buttonText="Start Free Trial"
          termsText="Start your 14-day free trial. No credit card required. Access all features instantly."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Webild"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764869587869-608vga0w.jpg"
          copyrightText="© 2025 Webild. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Demo", href: "#" },
                { label: "API Docs", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}