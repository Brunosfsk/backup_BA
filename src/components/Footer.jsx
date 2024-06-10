function Footer() {
  return (
    <div className="bg-secondary py-4 text-white h-48 flex flex-col justify-around items-center">
      <div className="flex justify-around w-full">
        <div>
          <h4 className="font-bold">Redes Sociais</h4>
        </div>
        <div>
          <h4 className="font-bold">Sobre</h4>
        </div>
        <div>
          <h4 className="font-bold">Contato</h4>
          <p>(11) 0000-000</p>
          <p>(11) 0000-000</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm">Todos direitos reservados Bairro Ativo®</p>
      </div>
    </div>
  );
}

export default Footer;
