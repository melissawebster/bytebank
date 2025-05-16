"use client"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/src/components/shadcn/sheet"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./shadcn/button"
import { Menu } from "lucide-react"
import { BlackButtonGreenTxt, GhostButtonGreenTxt, GreenButtonWhiteTxt } from "./buttons"
import { useState } from "react"
import ModalSignUp from "./modal-signup"
import ModalLogin from "./modal-login"

export default function Header() {

  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isAbrirContaOpen, setIsAbrirContaOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <header
      className={"fixed top-0 left-0 right-0 z-50 bg-black"}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="focus:outline-none">
            <Menu className="h-15 w-15" color="#00c950" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[50%] bg-black text-green-600">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <nav className="flex flex-col gap-4 mt-8 p-4">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsSheetOpen(false)}
            >
              Sobre
            </Link>  
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsSheetOpen(false)}
            >
              Serviços
            </Link>  

          </nav>
        </SheetContent>
        </Sheet>

        <div className="flex gap-x-6">
          <Image
            src={"/assets/logo-bytebank.png"}
            alt="Bytebank Logo"
            width={146}
            height={32}
            className="h-8 hidden lg:block"
            priority
          />
          <Image
            src={"/assets/logo-bytebank-small.png"}
            alt="Bytebank Logo"
            width={27}
            height={32}
            className="h-8 hidden md:block lg:hidden"
            priority
          />
          <div className="flex-col ml-3 gap-x-1 hidden md:block">
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

        <Image
          src={"/assets/logo-bytebank.png"}
          alt="Bytebank Logo"
          width={146}
          height={32}
          className="h-8 md:hidden"
          priority
        />

        <div className="hidden md:flex gap-x-4">
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
      </div>
    </header>
  )
}
