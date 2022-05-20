import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <div className="flex w-full">
      <Link href="/">
        <a className="flex text-fg-primary hover:text-theme">
          <div className="flex items-center w-9">
            <Image src={"/media/logo.png"} alt="logo" height={36} width={36} />
          </div>
          <h1 className="text-md font-bold xl:text-2xl my-auto ml-2 sm:mx-2">
            Checkout-Reviews.com
          </h1>
        </a>
      </Link>
    </div>
  );
}
