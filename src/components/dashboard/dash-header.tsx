"use client"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/src/components/shadcn/sheet"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "../shadcn/button"


export default function DashHeader() {

  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const menuItems = ['Início', 'Transferências', 'Investimentos', 'Outros serviços']
  const menuItemStyle = 'p-3' //improve later, hover wasnt working at all

  return (
    <header className="sticky top-0 z-50 w-full bg-petroleum h-[96px] flex flex-col">

      <div className="container max-w-screen-xl mx-auto flex h-full items-center justify-between px-4 sm:px-6">
        <div className="hidden md:block"></div> 

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              className="focus:outline-none h-[60px] w-[60px] !p-0"
            >
              <Menu 
                className="!h-[40px] !w-[40px]" 
                color="#ff5031" 
              /> 
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[50%] bg-pearl-green">
          
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col mt-8">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={'/'} 
                  className={menuItemStyle}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center text-sm gap-4">
          <div className="hidden md:block text-white">Joana da Silva Oliveira</div>
          <Image 
            src="/assets/avatar.png" 
            alt="avatar"
            className="mr-[20px]"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  )
}
