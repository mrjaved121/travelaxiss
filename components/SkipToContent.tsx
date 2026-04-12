/**
 * First focusable control on every page — moves keyboard and screen reader users
 * past repetitive header content to the primary landmark.
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-main"
    >
      Skip to main content
    </a>
  );
}
