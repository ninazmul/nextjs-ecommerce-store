"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
import useWixClient from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartsStore } from "@/hooks/useCartsStore";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const wixClient = useWixClient();
  const pathname = usePathname();

  const isLoggedIn = wixClient.auth.loggedIn();

  const { cart, counter, getCart } = useCartsStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogOut = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(pathname);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div className="relative">
        <Image
          src="/profile.png"
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
        />
        {isProfileOpen && isLoggedIn && (
          <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-white border-orange border-2 font-semibold shadow-gray-400 shadow-md z-20 w-max">
            <Link href="/profile">Profile</Link>
            <button
              onClick={handleLogOut}
              className="mt-2 cursor-pointer bg-orange hover:bg-yellow-700 text-white w-full rounded-md p-1 transition-all duration-300 ease-in-out"
            >
              {isLoading ? "Signing Out.." : "Sign Out"}
            </button>
          </div>
        )}
      </div>
      <Image
        src="/notification.png"
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt="cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <p className="absolute -top-4 -right-4 w-6 h-6 bg-orange text-white rounded-full text-sm flex items-center justify-center">
          {counter}
        </p>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
