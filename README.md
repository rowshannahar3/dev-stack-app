# Dev Stack Builder

A responsive React web app for exploring frontend, backend, database, and tooling
technologies, and assembling them into a personal "Your Stack" list.

## Description

Dev Stack Builder lets you browse a catalog of development technologies — frameworks,
languages, databases, styling tools, and DevOps tools — each shown with a rating,
difficulty level, and category. You can add technologies to a personal stack, remove
them individually, or clear the whole stack at once. The app is fully responsive,
with a dedicated mobile navigation experience.

## Technology Used

- React (Vite)
- Tailwind CSS + DaisyUI
- React-Toastify (alerts/notifications)
- JSON (local technology data, loaded via `fetch`)

## Features

1. **Interactive stack builder** — add technologies to "Your Stack" with one click;
   duplicate adds are blocked with a warning toast, and added cards visibly disable
   themselves ("✓ Added to Stack").
2. **Fully responsive layout** — a 3-column technology grid on desktop that collapses
   to 2 columns on tablet and 1 on mobile, plus a dedicated mobile navbar with a
   hamburger menu.
3. **Single-source gradient theming** — the orange → pink → violet brand gradient is
   defined once (`tailwind.config.js`) and reused across the logo, hero heading, and
   primary buttons, so the whole UI can be re-themed by changing one value.

## Live Demo

- **Live Site:** <your Vercel URL here>
- **GitHub Repo:** <your repo URL here>

## React Questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside
JavaScript. It's used because it makes describing what the UI should look like much
more readable than calling `React.createElement` by hand — it gets compiled down to
regular JavaScript function calls under the hood.

**What is the difference between props and state?**
Props are values passed into a component from its parent — they're read-only from
the component's own perspective. State is data a component manages internally and
can change over time (usually via `useState`), and changing it triggers a re-render.

**What does the useState hook do, and where did you use it in this project?**
`useState` lets a functional component hold and update its own local data. In this
project it's used in `App.jsx` to store the fetched `technologies` list, the
`stack` array of selected technologies, and the `loading` flag.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like data fetching) after a component renders. It was
needed here because fetching `technologies.json` is an async side effect that
shouldn't run on every render — with an empty dependency array `[]`, it runs exactly
once when `App` first mounts.

**Why does every item in a .map() list need a unique key prop?**
The `key` prop helps React tell list items apart between renders, so it can figure
out exactly which items were added, removed, or reordered instead of re-rendering
the whole list from scratch. Without stable keys, React can mix up state between
list items.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition. In
`YourStack.jsx`, the component checks `stack.length === 0` and renders an
"Your stack is empty." placeholder when true, or the actual list of stack items
when false.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props (e.g. `<TechCard tech={tech} />`).
For a child to send data back up, the parent passes a callback function down as a
prop (e.g. `onAdd={handleAdd}`), and the child calls that function with whatever
data it needs to send — for example `TechCard` calls `onAdd(tech)` when its button
is clicked.