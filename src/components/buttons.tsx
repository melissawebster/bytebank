import { Button } from "./shadcn/button";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const GreenButtonWhiteTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-green-500 hover:bg-green-600 text-white transition-colors cursor-pointer", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)

export const BlackButtonGreenTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-black text-green-500 transition-colors cursor-pointer border border-green-500", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)

export const GhostButtonGreenTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("text-green-500 hover:bg-transparent hover:text-green-300 transition-colors cursor-pointer", props.className)}
    onClick={props.onClick}
    variant="ghost"
  >
    {props.children}
  </Button>
)

export const BlackButtonWhiteTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-black text-white transition-colors cursor-pointer", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)

export const TranspButtonBlackTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-transparent text-black transition-colors cursor-pointer border-2 border-black", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)

export const OrangeButtonWhiteTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-[#ff5031] hover:bg-[#D74328] text-white cursor-pointer", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)

export const PetroleumButtonWhiteTxt = (props: ButtonProps) => (
  <Button 
    className={twMerge("bg-petroleum text-white cursor-pointer", props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
)