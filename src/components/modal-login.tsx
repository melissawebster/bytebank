import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import { Fragment } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { BlackTitle } from "./text-styles";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./label-error-input";
import { GreenButtonWhiteTxt } from "./buttons"


const loginZodSchema = () =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, 'Dado incorreto. Revise e digite novamente.')
      .email('Dado incorreto. Revise e digite novamente.'),
    senha: z
      .string()
      .trim()
      .min(1, 'Dado incorreto. Revise e digite novamente.'),
  });
  

  type SignUpFormSchema = z.infer<
  ReturnType<typeof loginZodSchema>
>;

interface ModalLoginProps {
    isOpen: boolean;
    close: () => void;
}

export default function ModalLogin({isOpen, close} : ModalLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    reValidateMode: "onChange",
    resolver: zodResolver(loginZodSchema()),
    defaultValues: { email: undefined, senha: undefined },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <div className="fixed inset-0 bg-black/50 z-40" />
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className="relative w-full max-w-xl transform rounded-xl space-y-6 min-h-screen bg-gray-50 p-6 md:px-14 text-left align-middle shadow-xl transition-all">
              <button
                onClick={close}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-2/3 aspect-[333/267] mx-auto mt-8">
                <Image
                  src="/assets/ilustracao-login.svg"
                  alt="Ilustração Sign Up Cadastro"
                  fill
                  className="object-contain"
                />
              </div>

              <DialogTitle className="text-lg font-medium leading-6 text-gray-900 w-fit mx-auto">
                <BlackTitle>Login</BlackTitle>
              </DialogTitle>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-y-3 justify-center"
              >
                <Input
                  label='E-mail'
                  helper={errors.email?.message}
                  {...register("email")}
                />

                <Input
                  label='Senha'
                  helper={errors.senha?.message}
                  {...register("senha")}
                />

                <a href="/" className="text-xs text-green-600 underline">Esqueci a senha!</a>
 
                <GreenButtonWhiteTxt
                  type="submit"
                  disabled={isSubmitting}
                  className="mx-auto block mt-4"
                >
                  Criar conta
                </GreenButtonWhiteTxt>

              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}