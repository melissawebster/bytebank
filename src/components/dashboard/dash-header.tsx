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
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../shadcn/button";
import { FullLogo, navDashboardItems } from "../shared";


export default function DashHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-transp border-b-3 border-amber-300">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <Link href="/" className="hidden md:flex gap-x-2">
          <FullLogo />
        </Link>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="focus:outline-none h-[60px] w-[60px] !p-0"
            >
              <Menu className="!h-[40px] !w-[40px]" color="#9AFF4A" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[50%] bg-dark-transp border-0 [&>button]:hidden"
          >
            <nav className="flex flex-col gap-4 mt-8 p-4 justify-center">
              <SheetClose asChild>
                <button className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10">
                  <X className="h-5 w-5 text-white" />
                </button>
              </SheetClose>
              <SheetTitle className="hidden">Menu</SheetTitle>
              {navDashboardItems.map((item, index) => (
                <div className="lime-green cursor-pointer text-sm ml-3">
                  {item.name}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center text-sm gap-4">
          <div className="hidden md:block text-white">Joan of Arc</div>
          <Image
            src="/assets/avatar.svg"
            alt="avatar"
            className="mr-[20px]"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
}
