
export default function NavH() {
  const menuItems = ['Início', 'Transferências', 'Investimentos', 'Outros serviços']

  return (
    <div className="w-[90%] hidden md:flex lg:hidden flex-row justify-between">
      {menuItems.map((item) => (
          <div className="p-4">{item}</div>
      ))}
    </div>
  )
}