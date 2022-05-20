import { NavbarButtons } from "./NavbarButtons";
import { NavbarLogo } from "./NavbarLogo";

export function Navbar() {
  return (
    <nav className="w-full bg-secondary z-20 sticky top-0 shadow-md">
      <div className="mx-auto p-2 container flex items-center w-full">
        <NavbarLogo />
        <NavbarButtons />
      </div>
    </nav>
  );
}
