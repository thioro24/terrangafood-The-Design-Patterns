import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Bienvenue sur TerrangaFood</h1>
      <p className="header-subtitle">The-Disign-Patterns</p>
      <div className="header-content">

        <Link href="/" className="header-logo">
          🍛 Terranga<span>Food</span>
        </Link>
        <nav className="header-nav">
          <Link href="/">Restaurants</Link>
        </nav>
      </div>
    </header>
  );
}
