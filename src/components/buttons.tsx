import { Button } from "./shadcn/button";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const GreenButtonBlackTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-lime-green hover:bg-green-600 dark transition-colors cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const BlackButtonGreenTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-dark-transp lime-green cursor-pointer border border-white",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const GhostButtonGreenTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "lime-green hover:bg-transparent cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
    variant="ghost"
  >
    {props.children}
  </Button>
);

export const WhiteButton = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-blue-100 font-light h-[44px] hover:bg-blue-100 cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
    variant="ghost"
  >
    {props.children}
  </Button>
);





