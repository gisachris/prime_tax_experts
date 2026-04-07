import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="bg-[#1F3F6E] text-white w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-black text-white tracking-tighter">Prime Tax Experts</div>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-300">
            Setting the standard for precision in the financial world. Your partners in growth and compliance.
          </p>
          <div className="flex space-x-4">
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <img alt="FB" className="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg5V3J5xHvIf-elyLBtE1S28B5VkEroi9sWlcqiYKlhsb-LVsBvOqG1JnzpyWQI0yEQ5hOMLi8QsJdRWWMh82W8mhQCTDB88Gt7IoVvhsZz-lQRPyqSl0VamVlRgg0neic2IuKClHKISgPM_t_K3-TX-phV2kH0e5tREpyoMe2BeF5wEr-Grcv8SDKqJwpDwYPJ9ROdWxQtTL5PuhFrrvR9m9LYY8P_QhVYd0tV3it0OtdUulI-UGMuEn8P-lTCFlt66Z9pjuakak" />
            </a>
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <img alt="IG" className="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCArpkLchAJB0HLfPzKvw0tslFznGgvR_5pHqSNmVBXyo5c0j6M4cvG-PQaI6qZtidtY8RG2NCjzeAqMqU-7SoZ56vyfu9a1FLZbAN35vwjVGgdRYV2cjhhmfWhCOJuS3LILBnEHBm162yDUeW-VbdLJ6Meri9xzsfT199CISiYI8lJNLzeVrjWbKOnW307-3W4_x2JU9-hiulRGzO5K3jZLTvkd6g_ZprskWS8OG77LHqtujySKuakTRduvMVKIApmfFi6yJ_xOz0" />
            </a>
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <img alt="LI" className="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByBl8oIHS0gQvmCKKcCcLYxcMzDBzuLI9qT_otOuuC-9JcV3ROYfTZLR694Oc9czfhKMujozNpTCrpor6bWFlZx_i_TyXJbuzPk_FPIhq4gVw9J4l0OY7CnuNLGUA9BH7Fq12mSQ0dXrcUlhv7Ji072hZEuEWS00UohWqtk0Wg7GTWHjK-PNLtDKBOpULsQjNc7cmxgPee-r8dpZpcIMfnxDRNCbY4mD2sQLdDGn3Vgq1Yy9CwP353N_fKvxeq0IOHmPFB3xEva6c" />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Quick Links</h4>
          <ul className="space-y-3 font-['Inter'] text-sm">
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="#">Tax Preparation</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="#">Corporate Planning</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="#">Estate Planning</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="#">Audit Support</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Office Address</h4>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-300">
            1200 Financial Plaza, Suite 450<br />
            Business District<br />
            New York, NY 10001
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="material-symbols-outlined text-xs">map</span>
            <a className="underline underline-offset-4 decoration-[#F58220]/50 hover:text-white" href="#">View on Map</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Contact Info</h4>
          <ul className="space-y-3 font-['Inter'] text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#F58220] text-sm">phone_in_talk</span>
              <span className="text-slate-300">+1 (800) TAX-PRIME</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#F58220] text-sm">mail</span>
              <span className="text-slate-300">solutions@primetax.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#F58220] text-sm">schedule</span>
              <span className="text-slate-300">Mon - Fri: 9AM - 6PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 text-center">
        <p className="font-['Inter'] text-xs tracking-wide text-slate-500 opacity-90">
          © 2026 Prime Tax Experts. All rights reserved. <span className="mx-2">|</span>
          <a className="hover:text-white" href="#">Privacy Policy</a> <span className="mx-2">|</span>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
