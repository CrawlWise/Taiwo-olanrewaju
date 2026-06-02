import {
  Heart,
  Activity,
  TrendingUp,
  Sun,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

import { ServiceItem } from "@/types/services";

export const servicesData: ServiceItem[] = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    shortTitle: "Life Insurance",
    icon: Heart,
    description: "Life insurance is the foundation of any solid financial plan. If personalized to meet your needs, it ensures your loved ones are not burdened with financial hardship. We offer solutions for every stage of life and budget.",
    cards: [
      {
        title: "Term Life Insurance",
        description: "Affordable coverage for a specific period (10, 20, or 30 years). Ideal for covering temporary obligations like mortgages, children's education, until they are financially independent."
      },
      {
        title: "Permanent Life Insurance",
        description: "Lifelong coverage (Whole Life or Universal Life) that often includes a cash-value component. Ideal for estate planning, leaving a legacy, or covering final expenses."
      }
    ],
    cta: {
      text: "Request a Life Insurance Quote",
      href: "/contact?service=life-insurance",
      variant: "outline" as const
    }
  },
  {
    id: "living-benefits",
    title: "Living Benefits",
    shortTitle: "Living Benefits",
    icon: Activity,
    description: "Protect your greatest asset: your ability to earn an income. Living benefits provide financial support while you are alive but unable to work due to illness or injury.",
    cards: [
      {
        title: "Critical Illness Insurance",
        description: "Provides a tax-free lump-sum payment if you are diagnosed with a covered illness (like cancer, heart attack, or stroke). Use the funds for medical treatments, replacing income, or paying off debt."
      },
      {
        title: "Disability Insurance",
        description: "Replaces a portion of your income if you become disabled and cannot work. Essential for professionals, self-employed, and anyone without group benefits."
      }
    ]
  },
  {
    id: "investment-solutions",
    title: "Investment Solutions",
    shortTitle: "Investment Solutions",
    icon: TrendingUp,
    description: "Growing your wealth requires strategic planning and utilizing tax-advantaged accounts to maximize your returns safely.",
    cards: [
      {
        title: "RRSP (Registered Retirement Savings Plan)",
        description: "Deductible from current tax bracket while saving for your retirement. Withdrawals are taxed, but optimized for investments for your risk tolerance."
      },
      {
        title: "TFSA (Tax-Free Savings Account)",
        description: "Flexible savings where your investments grow tax-free. Ideal for short, medium to long-term goals, emergency funds, or supplementing retirement income."
      },
      {
        title: "RESP (Registered Education Savings Plan)",
        description: "Save for your children's post-secondary education with the advantage of government grants (CESG) that match a portion of your contributions."
      }
    ]
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    shortTitle: "Retirement Planning",
    icon: Sun,
    description: "Will you have enough to retire comfortably? We help you build your retirement and create a clear roadmap to get there, using registered accounts (RRSP, RRIF) and annuities.",
    bullets: [
      "Minimize taxes to make sure your money lasts",
      "Provide tax-efficient streams of retirement income",
      "Implement tax-exempt wealth strategies",
      "Create optimized, multi-layer withdrawal plans"
    ]
  },
  {
    id: "estate-planning",
    title: "Estate Planning & Wealth Protection",
    shortTitle: "Estate Planning",
    icon: ShieldCheck,
    description: "Ensure that your wealth is transferred to your beneficiaries smoothly and privately, while minimizing the tax burden on your estate. We work alongside your legal professionals to structure life insurance and segregated funds that bypass probate and provide immediate liquidity to heirs."
  },
  {
    id: "business-insurance",
    title: "Business Insurance Solutions",
    shortTitle: "Business Insurance",
    icon: Briefcase,
    description: "Your business is your livelihood. We help business owners and corporate structures mitigate risk and attract top talent through specialized corporate strategies.",
    cards: [
      {
        title: "Key Person Insurance",
        description: "Protects the company against the financial loss of losing a crucial employee or executive due to death or disability."
      },
      {
        title: "Buy-Sell Agreement Funding",
        description: "Provides the necessary capital for surviving partners to buy out the shares of a deceased or disabled partner, ensuring business continuity."
      },
      {
        title: "Group Benefits",
        description: "Attract and retain employees by offering competitive health, dental, and life insurance benefits tailored for small to medium businesses."
      }
    ],
    cta: {
      text: "Discuss Corporate Solutions",
      href: "/contact?service=business-insurance",
      variant: "solid" as const
    }
  }
];