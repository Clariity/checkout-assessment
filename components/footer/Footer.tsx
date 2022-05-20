import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary p-2 flex justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container py-2 flex flex-wrap justify-between items-center">
        <p className="text-center lg:text-left text-sm font-light w-full lg:w-auto">
          {`Copyright © ${new Date().getFullYear()} Ryan Gregory. All Rights Reserved.`}
        </p>

        <div className="flex items-center m-auto my-8 lg:m-0">
          <div className="flex items-center w-6">
            <Image src={"/media/logo.png"} alt="logo" height={24} width={24} />
          </div>
          <p className="pl-2">Checkout-Reviews.com</p>
        </div>
      </div>
    </footer>
  );
}
