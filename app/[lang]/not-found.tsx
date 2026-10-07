import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      <span className="eyebrow" style={{ marginBottom: '1rem' }}>404</span>
      <h1 className="section-title">Page not found.</h1>
      <p className="lead" style={{ maxWidth: '500px', margin: '1rem auto 2.5rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn--primary">
        Back to home <span className="arrow">→</span>
      </Link>
    </div>
  );
}
