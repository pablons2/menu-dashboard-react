"use client"
import React, {useEffect, useState} from "react";
import './side-bar-style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"

const SideBar = () => {

  const pathname = usePathname();

  const [btn_list, setBtn_List] = useState(false);
  const handle_btn_list = () => {
    setBtn_List(!btn_list);
    if (btn_list) {
      setCollapsedStyle('menu-collapse-width');
      setHideSpanClass('');
    } else {
      setCollapsedStyle('menu-collapsed-width');
      setHideSpanClass('display-none');
    }
  };

  const [collapsedStyle, setCollapsedStyle] = useState('menu-collapse-width');
  const [hideSpanClass, setHideSpanClass] = useState('');

  // Array de estados para gerenciar os dropdowns
  const [dropdownStates, setDropdownStates] = useState({
    with_list_2: false,
    with_list_3: false,
  });

  // Função para lidar com a ação de dropdown
  const handle_with_list = (dropdownName) => {
    if (collapsedStyle === 'menu-collapse-width') {
      // Atualiza o estado apenas para o dropdown clicado
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    } else {
      // Altera o estilo e o estado para o dropdown clicado
      setCollapsedStyle('menu-collapse-width');
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <>
    <nav id="sideBar" className={`nav_ navMobile ${collapsedStyle}`}>
        <div id="headerSideBar">
          <button id="button-toggle" onClick={handle_btn_list}>
            <i className={clsx('bi', {'bi-list': btn_list, 'bi-x': !btn_list})}></i>
            <span className={`${hideSpanClass}`}><b>Menu</b></span>
          </button>
        </div>

        <div id="bodySideBar">

          <div className={clsx('noSideBarList', { 'active': pathname === '/' })}>
            <Link href="#" className={`nav-link`}><i className="bi bi-house-door"></i><span className={`${hideSpanClass}`}>Página
            Inicial</span></Link>
          </div>


          <div className={clsx('noSideBarList', { 'active': pathname === '/cadastro' })}>
            <Link href="/cadastro" className="nav-link"><i className="bi bi-file-earmark-text"></i><span className={`${hideSpanClass}`}>Cadastro</span></Link>
          </div>


          <div className={clsx('noSideBarList', { 'active': pathname === '/configuracoes' })}>
            <Link href="/configuracoes" className="nav-link"> <i className="bi bi-gear"></i><span className={`${hideSpanClass}`}>Configurações</span></Link>
            </div>

            <div className={`withSideBarList`} onClick={() => handle_with_list('with_list_2')}>
            <div className="nav-link">
              <i className="bi bi-pencil"></i>
              <span className={`${hideSpanClass}`}>Nível 2 <i className={clsx('bi', {'bi-caret-right-fill': !dropdownStates.with_list_2, 'bi-caret-down-fill': dropdownStates.with_list_2})}></i></span>
            </div>
            {dropdownStates.with_list_2 && (
              <ul className={` ul ${dropdownStates.with_list_2 ? '' : 'display-none'}`}>
                <li> <Link href="#" className="nav-link">Opção 1 n2 </Link> </li>
                <li> <Link href="#" className="nav-link">Opção 2 n2 </Link> </li>
                <li> <Link href="#" className="nav-link">Opção 3 n2 </Link> </li>
              </ul>
            )}
          </div>

          <div className={`withSideBarList`} onClick={() => handle_with_list('with_list_3')}>
            <div className="nav-link">
              <i className="bi bi-pencil"></i>
              <span className={`${hideSpanClass}`}>Nível 3 <i className={clsx('bi', {'bi-caret-right-fill': !dropdownStates.with_list_3, 'bi-caret-down-fill': dropdownStates.with_list_3})}></i></span>
            </div>

            <ul className={` ul ${dropdownStates.with_list_3 ? '' : 'display-none'}`}>
              <li> <Link href="#" className="nav-link">Opção 1 n3 </Link> </li>
              <li> <Link href="#" className="nav-link">Opção 2 n3</Link> </li>
              <li> <Link href="#" className="nav-link">Opção 3 n3</Link> </li>
            </ul>
          </div>
        </div>

        <div id="footerSideBar">

          <Link href="#" className="nav-link"><i className="bi bi-info-circle-fill"></i><span className={`${hideSpanClass}`}>  Inf. do Sistema  </span></Link>

        </div>

      </nav>
    </>)
}

export default SideBar;
