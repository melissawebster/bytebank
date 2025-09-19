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
import { labelError } from "./modal-signup";
import { useRouter } from "next/navigation";
import { modalStyle, modalWrapStyle } from "./shared";

const loginZodSchema = () =>
  z.object({
    email: z.string().trim().min(1, labelError).email(labelError),
    password: z.string().trim().min(1, labelError),
  });

type SignUpFormSchema = z.infer<ReturnType<typeof loginZodSchema>>;

interface ModalLoginProps {
  isOpen: boolean;
  close: () => void;
}

export default function ModalLogin({ isOpen, close }: ModalLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    reValidateMode: "onChange",
    resolver: zodResolver(loginZodSchema()),
    defaultValues: { email: undefined, password: undefined },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <div className="fixed inset-0 bg-black/50 z-40" />
        <div className={modalWrapStyle}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className={modalStyle}>
              <button
                onClick={close}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-[50%] aspect-[310/140] mx-auto">
                <Image
                  src="/assets/icon-login.svg"
                  alt="illustration"
                  fill
                  className="object-contain"
                />
              </div>

              <DialogTitle className="text-lg font-medium leading-6 w-fit mx-auto">
                <WhiteTitle>Login</WhiteTitle>
              </DialogTitle>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-y-3 justify-center"
              >
                <Input
                  label="E-mail"
                  helper={errors.email?.message}
                  {...register("email")}
                  classID="text-white"
                />

                <Input
                  label="Password"
                  helper={errors.password?.message}
                  {...register("password")}
                />

                <a href="/" className="text-xs text-green-600 underline">
                  Forgot password
                </a>
              </form>
              <GreenButtonBlackTxt
                // type="submit"
                // disabled={isSubmitting}
                className="mx-auto block mt-4"
                onClick={() => router.push("/dashboard")}
              >
                Go to my dashboard
              </GreenButtonBlackTxt>

            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
