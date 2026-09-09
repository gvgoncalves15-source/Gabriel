---
name: Fleet & Bulk Logistics Operations
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444653'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#2d3449'
  on-tertiary: '#ffffff'
  tertiary-container: '#434b60'
  on-tertiary-container: '#b4bbd5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  title-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-xxs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
  gutter: 1rem
  sidebar-width: 16rem
  sidebar-collapsed: 4.5rem
  dock-height: 4rem
---

## Brand & Style
The design system reflects operational authority, technical precision, and industrial reliability tailored for real-time fleet dispatch, bulk freight, and cylinder distribution. It balances dense telemetry and shift planning with high legibility, eliminating cognitive fatigue during intensive monitoring shifts.

The aesthetic fuses **Corporate / Modern** structure with a clean industrial telemetry feel:
- **Tone:** Methodical, sharp, authoritative, and frictionless.
- **Visual Personality:** Cool slate backdrops, surgical hierarchy, crisp hairline borders, and confident industrial navy accents.
- **Telemetry Signaling:** Purposeful, restrained use of status-driven signals against low-chroma surfaces to maintain focus on critical dispatch updates, SLA risks, and tank/cylinder levels.

## Colors
The palette is engineered for high operational clarity and contrast standards (WCAG AAA compliant for text, AA for operational indicators).

### Core Palette
- **Primary Industrial Blue (`#1E40AF`):** Commands top-level navigation, selected operational filters, and primary dispatch actions.
- **Action / Interactive Blue (`#2563EB`):** Dynamic actions, active tabs, focused states, and interactive links.
- **Deep Navy / Slate 900 (`#0F172A`):** Core typographic tone, deep anchor headers, and high-emphasis metric displays.
- **Neutral Slate (`#64748B`):** Secondary metadata, inactive indicators, table column headers, and structural grid rules.

### Canvas & Surfaces
- **Canvas Base (`#F8FAFC`):** Low-strain, cool background reducing glare during multi-hour operations.
- **Surface Elevation (`#FFFFFF`):** Workstation cards, data tables, and slide-over dispatch panels.
- **Subtle Outline (`#E2E8F0`):** Hairline delineation for table rows, card dividers, and telemetry enclosures.

### Operational Status Tokens
Operational states use paired background-tint and solid-glyph semantics for rapid pattern recognition:
- **Active / Moving (`#059669` / Surface `#ECFDF5`):** Unit running, route on schedule, normal pressure/load.
- **Attention / Warning (`#D97706` / Surface `#FFFBEB`):** Threshold warning, load delay, cylinder maintenance due.
- **Critical / Stopped (`#DC2626` / Surface `#FEF2F2`):** Incident open, mechanical halt, leak/telemetry failure, route halted.
- **Standby / Off-Duty (`#64748B` / Surface `#F1F5F9`):** Driver resting, vehicle parked in terminal, unassigned asset.

## Typography
Built on **Inter** with tabular figure alignment enabled (`font-feature-settings: "tnum" 1`) to ensure weight metrics, tracking serials, pressures (PSI/bar), and ETA countdowns align vertically across dense grids and rosters.

- **Headlines:** Reserved for operational dashboard summaries, yard views, and dispatch control stations.
- **Data & Tables:** Standardize on `body-md` (13px) and `label-md` (11px uppercase) to maximize information density without line collision.
- **Metric Badges & Counters:** Utilize `title-lg` and `headline-sm` with tight tracking for quick glance-value recognition.

## Layout & Spacing
The layout leverages a high-density, 12-column adaptive fluid workbench model.

- **Workbench Grid:**
  - **Desktop (1280px+):** Fixed navigation rail (collapsible between 256px and 72px), dynamic operational multi-column grid (16px gutters, 24px outer margins).
  - **Tablet (768px - 1279px):** Auto-compacting side rail to icon-only format, 12-column grid collapsing to dual columns with 12px gutters.
  - **Mobile (< 768px):** Single-column stacked stream, sticky bottom filter bar, side drawers replacing persistent panes.
- **Density Control:** Core tables implement 32px to 40px row heights for dense overview configurations, allowing 20+ vehicle routes visible per monitor view.

## Elevation & Depth
Depth is constructed through **subtle surface layer tiering** combined with soft, low-intensity ambient shadows to keep the interface clinical and crisp without muddy layers.

- **Base Layer (L0 - Background):** `#F8FAFC`, flat.
- **Card / Table Surface (L1):** `#FFFFFF`, hairline boundary `1px solid #E2E8F0`, ambient shadow `0 1px 3px 0 rgba(15, 23, 42, 0.05)`.
- **Active / Interactive Hover (L2):** `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`, outline `#CBD5E1`.
- **Flyout Modals & Slide-over Drawers (L3):** `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`, border `1px solid #CBD5E1`.

## Shapes
A balanced radius framework combines corporate composure with clean visual framing:
- **Base Components (Inputs, Buttons, Micro-tags):** Rounded-lg (`0.5rem` / 8px).
- **Core Cards & Datagrids:** Rounded-xl (`1rem` / 16px).
- **Hero Operational Panels, Modals & Master Drawers:** Rounded-2xl (`1.5rem` / 24px).
- **Status Pills:** Pill-shaped full radius (`9999px`) for quick peripheral status recognition.

## Components

### Buttons
- **Primary Dispatch:** Solid `#1E40AF`, text white, hover `#1D4ED8`, height 36px, radius 8px (`rounded-lg`), bold micro-label.
- **Secondary / Action:** White surface, border `1px solid #CBD5E1`, text `#0F172A`, hover background `#F8FAFC`.
- **Destructive:** Border and text `#DC2626`, hover background `#FEF2F2`.

### Status Badges & Chips
- Designed as pill shapes (`rounded-full`) with a 6px status dot and upper-case label (`label-sm`).
- **Rodando / Em Viagem:** Background `#ECFDF5`, text `#065F46`, dot `#10B981`.
- **Atenção / Atraso / Manutenção:** Background `#FFFBEB`, text `#92400E`, dot `#F59E0B`.
- **Parado / Ocorrência Crítica:** Background `#FEF2F2`, text `#991B1B`, dot `#EF4444`.
- **Folga / Base:** Background `#F1F5F9`, text `#475569`, dot `#94A3B8`.

### Data Tables (Fleet, Routes & Allocations)
- **Header:** Background `#F8FAFC`, uppercase `label-md` `#64748B`, height 38px, bottom border `1px solid #E2E8F0`.
- **Row:** Height 44px, alternating hover `#F8FAFC`, active selection `#EFF6FF` with `2px solid #2563EB` left border marker.
- **Numeric Columns:** Right-aligned with tabular figures.

### Form Inputs & Filters
- Background white, border `1px solid #CBD5E1`, focus ring `2px solid #2563EB` with `0 0 0 3px rgba(37, 99, 235, 0.15)`. Radius 8px.

### Operational Fleet Cards
- Encased in `rounded-xl` with hairline borders `#E2E8F0`. Features a two-part split: top zone with vehicle ID, cargo mode (Granel vs. Cilindros), and driver assignment; bottom zone housing telemetry (fuel, pressure, ETA, route progress bar).