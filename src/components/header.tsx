"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/src/components/shadcn/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./shadcn/button";
import { Menu, X } from "lucide-react";
import {
  BlackButtonGreenTxt,
  GhostButtonGreenTxt,
  GreenButtonBlackTxt,
} from "./buttons";
import { useState } from "react";
import ModalSignUp from "./modal-signup";
import ModalLogin from "./modal-login";
import { FullLogo } from "./shared";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 bg-dark-transp border-b-3 border-amber-300"
      }
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="border cursor-pointer hover:bg-transparent"
            >
              <Menu className="h-25 w-25" color="#9AFF4A" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[50%] bg-dark-transp border-0 [&>button]:hidden"
          >
            <nav className="flex flex-col gap-4 mt-8 p-4">
              <SheetClose asChild>
                <button className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10">
                  <X className="h-5 w-5 text-white" />
                </button>
              </SheetClose>
              <GhostButtonGreenTxt className="-ml-16">
                About Us
              </GhostButtonGreenTxt>
              <GhostButtonGreenTxt className="-ml-18">
                Services
              </GhostButtonGreenTxt>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex gap-x-6">
          <div className="hidden lg:flex gap-x-2">
            <FullLogo />
          </div>

          <Image
            src={"/assets/logo-bytebank.png"}
            alt="Bytebank Logo"
            width={90}
            height={40}
            className="hidden md:block lg:hidden"
            priority
          />
          <div className="flex-col ml-3 gap-x-1 hidden md:block">
            <Link href="">
              <GhostButtonGreenTxt>About Us</GhostButtonGreenTxt>
            </Link>
            <Link href="">
              <GhostButtonGreenTxt>Services</GhostButtonGreenTxt>
            </Link>
          </div>
        </div>

        <div className="flex gap-x-2 md:hidden">
          <FullLogo />
        </div>

        <div className="hidden md:flex gap-x-4">
          <GreenButtonBlackTxt onClick={() => setIsAbrirContaOpen(true)}>
            Open Account
          </GreenButtonBlackTxt>

          <ModalSignUp
            isOpen={isAbrirContaOpen}
            close={() => setIsAbrirContaOpen(false)}
          />

          <BlackButtonGreenTxt onClick={() => setIsLoginOpen(true)}>
            Sign In
          </BlackButtonGreenTxt>

          <ModalLogin
            isOpen={isLoginOpen}
            close={() => setIsLoginOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
