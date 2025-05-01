import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import { Fragment } from "react"
import ilustracaoSignUp from "@/public/assets/ilustracao-signup.svg"
import { X } from "lucide-react"
import Image from "next/image"
import { BlackTitle } from "./text-styles";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./label-error-input";
import { Button } from "./shadcn/button";


const signUpZodSchema = () =>
  z.object({
    nome: z.string().trim().min(1, 'Dado incorreto. Revise e digite novamente.'),
    email: z.string().trim().min(1, 'Dado incorreto. Revise e digite novamente.'),
    senha: z.string().email().trim().min(1, 'Dado incorreto. Revise e digite novamente.'),
    termos: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos." }),
    }),
  });

  type SignUpFormSchema = z.infer<
  ReturnType<typeof signUpZodSchema>
>;

interface ModalSignUpProps {
    isOpen: boolean;
    close: () => void;
}

export default function ModalSignUp({isOpen, close} : ModalSignUpProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    reValidateMode: "onChange",
    resolver: zodResolver(signUpZodSchema()),
    defaultValues: { nome: undefined, email: undefined, senha: undefined },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
      <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <button
                onClick={close}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <Image
                src={ilustracaoSignUp}
                alt="Ilustracao Sign Up Cadastro"
                className="mt-8"
              />

              <DialogTitle className="text-lg font-medium leading-6 text-gray-900">
                <BlackTitle>Preencha os campos abaixo para criar sua conta corrente!</BlackTitle>
              </DialogTitle>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col justify-center"
              > 

                <Input
                  label='Nome'
                  helper={errors.nome?.message}
                  {...register("nome")}
                />

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

                <label>
                  <input type="checkbox" {...register("termos")} />
                  Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.
                </label>
                {errors.termos && <p style={{ color: "red" }}>{errors.termos.message}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#ff5031] hover:bg-[#D74328] text-white cursor-pointer"
                >
                  Criar conta
                </Button>

              </form>

            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
  </Transition>
  );
}