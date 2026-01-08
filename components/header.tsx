import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between ">
        <h1 className="font-semibold text-lg">Cloud Project One</h1>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
