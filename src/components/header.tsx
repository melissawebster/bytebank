"use client"
import logo from "@/public/assets/logo-bytebank.png"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50"}
    >
      <div className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[90vw] mx-auto flex items-center justify-between h-16 px-4 bg-black">
        <Image
          src={logo}
          alt="Bytebank Logo"
          className="object-contain h-8"
          priority
        />

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/login">
            {/* <Button size="sm" className="bg-indigo-700 hover:bg-indigo-700/90 text-white">
              Admin Area
            </Button> */}
          </Link>
        </nav>

        {/* <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="focus:outline-none">
              <Menu className="h-10 w-10" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8 p-4">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsSheetOpen(false)}
              >
                Home
              </Link>  
              <Link 
                href="/login"
                onClick={() => setIsSheetOpen(false)}
              >  
                <Button size="sm" className="w-1/2 bg-indigo-700 hover:bg-indigo-700/90 text-white">
                  Admin Area
                </Button>
              </Link> 
            </nav>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  )
}
