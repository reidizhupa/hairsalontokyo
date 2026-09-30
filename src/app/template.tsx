// Re-mounts on every navigation, so the CSS entrance replays per route.
// Pure CSS (opacity only): works before hydration, never hides content if JS
// is slow, and doesn't create a containing block for fixed bars.
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="page-enter flex flex-1 flex-col">{children}</div>;
}
