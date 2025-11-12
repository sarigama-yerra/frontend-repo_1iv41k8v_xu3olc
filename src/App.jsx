import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, ArrowRight, Globe2, ShieldCheck, Truck, Building2, Factory, LineChart, BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

function NavBar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold">L</div>
            <span className="font-semibold text-gray-900">Livingston</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a className="hover:text-gray-900" href="#services">Services</a>
            <a className="hover:text-gray-900" href="#industries">Industries</a>
            <a className="hover:text-gray-900" href="#insights">Insights</a>
            <a className="hover:text-gray-900" href="#about">About</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a className="py-2" href="#services" onClick={() => setOpen(false)}>Services</a>
              <a className="py-2" href="#industries" onClick={() => setOpen(false)}>Industries</a>
              <a className="py-2" href="#insights" onClick={() => setOpen(false)}>Insights</a>
              <a className="py-2" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="py-2 font-medium" href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a className="py-2 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 text-white w-fit" href="#cta" onClick={() => setOpen(false)}>
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-200">
            <Globe2 className="h-3.5 w-3.5" /> Global Trade Simplified
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Navigate customs with confidence
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Seamless customs brokerage, trade consulting, and freight solutions. We help you move goods across borders efficiently while staying compliant.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-red-700 transition-colors">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50">
              Explore services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-red-600" /> AEO/CTPAT aligned</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-red-600" /> Air • Ocean • Ground</div>
          </div>
        </div>
        <div className="relative h-[520px] lg:h-[640px] rounded-xl border border-red-100/50 bg-white/60 backdrop-blur overflow-hidden">
          <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

const serviceItems = [
  { icon: ShieldCheck, title: 'Customs Brokerage', desc: 'End-to-end import/export clearance, compliance, and classification.' },
  { icon: Truck, title: 'Freight & Transportation', desc: 'Flexible air, ocean, and ground solutions with real-time visibility.' },
  { icon: Building2, title: 'Trade Consulting', desc: 'Tariff optimization, duty drawback, and global trade advisory.' },
  { icon: Factory, title: 'Supply Chain Solutions', desc: 'Integrated solutions for manufacturers, retailers, and ecommerce.' },
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">Practical expertise and technology that streamline cross‑border trade.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:border-red-200 hover:shadow-md transition-all bg-white">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <a href="#cta" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600 group-hover:text-red-700">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Industries() {
  const items = [
    { icon: Factory, title: 'Manufacturing' },
    { icon: Building2, title: 'Retail & Ecommerce' },
    { icon: Truck, title: 'Automotive' },
    { icon: ShieldCheck, title: 'Healthcare & Pharma' },
  ]
  return (
    <section id="industries" className="relative py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Industries we serve</h2>
            <p className="mt-3 text-gray-600">Tailored solutions for complex supply chains and regulated products.</p>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white font-semibold shadow-sm hover:bg-black/80">Speak with a specialist <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 flex items-center gap-3 hover:border-red-200 transition-colors">
              <div className="h-9 w-9 rounded-lg bg-red-600/10 text-red-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-900">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Insights() {
  const posts = [
    { title: 'USMCA updates: What importers need to know in 2025', tag: 'Regulatory', read: '6 min read' },
    { title: 'Duty drawback 101: Turning refunds into cash flow', tag: 'Consulting', read: '4 min read' },
    { title: 'Building resilient supply chains across borders', tag: 'Strategy', read: '8 min read' },
  ]
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Insights</h2>
            <p className="mt-2 text-gray-600">Guidance from trade experts to keep you a step ahead.</p>
          </div>
          <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 p-6 hover:border-red-200 transition-colors">
              <div className="inline-flex items-center gap-2 text-xs text-red-700 bg-red-50 ring-1 ring-red-200 px-2 py-1 rounded-full">
                <BookOpen className="h-3.5 w-3.5" /> {p.tag}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-red-700">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{p.read}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600">
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-600 via-rose-500 to-red-600" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white/10 ring-1 ring-white/20 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s streamline your cross‑border operations</h2>
              <p className="mt-3 text-rose-50/90">Tell us about your goals, routes, and products. Our specialists will design a plan that reduces cost and risk, and accelerates your speed to market.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-red-700 font-semibold shadow-sm hover:bg-rose-50">
                  Contact sales <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-transparent px-5 py-3 text-white font-semibold ring-1 ring-inset ring-white/40 hover:bg-white/10">
                  Download capabilities deck
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-white/90">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-3xl font-semibold">24/7</div>
                <div className="text-sm">Clearance coverage</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-3xl font-semibold">99.8%</div>
                <div className="text-sm">On-time entries</div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-3xl font-semibold">180+</div>
                <div className="text-sm">Countries served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold">L</div>
              <span className="font-semibold text-white">Livingston</span>
            </div>
            <p className="text-sm text-gray-400">
              Global customs brokerage and trade management partner.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md bg-white/5 hover:bg-white/10"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Solutions</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Customs brokerage</a></li>
              <li><a href="#services" className="hover:text-white">Trade consulting</a></li>
              <li><a href="#services" className="hover:text-white">Freight forwarding</a></li>
              <li><a href="#services" className="hover:text-white">Managed services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#insights" className="hover:text-white">Insights</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <p className="text-sm flex items-center gap-2"><Mail className="h-4 w-4" /> info@livingston.com</p>
            <p className="text-sm flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (800) 000‑0000</p>
            <p className="text-sm flex items-center gap-2"><MapPin className="h-4 w-4" /> Offices worldwide</p>
            <a href="#cta" className="mt-2 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
              Get a quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Livingston International. All rights reserved.</p>
          <a href="/test" className="hover:text-gray-300">System check</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Industries />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
