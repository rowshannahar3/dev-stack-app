const LINK_GROUPS = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
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
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm font-medium text-slate-600">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>

        {Object.entries(LINK_GROUPS).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">{title}</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-slate-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
