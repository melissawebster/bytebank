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
      "btn-lime-style",
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
      "btn-dark-style",
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

export const DashButton = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "font-light lime-green h-[44px] border text-sm py-3 bg-slate-600 hover:bg-slate-700 cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
    variant="ghost"
  >
    {props.children}
  </Button>
);





