import React from 'react'
import * as Styled from './style';

function Footer() {
  return (
    <Styled.ContainerFooter>
        
        <Styled.ContainerConteudo>

        <div><h4>Redes Sociais</h4></div>
        <div><h4>Sobre</h4></div>
        <div>
          <h4>Contato</h4>
          <p>(11) 0000-000</p>
          <p>(11) 0000-000</p>
        </div>
        
        </Styled.ContainerConteudo>

        <Styled.ContainerDireitos>
            Todos direitos reservados Bairro Ativo®
        </Styled.ContainerDireitos>

    </Styled.ContainerFooter>
  )
};


export default Footer;