# Design System

## Direction

Premium Indonesian corporate: stable, clear, operational, human, technology-enabled. Use generous white space, strong alignment, restrained surfaces, fine borders, and a clear CTA hierarchy. Avoid generic template composition, excessive cards, gradients, rounded UI, glass effects, and decorative motion.

## Color tokens

| Token | Value | Use |
|---|---|---|
| Brand blue | `#293696` | Primary identity, navigation, links, primary surfaces |
| Brand orange | `#FA9F1A` | CTA emphasis, active states, small highlights only |
| Deep navy | `#111827` | Main text / dark surfaces |
| Slate | `#475569` | Secondary text |
| Light slate | `#F1F5F9` | Quiet backgrounds and separators |
| White | `#FFFFFF` | Main surfaces |
| Success / warning / danger | `#16A34A` / `#F59E0B` / `#DC2626` | Status with accompanying text/icon |

## Type and layout

The initial implementation uses a locally served Manrope variable font with system fallbacks; no third-party font request is made at runtime. Establish Display, H1, H2, H3, body, small and caption styles. Use a centered max-width container, a consistent spacing scale, responsive grids, moderate corner radii, and subtle elevation.

## Components

Container, Section, Grid, Button, Link, Input, Select, Textarea, Checkbox, Badge, Card, Breadcrumb, Pagination, Table, Alert, Toast, Modal, Accordion, Navbar, Footer, Hero, Skeleton, Loading and Empty State. Components must support focus-visible, disabled/error states and reduced motion.

## Motion

Fast, purposeful transitions only; respect `prefers-reduced-motion`. No information or state is communicated by color/animation alone.

## Breakpoints

Validate at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 px. Use content-driven breakpoints and avoid horizontal overflow.
