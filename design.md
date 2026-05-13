# Taiwo Olanrewaju Website — design.md

## Project Overview

Build a modern, premium, conversion-focused website for Taiwo Olanrewaju — a financial advisor, educator, and digital product creator.

The website should position Taiwo as:
- A trusted financial advisor
- A professional educator
- A modern digital entrepreneur
- A mentor for aspiring advisors

The platform must support:
- Appointment booking (virtual + in-office)
- Lead generation
- Newsletter subscriptions
- Free and paid digital book delivery
- Advisor recruitment workflows
- CRM integrations
- Content publishing
- Testimonial management

---

# Core Objectives

## Business Goals

1. Build authority and trust
2. Convert visitors into consultation bookings
3. Generate leads through free resources
4. Sell digital products (books)
5. Recruit and qualify advisor applicants
6. Separate business lead flows properly between HubSpot and Greatway CRM
7. Create a scalable platform that Taiwo can manage independently

---

# Design Direction

## Brand Identity

### Visual Style
The overall visual style should feel:
- Premium
- Elegant
- Clean
- Modern
- Professional
- Warm and trustworthy

The experience should resemble a high-end financial consulting brand combined with a modern educational platform.

---

## Color Palette

### Primary Colors
- Burgundy: `#800020`
- Gold / Warm Beige accents
- White
- Charcoal Grey

---

## Typography

Recommended fonts:
- Poppins
- Inter
- Montserrat

---

# Website Structure (Sitemap)

## Required Pages

1. Home
2. About
3. Book an Appointment
4. Blog
5. Contact
6. Newsletter Signup
7. Join My Team
8. Resources
9. Books
10. Affiliate Links
11. Reviews / Testimonials

---

# Home Page Requirements

## Hero Section
- Large portrait of Taiwo
- Burgundy-themed background
- Strong headline
- Supporting subheadline
- CTA buttons:
  - Book an Appointment
  - Get My Free Book

## Additional Sections
- About Preview
- Services Section
- Lead Magnet Section
- Join My Team Preview
- Testimonials Preview
- Blog Preview
- Footer

---

# About Page

## Content Requirements
- Professional biography
- Mission and values
- Advisor experience
- Educational background
- Personal brand story

CTA:
- Book an Appointment

---

# Book an Appointment Page

## Booking Options
1. Meet at the Office
2. Meet Virtually (Google Meet)

## Form Fields
- First Name
- Last Name
- Province
- Email
- Phone
- “Tell me anything that will help me prepare for our meeting”

## Functional Requirements
- Auto-generate Google Meet links
- Sync with Google Calendar
- Sync bookings to Greatway CRM

## Integrations
- Google Calendar API
- Google Meet API
- Greatway CRM API/Webhook

---

# Blog Page

## Categories
- Insurance
- Financial Education
- Wealth Building
- Newcomer Finance

## Features
- Custom blog layout
- Category filtering
- SEO-friendly URLs
- Social sharing

---

# Contact Page

## Requirements
- Contact form
- Email address
- Phone number
- Office address
- Optional map embed

---

# Newsletter Signup Page

## Requirements
- Email capture form
- Sync to HubSpot Free CRM
- Thank-you confirmation message

---

# Join My Team (Advisor Recruitment)

## Questionnaire Fields
- Are you licensed? (Yes/No)
- If yes: Which provinces?
- Would you like to earn passive income?
- If not licensed:
  - How much time can you dedicate to learning and getting licensed?
- What interests you about becoming an advisor?
- Name
- Email
- Phone

## Submission Routing
- HubSpot CRM (primary)
- Greatway CRM (optional)

---

# Resources Page

## Content Types
- Free tools
- Guides
- Videos
- Blog links

---

# Books Page

## Free Book Section
- Lead capture form
- Download link after submission
- Sync leads to HubSpot CRM
- Must NOT sync to Greatway CRM

## Paid Book Section
- Stripe integration
- Download link after purchase
- Buyer info sync to HubSpot CRM
- Must NOT sync to Greatway CRM

---

# Affiliate Links Page

## Requirements
- Grid-based layout
- Clean buttons
- External link support
- Responsive cards

---

# Reviews / Testimonials Page

## Features
- Client testimonials
- Submit review form
- Admin approval before publication

---

# CRM Architecture

## HubSpot CRM
Should receive:
- Newsletter signups
- Free book leads
- Paid book buyers
- Recruitment leads

## Greatway CRM
Should receive:
- Meeting bookings
- Optional recruitment routing

Important:
Digital product buyers must remain separated from Greatway CRM.

---

# Functional Requirements

## Integrations
- Google Calendar API
- Google Meet API
- HubSpot Free CRM API
- Greatway CRM API/Webhooks
- Stripe payment integration

## Performance
- Fast loading
- SEO optimized
- Mobile responsive

## Security
- SSL certificate
- Anti-spam protection
- Secure payment processing

---

# CMS/Admin Requirements

Taiwo should be able to:
- Add/edit blog posts
- Add/edit resources
- Add/edit reviews
- Update affiliate links
- Edit homepage text
- Upload new books

---

# Deliverables

The developer must provide:
- Fully built custom website
- All required pages
- Functional integrations
- Responsive implementation
- SEO-ready structure
- Admin/backend access
- Training for content updates
