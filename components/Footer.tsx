// components/Footer.tsx
"use client"

import { Button } from "@/components/ui/button"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram,
  Mail 
} from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/echoworksai", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/echoworksai", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/echoworksai", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/echoworksai", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/echoworksai", label: "Instagram" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">EchoWorks AI</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Transforming businesses with cutting-edge AI solutions. From
              automation to end-to-end AI platforms, we help you stay ahead of
              the curve.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm">
                Subscribe to our newsletter for the latest AI insights and
                updates.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full md:w-64 rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              />
              <Button variant="default" size="default">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {currentYear} EchoWorks AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

