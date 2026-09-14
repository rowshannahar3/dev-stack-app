const LINK_GROUPS = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-16">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">

        {/* Mobile Version */}
        <div className="md:hidden text-center">

          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center font-bold text-sm">
              DS
            </span>

            <span className="font-bold text-lg text-slate-900">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 mt-3 max-w-sm mx-auto leading-6">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-4 text-sm font-medium text-slate-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              Twitter
            </a>

            <span>•</span>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>


        {/* Desktop Version */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg brand-gradient-bg flex items-center justify-center font-bold text-sm">
                DS
              </span>

              <span className="font-bold text-lg text-slate-900">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 mt-3 max-w-xs">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-4 mt-4 text-sm font-medium text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>


          {/* Link Groups */}
          {Object.entries(LINK_GROUPS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                {title}
              </h4>

              <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between gap-3 text-xs text-slate-400">

          <p>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-slate-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-slate-700"
            >
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}