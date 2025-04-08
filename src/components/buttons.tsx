import { Button } from "./shadcn/button";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const GreenButton = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-green-400 text-white transition-colors", props.className)}
  >
    {props.children}
  </Button>
)