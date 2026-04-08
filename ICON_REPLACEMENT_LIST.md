# Icon Replacement Analysis for Prime Tax Experts

## Project Summary
- **Package Installed:** lucide-react ✓
- **Current Icon System:** Material Symbols (Google Material Icons)
- **Target:** Replace material-symbols with lucide-react icons for consistency and modern design

---

## 1. Navigation & Menu Icons

### Mobile Menu Toggle (Header.tsx, line ~27)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Header - Mobile | `material-symbols-outlined: 'close' / 'menu'` | "menu" / "close" | `Menu` / `X` icon from lucide |
| **File** | `src/components/Header.tsx` | Line 27 | `<Menu />` / `<X />` |

---

## 2. Navigation Breadcrumbs

### Services Page Breadcrumb (services/page.tsx, line ~24)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Services Hero | `material-symbols-outlined: 'chevron_right'` | Separator icon | `ChevronRight` |
| **File** | `src/app/services/page.tsx` | Line 24 | `<ChevronRight />` |

---

## 3. Call-to-Action Buttons

### Primary Buttons with Arrow Icons

#### Home Page - Get Started Button (page.tsx, line ~63)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Hero Section | `material-symbols-outlined: 'arrow_forward'` | "Get Started" | Button text + `ArrowRight` icon |
| **File** | `src/app/page.tsx` | Line 71 | Replace with `<ArrowRight />` |

#### Home Page - View Services Button (page.tsx, line ~74)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Hero Section | Plain text button | "View Services" | Could add `ChevronDown` or `ArrowRight` |
| **File** | `src/app/page.tsx` | Line 74 | Optional: Add icon |

#### Services Page - Learn More Links (services/page.tsx, lines ~90, 110, 130, 150)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Service Cards (x4) | `material-symbols-outlined: 'arrow_forward'` | "Learn More" + arrow | Replace with `<ArrowRight />` |
| **File** | `src/app/services/page.tsx` | Lines 90, 110, 130, 150 | `<ArrowRight />` |

#### Home Page - Call Now Button (page.tsx & Header.tsx)
| Location | Current Implementation | Text | Should Be |
|----------|----------------------|------|-----------|
| Header | Plain text | "Call Now" | Add `Phone` icon |
| **File** | `src/components/Header.tsx` | Line 89 | Add `<Phone />` icon |

---

## 4. Service Icons

### Service Icons (services.ts data)
These use emoji currently, should be lucide icons:

| Service | Current | Lucide Icon Suggestion |
|---------|---------|---------------------|
| Tax Planning & Strategy | 📊 | `BarChart3` or `TrendingUp` |
| Accounting & Bookkeeping | 🧾 | `FileText` or `Calculator` |
| Payroll & Compliance | 💼 | `Briefcase` or `Users` |
| Advisory & Forecasting | 📈 | `TrendingUp` or `LineChart` |

**File:** `src/data/services.ts`

### Service Category Icons (services/page.tsx)
Replace material-symbols with lucide:

| Service | Current Icon | Line | Lucide Suggestion |
|---------|-------------|------|------------------|
| Individual Tax Prep | `person` | ~90 | `User` |
| Business Tax Consulting | `query_stats` | ~110 | `BarChart3` |
| Corporate Tax Services | `domain` | ~130 | `Building2` or `Building` |
| Estate & Trust Planning | `account_balance` | ~150 | `Scale` or `FileCheck` |

**File:** `src/app/services/page.tsx`

---

## 5. Contact & Information Icons

### Footer Contact Icons (Footer.tsx)
| Item | Current Icon | Lucide Suggestion | Line |
|------|------------|------------------|------|
| Phone | `phone_in_talk` | `Phone` | ~76 |
| Email | `mail` | `Mail` | ~81 |
| Hours | `schedule` | `Clock` | ~86 |

**File:** `src/components/Footer.tsx`

