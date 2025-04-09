import { Button } from "./shadcn/button";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const GreenButton = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-green-500 hover:bg-green-600 text-white transition-colors cursor-pointer", props.className)}
  >
    {props.children}
  </Button>
)

export const BlackButton = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-black text-green-500 transition-colors cursor-pointer border border-green-500", props.className)}
  >
    {props.children}
  </Button>
)

export const GhostButton = (props: ButtonProps) => (
  <Button 
    className={twMerge("text-green-500 hover:bg-transparent hover:text-green-300 transition-colors cursor-pointer", props.className)}
    variant="ghost"
  >
    {props.children}
  </Button>
)