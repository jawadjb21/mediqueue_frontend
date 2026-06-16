import React from "react";
import navItems from "@/data/navItems.json";
import NavItems from "./NavItems";
import { ThemeToggleButton } from "../theme/ThemeToggleButton";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "./LoginButton";
import LoggedInMobileDropdown from "./LoggedInMobileDropdown";
import NotLoggedIMobileDropdown from "./NotLoggedIMobileDropdown";
import ProfileDropdown from "./ProfileDropdown";

const desktopNavItems = navItems.filter(
  (item) => !["login", "register"].includes(item.name.toLowerCase()),
);

const loginItem = navItems.find((item) => item.name.toLowerCase() === "login");

const Navbar = async ({ user = null }) => {
  return (
    <div className="navbar shadow-sm px-4 md:px-10 sticky top-0 z-50 backdrop-blur-md border-b border-base-200">
      {/* ── Mobile: hamburger ── */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Open navigation menu"
            className="btn btn-ghost btn-sm rounded-lg"
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
          {user ? (
            <LoggedInMobileDropdown user={user} navItems={navItems} />
          ) : (
            <NotLoggedIMobileDropdown navItems={navItems} />
          )}
        </div>
      </div>

      {/* ── Logo ── */}
      <div className="navbar-start hidden lg:flex md:ml-20">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={Logo}
            alt="MediQueue logo"
            height={80}
            width={80}
            className="rounded-xl transition-transform group-hover:scale-105"
          />
          <h3 className="font-bold text-3xl text-primary lg:inline">
            MediQueue
          </h3>
        </Link>
      </div>

      {/* ── Mobile: centered brand ── */}
      <div className="navbar-center lg:hidden">
        <Link href="/">
          <span className="font-bold text-xl text-primary tracking-tight">
            MediQueue
          </span>
        </Link>
      </div>

      {/* ── Desktop nav links ── */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-1">
          {desktopNavItems.slice(0, 5).map((item) => (
            <NavItems key={item.id} navItem={item} />
          ))}
        </ul>
      </div>

      {/* ── Right side ── */}
      <div className="navbar-end flex items-center gap-2">
        {user ? (
          <ProfileDropdown user={user} />
        ) : (
          <>
            <div className="hidden md:block">
              <ThemeToggleButton />
            </div>
            {loginItem && (
              <LoginButton key={loginItem.id} navItem={loginItem} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