### Footer Social Media Links (Footer.tsx)
| Platform | Current | Lucide Suggestion | Line |
|----------|---------|------------------|------|
| Facebook | Image (FB) | `Share2` (generic social) | ~39 |
| Instagram | Image (IG) | `Globe` (web/global) | ~43 |
| LinkedIn | Image (LI) | `Link` (connections) | ~47 |

**File:** `src/components/Footer.tsx`

### Contact Page Icons (contact/page.tsx)
| Item | Current Icon | Lucide Suggestion | Line |
|------|------------|------------------|------|
| Office Address | `location_on` | `MapPin` | ~80 |
| Phone | `call` | `Phone` | ~95 |
| Email | `mail` | `Mail` | ~110 |
| Hours | `schedule` | `Clock` | ~125 |

**File:** `src/app/contact/page.tsx`

### Contact Page Social Links (contact/page.tsx, lines ~143-160)
| Item | Current Icon | Lucide Suggestion |
|------|------------|------------------|
| Share | `share` | `Share2` |
| Public/Web | `public` | `Globe` |
| LinkedIn | `linked_services` | `Link` |

**File:** `src/app/contact/page.tsx`

---

## 6. Feature & Trust Icons

### About Page - Values Icons (about/page.tsx)
| Item | Current Icon | Lucide Suggestion | Line |
|------|------------|------------------|------|
| Unyielding Integrity | `verified` | `Shield` or `CheckCircle` | ~60 |
| Absolute Precision | `precision_manufacturing` | `Zap` or `Target` | ~69 |

**File:** `src/app/about/page.tsx`

### Home Page - Trust Badge (page.tsx)
| Item | Current Icon | Lucide Suggestion | Line |
|------|------------|------------------|------|
| IRS Registered Practitioners | `verified_user` | `BadgeCheck` or `Shield` | ~110 |

**File:** `src/app/page.tsx`

---

## 7. Map & Location Icon

### Footer - View on Map Link (Footer.tsx)
| Item | Current Icon | Lucide Suggestion | Line |
|------|------------|------------------|------|
| View on Map | `map` | `MapPin` | ~67 |

**File:** `src/components/Footer.tsx`

---

## Summary Table

| Category | Count | Files Affected | Priority |
|----------|-------|---------------|---------| 
| Navigation Icons | 2 | Header.tsx, services/page.tsx | High |
| CTA Buttons | 6 | page.tsx, services/page.tsx, Header.tsx | High |
| Service Icons | 8 | services.ts, services/page.tsx | Medium |
| Contact Icons | 7 | Footer.tsx, contact/page.tsx | Medium |
| Feature Icons | 2 | about/page.tsx, page.tsx | Medium |
| Social Icons | 6 | Footer.tsx, contact/page.tsx | Low |
| **Total** | **31+ icons** | **6 files** | - |

---

## Implementation Notes

### Files to Update (in order of priority):
1. `src/components/Header.tsx` - Navigation & mobile menu
2. `src/app/page.tsx` - Hero CTA buttons, IRS badge
3. `src/app/services/page.tsx` - Service category icons, Learn More arrows
4. `src/components/Footer.tsx` - Contact icons, social links
5. `src/app/contact/page.tsx` - Contact form icons, social links
6. `src/app/about/page.tsx` - Value proposition icons
7. `src/data/services.ts` - Service data emoji replacement

### Import Statement Template:
```typescript
import { 
  Menu, X, ArrowRight, ChevronRight, Phone, 
  BarChart3, FileText, Calculator, Briefcase, TrendingUp,
  MapPin, Mail, Clock, 
  Facebook, Instagram, Linkedin,
  Shield, CheckCircle
} from 'lucide-react';
```

---

## Next Steps
1. Review this list for any missed items
2. Align icon choices with design system
3. Update files according to priority
4. Test responsive behavior of inline icons
5. Ensure color consistency (#1F3F6E and #F58220)
