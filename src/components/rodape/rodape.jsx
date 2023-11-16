import React from 'react'
import Link from 'next/link';

export default function Rodape() {
  return (
    <footer id="footerStyle" >
      <p className='conteudoFooter'>Entre em contato conosco</p>
      <p className='conteudoFooter' >Quer saber mais sobre os Devs por trás do projeto? Clique no botão abaixo e confira</p>
      <div>
        <Link href="/link/sobrenos">
        <button id="BotaoSobrenos">Sobre nós</button>
        </Link>
      </div>
      <div id="integrantes">
        <p className="infos">Felipe Rodrigues Franco de Oliveira - RM 552101 - 1TDS-B</p>
        <p className="infos">Murilo Ribeiro Valério da Silva - RM 550858 1TDSB</p>
        <p className="infos">Rm 551831 Vitor da Silva Pereira 1TDSPV</p>
        <p className="infos">Rafael Minoro Itokazo - RM 99988 - 1TDSS</p>
        <p className="infos">Eduardo Moura Batageli - RM - 1TDSS</p>
      </div>
    </footer>
  );
}