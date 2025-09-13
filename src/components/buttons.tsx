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

export const BlackButtonWhiteTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-black text-white transition-colors cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const TranspButtonBlackTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-transparent text-black transition-colors cursor-pointer border-2 border-black",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const OrangeButtonWhiteTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-[#ff5031] text-white cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const TransparentButtonOrangeTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-transparent text-red-700 cursor-pointer border-2 border-red-700",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export const PetroleumButtonWhiteTxt = (props: ButtonProps) => (
  <Button
    className={twMerge(
      "bg-petroleum text-white cursor-pointer",
      props.className
    )}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
