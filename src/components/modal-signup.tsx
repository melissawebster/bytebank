import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { WhiteTitle } from "./text-styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./label-error-input";
import { GreenButtonBlackTxt } from "./buttons";
import { modalClass, modalWrapClass } from "./shared";

export const labelError = "Invalid input. Please check and re-enter.";

const signUpZodSchema = () =>
  z.object({
    name: z.string().trim().min(1, labelError),
    email: z.string().trim().min(1, labelError).email(labelError),
    password: z.string().trim().min(1, labelError),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms." }),
    }),
  });

type SignUpFormSchema = z.infer<ReturnType<typeof signUpZodSchema>>;

interface ModalSignUpProps {
  isOpen: boolean;
  close: () => void;
}

export default function ModalSignUp({ isOpen, close }: ModalSignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    reValidateMode: "onChange",
    resolver: zodResolver(signUpZodSchema()),
    defaultValues: { name: undefined, email: undefined, password: undefined },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <div className="fixed inset-0 bg-black/50 z-40" />
        <div className={modalWrapClass}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className={modalClass} data-testid="signup-modal">
              <button
                onClick={close}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-[50%] aspect-[310/140] mx-auto">
                <Image
                  src="/assets/icon-open-account.svg"
                  alt="sign up illustration"
                  fill
                  className="object-contain"
                />
              </div>

              <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
                <WhiteTitle>
                  Fill in the fields below to create your account!
                </WhiteTitle>
              </DialogTitle>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-y-2 justify-center mt-4"
              >
                <Input
                  label="Name"
                  helper={errors.name?.message}
                  {...register("name")}
                />

                <Input
                  label="E-mail"
                  helper={errors.email?.message}
                  {...register("email")}
                />

                <Input
                  label="Password"
                  helper={errors.password?.message}
                  {...register("password")}
                />

                <div className="space-y-8 mt-2">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-white">
                      <input
                        type="checkbox"
                        {...register("terms")}
                        className="w-5 h-5 border border-green-500 rounded-sm"
                      />
                      <label htmlFor="termos">
                        I have read and acknowledge the terms of how my data is
                        processed as described in the bank&rsquo;s Privacy
                        Policy.
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-xs">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
              <GreenButtonBlackTxt
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block"
              >
                Create account
              </GreenButtonBlackTxt>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
