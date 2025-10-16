import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Suspense fallback={<NavLinksSkeleton />}>
          <NavLinks />
        </Suspense>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

function NavLinksSkeleton() {
  return (
    <>
      <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 animate-pulse">
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
        <div className="hidden md:block w-16 h-4 bg-gray-200 rounded"></div>
      </div>
      <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 animate-pulse">
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
        <div className="hidden md:block w-16 h-4 bg-gray-200 rounded"></div>
      </div>
      <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 animate-pulse">
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
        <div className="hidden md:block w-16 h-4 bg-gray-200 rounded"></div>
      </div>
    </>
  );
}
