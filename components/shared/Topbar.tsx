import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  auth,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

export default function Topbar() {
  const { userId } = auth();
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/logo.svg"
          alt="profile photo"
          width={28}
          height={28}
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden ">
          <SignedIn>
            <SignOutButton>
              <div className="Flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
          {!userId && (
            <Link href="/sign-in">
              <div className="Flex cursor-pointer">
                <Image
                  src="/assets/signin.svg"
                  alt="signin"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          )}
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: { organizationSwitcherTrigger: "py-2 px-4" },
          }}
        />
      </div>
    </nav>
  );
}
