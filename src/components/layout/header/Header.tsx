import { Link } from "@tanstack/react-router";

import { Logo } from "@/assets/svg";

export function Header() {
  return (
    <header className="fixed z-50 flex w-screen justify-between align-middle">
      <div className="flex w-full max-w-300 justify-between align-middle">
        <Link to="/" className="relative h-44 w-44">
          <img src={Logo} />
        </Link>
      </div>
    </header>
  );
}
