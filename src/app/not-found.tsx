import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find what you were looking for.</p>
      <Link href="/en" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#000', color: '#fff', textDecoration: 'none' }}>
        Back to Home
      </Link>
    </div>
  );
}
