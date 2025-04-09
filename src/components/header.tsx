"use client"
import logo from "@/public/assets/logo-bytebank.png"
import logoSmall from "@/public/assets/logo-bytebank-small.png"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/src/components/shadcn/sheet"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./shadcn/button"
import { Menu } from "lucide-react"
import { BlackButton, GhostButton, GreenButton } from "./buttons"
import { useBreakpoint } from "../utils/usebreakpoint"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { isMobile, isTablet, isDesktop } = useBreakpoint()

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 bg-black"}
    >
      <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[90vw] mx-auto flex items-center justify-between h-16 px-4">

        {isMobile && (
          <>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="focus:outline-none">
                <Menu className="h-15 w-15" color="#FFF" />
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
            </Sheet>

            <Image
              src={logo}
              alt="Bytebank Logo"
              className="h-8"
              priority
            />
          </>
        )}

        {isTablet && (
          <>
            <div className="flex flex-row items-center">
              <Image
                src={logoSmall}
                alt="Bytebank Logo"
                className="h-8"
                priority
              />
              <div className="flex ml-3 gap-x-1">
                <Link href="">
                  <GhostButton
                  >
                    Sobre
                  </GhostButton>
                </Link>
                <Link href="">
                  <GhostButton
                  >
                    Serviços
                  </GhostButton>
                </Link>
              </div>
            </div>

            <div className="flex gap-x-2">
              <GreenButton
              >
                Abrir Conta
              </GreenButton>
              <BlackButton
              >
                Já tenho conta
              </BlackButton>
            </div>
          </>
        )}

        {isDesktop && (
          <>
          <div className="flex flex-row items-center">
            <Image
              src={logo}
              alt="Bytebank Logo"
              className="h-8"
              priority
            />
            <div className="flex ml-3 gap-x-1">
              <Link href="">
                <GhostButton
                >
                  Sobre
                </GhostButton>
              </Link>
              <Link href="">
                <GhostButton
                >
                  Serviços
                </GhostButton>
              </Link>
            </div>
          </div>

          <div className="flex gap-x-2">
            <GreenButton
            >
              Abrir Conta
            </GreenButton>
            <BlackButton
            >
              Já tenho conta
            </BlackButton>
          </div>
          </>
        )}

        {/* <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/login">
            <Button size="sm" className="bg-indigo-700 hover:bg-indigo-700/90 text-white">
              Admin Area
            </Button>
          </Link>
        </nav> */}

      </div>
    </header>
  )
}
