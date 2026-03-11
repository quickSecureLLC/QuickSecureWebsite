# QuickSecure

**Delaware C Corp | Founded May 14, 2025**
**Tagline:** Safer Schools Start Here

## Mission

Single pane of glass for all things school safety and operations. Unified K-12 platform combining emergency response, daily operations, hardware, and integrations into one system.

## Origin

Founded after a real school lockdown exposed major breakdowns — communication failures between teachers, administration, and dispatch; inconsistent door locking; confusion between drills and real events. Existing market solutions had critical gaps. First product (DoorBully, 2022) was a retrofit lock built in 11th grade, which evolved into the current RLS hardware.

## Founders

- **William Susskind** — Co-Founder & CTO. Design, product direction, development, technical team management, customer success, onboarding, sales support.
- **Rohan Kumar** — Co-Founder & CEO. Administration, company management, outreach, networking, sales, customer success, some backend development.

## Products

QuickSecure is built on three platforms — **QuickSecure Panic** (mobile app), **QuickSecure Nexus** (web dashboard), and **RLS** (hardware). All software modules are separate products sold independently, accessible through Panic and/or Nexus.

### QuickSecure Panic

Mobile-first emergency response app. One-tap access to emergency workflows with structured prompts for accurate, actionable alerts.

**Emergency types:** Fire, Medical, Lockdown, Admin Support

**Alert flow:** Confirm → Dispatch → Details
- Lockdown: hold → confirm
- Fire/Medical/Admin Support: click → confirm
- All user roles can trigger all alert types

**Dispatch:** Direct-to-dispatch via RapidSOS with one-click confirmation.

**In-alert communication:** Built-in staff discussion thread per emergency. First responders can communicate in the same thread (two-way).

**Built-in features:**
- Campus mapping with phone-based evacuation/weather zone guidance
- Dynamic zone guidance (updates based on classroom assignments throughout the day)
- SIS-based roster checks in emergency workflows (e.g., fire)
- Apple Critical Alerts for specific emergencies

**Modules accessible in Panic:** Ticketing, Mass Notifications, SOP Management

**Platforms:** iPhone, Android, Web

**Free version:** In beta. Includes direct-to-dispatch and custom emergency workflows. Target launch mid-to-late March 2026. Core belief: panic buttons should be a basic necessity for all schools.

### QuickSecure Nexus

Central web dashboard for school safety and operations. Single pane of glass for monitoring campus activity, managing incidents, and coordinating response.

**Core capabilities:**
- Campus maps, floorplans, satellite overlays
- Lock status monitoring (live)
- Camera feed integration (mapped directly into dashboard)
- Access control integration
- Live operational context

**Role-based access:** Admin, IT, Facilities, Teacher, Janitor, custom designations (e.g., AED-certified staff)

### RLS (Rapid Lockdown System)

Proprietary retrofit lock hardware. Upgrades existing doors without full replacements. Production ready. Connects into the QuickSecure platform so physical security and software workflows stay linked. Installation by QuickSecure, subcontractors, or the school.

## Software Modules

Sold as separate modules. No tiers. All modules are live.

| Module | Description |
|---|---|
| **Anonymous Tip Line** | Website-based reporting for students, parents, community. Guided reporting. AI triage (spam filter, urgency sort, prioritization). Multilingual. Tiered escalation (email → push → critical alert). |
| **SOP Management** | Centralized emergency procedures and operational protocols. Versioning, staff-based access, linked into emergency workflows and drills. No read acknowledgments currently. |
| **Asset Management** | Tracks safety/operational assets (devices, equipment, doors, radios). Maintenance intervals, ownership/assignment tracking, QR/barcode scanning. |
| **Ticketing** | Operations workflow for issues, requests, follow-ups. Anyone can submit. Resolution by assigned roles. AI triage priority sorting. AI operational insights (recurring issue identification, proactive action suggestions). Categories: IT, facilities, safety. |
| **Drill Management** | Plan, run, document drills using the same workflows as real emergencies. Scheduling, prep notifications, guided execution. Does not trigger real dispatch. |
| **Drill Compliance Report Automation** | Auto-converts drill activity into standardized records. Captures type, time, participants, completion status. Generates reports automatically. |
| **Mass Notifications** | Multi-channel alert system for staff, students, and parents during emergencies or operational events. Push notifications, Apple Critical Alerts, SMS, email, and in-app messaging. Role-based targeting by campus, building, or group. Manual or automatic triggering from emergency workflows. Pre-built templates. SIS integration for accurate distribution lists. |

## Integrations

**SIS (confirmed):** PowerSchool, FACTS, Veracross. In discussions: Blackbaud, Infinite Campus. Current sync: basic rostering, teacher info, class info.

**Cameras (confirmed):** Axis, Avigilon, UniFi/Ubiquiti, generic RTSP-compatible systems. Feeds pulled into Nexus.

**Access Control (confirmed):** Ubiquiti, Axis, generic systems. Lock status surfaced in Nexus.

**Dispatch:** RapidSOS (direct-to-dispatch).

**SSO:** Not currently supported.

## Tech Stack

**Mobile (QuickSecure Mobile App):**
React Native + Expo (managed), TypeScript, React Navigation, Axios. Expo modules: notifications, location, local auth (biometrics), secure store, image picker, sensors.

**Dashboard + Server (monorepo):**
- Frontend: React + Vite + TypeScript, react-router-dom, TailwindCSS + Headless UI, Mapbox GL (draw, geocoder), Turf, Chart.js, Recharts
- Backend: Node.js 18 + Express, PostgreSQL (pg, connect-pg-simple), Redis (ioredis, rate-limit-redis), WebSocket (ws), bcrypt, jsonwebtoken, helmet, express-rate-limit, AWS (S3, Kinesis Video Streams, CloudWatch), Firebase Admin (push notifications)

## Security & Compliance

- FERPA aligned
- Role-based access enforced via auth and account permissions
- Student privacy controls for tip line and SIS-linked data
- Audit logs supported
- SOC 2 in progress
- Terms of Service, Privacy Policy, Data Processing Agreement completed
- General liability insurance in place

**Data stored (PostgreSQL):** Alert trigger user, school, type, time/date, optional GPS, workflow details (severity, categories, descriptions, photos), discussion messages, viewed tracking, dismissal/archive history, user accounts, role info, emergency action/log history.

**Retention:** API tokens expire 30 days. Web sessions cleaned hourly. Inactive push tokens deleted after 30 days. Closed tickets archived after 7+ days (attachments to archive storage). Job queue cleanup for completed/failed jobs older than 30 days. Dismissed alerts archived, not hard deleted.

## Deployment

- Floorplan mapping handled by external partner
- Full deployment: 6-8 weeks
- Integration setup (SIS, cameras, etc.): 4-6 weeks
- School provides: teacher info, digital floorplans, basic school info
- QuickSecure provides: in-person onboarding, remote onboarding, staff training, drill setup, emergency workflow customization

## Positioning

- Built entirely for K-12
- Designed for real usability in high-stress situations
- Combines emergency workflows with daily operations
- Connects hardware, software, and integrations in one platform
- Open integration approach
- Design philosophy: teachers and staff must be able to act quickly and confidently — not struggle with the software
