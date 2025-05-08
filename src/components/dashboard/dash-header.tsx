"use client"
import logo from "@/public/assets/logo-bytebank.png"
import logoSmall from "@/public/assets/logo-bytebank-small.png"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/src/components/shadcn/sheet"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../shadcn/button"
import { Menu } from "lucide-react"
import { useBreakpoint } from "@/src/utils/usebreakpoint"
import { useState } from "react"

export default function DashHeader() {

  const { isMobile, isTablet, isDesktop } = useBreakpoint()

  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-petroleum">
      <div className="container mx-auto flex h-24 items-center justify-between bg-amber-700 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* {isMobile && (
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
                  <GhostButtonGreenTxt
                  >
                    Sobre
                  </GhostButtonGreenTxt>
                </Link>
                <Link href="">
                  <GhostButtonGreenTxt
                  >
                    Serviços
                  </GhostButtonGreenTxt>
                </Link>
              </div>
            </div>

            <div className="flex gap-x-2">

              <GreenButtonWhiteTxt
                onClick={() => setIsAbrirContaOpen(true)}
              >
                Abrir Conta
              </GreenButtonWhiteTxt>

              <ModalSignUp isOpen={isAbrirContaOpen} close={() => setIsAbrirContaOpen(false)} />

              <BlackButtonGreenTxt
                onClick={() => setIsLoginOpen(true)}
              >
                Já tenho conta
              </BlackButtonGreenTxt>

              <ModalLogin isOpen={isLoginOpen} close={() => setIsLoginOpen(false)} />

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
                <GhostButtonGreenTxt
                >
                  Sobre
                </GhostButtonGreenTxt>
              </Link>
              <Link href="">
                <GhostButtonGreenTxt
                >
                  Serviços
                </GhostButtonGreenTxt>
              </Link>
            </div>
          </div>

          <div className="flex gap-x-2">

            <GreenButtonWhiteTxt
              onClick={() => setIsAbrirContaOpen(true)}
            >
              Abrir Conta
            </GreenButtonWhiteTxt>

            <ModalSignUp isOpen={isAbrirContaOpen} close={() => setIsAbrirContaOpen(false)} />

            <BlackButtonGreenTxt
              onClick={() => setIsLoginOpen(true)}
            >
              Já tenho conta
            </BlackButtonGreenTxt>

            <ModalLogin isOpen={isLoginOpen} close={() => setIsLoginOpen(false)} />

          </div>
          </>
        )} */}

      </div>
    </header>
  )
}
