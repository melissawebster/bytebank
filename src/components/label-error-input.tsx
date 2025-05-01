"use client";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, ReactElement, useId, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  subLabel?: string | ReactElement;
  helper?: string;
  hidden?: boolean;
  inputSufixClassname?: string;
  inputSufix?: string | React.ReactElement;
  inputPrefixClassname?: string;
  inputPrefix?: string | React.ReactElement;
  labelClassName?: string;
  inputClassName?: string;
  helperclassName?: string;
  displayPassword?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      displayPassword = false,
      value,
      defaultValue,
      inputClassName: inputclassname,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const id = useId();

    const hiddenClass = props.hidden ? "hidden" : "";
    const errorHighlight = props.helper ? "ring-red-600 border-red-600" : "";

    return (
      <div
        className={twMerge(
          "flex flex-col w-full",
          props.className,
          hiddenClass
        )}
      >
        <div className="flex">
          {props.label && (
            <label
              htmlFor={id}
              className={twMerge(
                "block text-base leading-4 font-medium text-gray-900 pl-1 pb-2",
                props.labelClassName
              )}
            >
              {props.label}
            </label>
          )}

          {props.subLabel && (
            <label
              id={id}
              className={twMerge(
                "block leading-4 text-xs text-gray-900 pl-1 pb-2",
                props.labelClassName
              )}
            >
              {props.subLabel}
            </label>
          )}
        </div>
        <div className="w-full flex gap-1 ">
          {props.inputPrefix && (
            <span
              className={twMerge(
                "flex flex-col-reverse pb-[2px] mr-0.5 text-base",
                props.inputPrefixClassname
              )}
            >
              {props.inputPrefix}
            </span>
          )}

          <div className="relative w-full">
            <input
              {...props}
              type={type === "password" && showPassword ? "text" : type}
              value={value === null ? undefined : value}
              defaultValue={defaultValue === null ? undefined : defaultValue}
              id={id}
              ref={ref}
              className={twMerge(
                "block border disabled:bg-transparent border-gray-300 rounded text-gray-900" +
                  "focus:ring-blue-600 focus:border-blue-600 w-full h-[38px] px-2.5",
                inputclassname,
                errorHighlight
              )}
            />
            {displayPassword && type === "password" && !showPassword && (
              <Eye
                className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-50"
                onClick={() => setShowPassword(true)}
              />
            )}
            {displayPassword && type === "password" && showPassword && (
              <EyeOff
                className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-50"
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
          {props.inputSufix && (
            <span
              className={twMerge(
                "flex flex-col-reverse pb-[2px] ml-0.5 text-base",
                props.inputSufixClassname
              )}
            >
              {props.inputSufix}
            </span>
          )}
        </div>
        {props.helper?.trim() && (
          <p
            id={id}
            className={twMerge(
              "block mb-2 text-sm font-medium text-red-500",
              props.helperclassName
            )}
          >
            {props.helper.trim()}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
