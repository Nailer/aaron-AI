import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  BarChart3, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Bell, 
  ShieldCheck, 
  Menu,
  X
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center transform rotate-3">
                <div className="absolute inset-0 bg-white/20 blur-sm rounded-lg"></div>
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">Aaron AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">How it Works</Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-white hover:text-primary transition-colors">
                Login
              </Link>
              <Link href="/signup" className="group relative px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:bg-blue-600 transition-all hover:scale-105 active:scale-95">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button - Placeholder */}
            <button className="md:hidden p-2 text-muted-foreground hover:text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 inset-x-0 h-[800px] bg-hero-glow pointer-events-none opacity-60"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-800/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">Next-Gen Wealth Protection</span>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up max-w-4xl text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Turn Your Financial <br className="hidden md:block" />
            <span className="text-gradient-blue relative">
              Resolutions Into Reality.
              {/* Subtle underline SVG could go here */}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-up [animation-delay:200ms] max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            The proactive AI agent that guides your spending at the exact moment 
            you need it most. Stop tracking history—start shaping your future.
          </p>

          {/* CTAs */}
          <div className="animate-slide-up [animation-delay:400ms] flex flex-col sm:flex-row items-center gap-4">
            <Link href="/onboarding/goals" className="h-14 px-8 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold shadow-[0_4px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Start Your Financial Resolution
              <ArrowRight size={18} />
            </Link>
            <button className="h-14 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all hover:border-white/20">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Trusted by thousands of smart savers</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos as placeholders */}
            {['FINTECH', 'NEOBANK', 'SECURE', 'TRUST.CO', 'WEALTH INC'].map((brand) => (
              <span key={brand} className="text-xl font-bold text-white/40">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Grid */}
      <section id="how-it-works" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-blue-950/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Set Goal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Define your targets, from house deposits to debt-free living. Our AI helps you set realistic milestones based on your income.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-teal-950/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyze Spending</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time tracking that learns your unique habits. We prioritize finding "leaks" that you can plug immediately.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-purple-950/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive proactive nudges before you overspend. It's like having a financial genius in your pocket 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient spot */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Experience <span className="text-primary">Proactive Guidance</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Old-school finance apps tell you what you <span className="italic text-white">did</span> wrong. 
                  Aaron AI tells you how to get it <span className="font-semibold text-white">right</span>, exactly when you're about to tap your card.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Instant Decision Support",
                    desc: "Contextual alerts based on your real-time balance and future goals.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Goal Protection",
                    desc: "Automatic reallocation of 'found money' into your savings goals.",
                    icon: CheckCircle2
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right UI Mockup */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              {/* Card Container */}
              <div className="relative rounded-3xl bg-secondary border border-white/10 p-1 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Inner Card Content */}
                <div className="rounded-[20px] bg-[#0F1218] p-6 sm:p-8 space-y-6 overflow-hidden relative">
                  {/* Glass sheen */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Bell className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-400 text-sm tracking-wide">Aaron AI ALERT</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">Decision Point</span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-green-500/20 text-green-400 border border-green-500/20">Live</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">Wait! This purchase impacts your Hawaii Goal.</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      You are $45 away from your monthly limit for dining out. Spending this $32 now means missing your monthly Hawaii deposit by $12.
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between text-xs font-semibold mb-2 uppercase tracking-wider text-gray-500">
                      <span>Goal Progress</span>
                      <span className="text-white">84%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[84%] bg-gradient-to-r from-lime-300 to-green-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.5)]"></div>
                    </div>
                  </div>

                  {/* Grid Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
                      Buy & Adjust
                    </button>
                    <button className="py-3 rounded-lg bg-primary text-white text-sm font-medium shadow-lg hover:bg-blue-600 transition-colors">
                      Save for Goal
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-tr from-primary to-accent rounded-md"></div>
                <span className="text-lg font-bold">Aaron AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Proactive financial guidance for the modern era. Secure, intelligent, and designed for your success.
              </p>
            </div>
            
            {[
              { title: "Product", links: ["Features", "Integrations", "Security", "Roadmap"] },
              { title: "Company", links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"] },
              { title: "Stay Connected", links: [] } // Custom content for last column
            ].map((col, i) => (
              <div key={i} className={col.title === "Stay Connected" ? "col-span-2 md:col-span-1" : ""}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                {col.links.length > 0 ? (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {col.links.map(link => (
                      <li key={link}><Link href="#" className="hover:text-white transition-colors">{link}</Link></li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Join 10,000+ others getting smarter with their money.</p>
                    <div className="flex gap-2">
                       <input 
                        type="email" 
                        placeholder="Email address" 
                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-primary/50"
                       />
                       <button className="bg-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">Join</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; 2026 Aaron AI. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Twitter</Link>
              <Link href="#" className="hover:text-white">LinkedIn</Link>
              <Link href="#" className="hover:text-white">Discord</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
