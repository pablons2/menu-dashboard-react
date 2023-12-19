"use client"
import React, { useState } from "react";
import './side-bar-style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"
import { SingleList } from "../SingleList";
import { DropdownProvider, useDropdown } from '../DropdownContext'
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
    planejamento: false,
    controle: false,
  });

  // Função para lidar com a ação de dropdown
  const handle_with_list = (dropdownName: keyof typeof dropdownStates) => {
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

      // Toggle hideSpanClass
      setHideSpanClass((prevClass) =>
        prevClass === '' ? 'display-none' : ''
      );
    }
  };

  return (
    <>
      <DropdownProvider>
        <nav id="sideBar" className={`nav_ navMobile ${collapsedStyle}`}>
          <div id="headerSideBar">
            <button id="button-toggle" onClick={handle_btn_list}>
              <i className={clsx('bi', { 'bi-list': btn_list, 'bi-x': !btn_list })}></i>
              <span className={`${hideSpanClass}`}><b>Menu</b></span>
            </button>
          </div>

          <div id="bodySideBar">

            <SingleList
              classPathName={'/paginainicial'}
              pageLink={"/paginainicial"}
              classDropdownStates={dropdownStates.planejamento || dropdownStates.controle}
              icone={'bi-house-door'}
              hideSpanClass={`${hideSpanClass}`}
              linkName={"Página inicial"}
            />

            <div className={clsx('withSideBarList', { 'display-none': dropdownStates.controle }, { 'active': pathname?.startsWith('/planejamento') },)} onClick={() => handle_with_list('planejamento')}>
              <div className="nav-link">
                <i className="bi bi-table"></i>
                <span className={`${hideSpanClass}`}>Planejamento <i className={clsx('bi', { 'bi-caret-right-fill': !dropdownStates.planejamento, 'bi-caret-down-fill': dropdownStates.planejamento })}></i></span>
              </div>
              {dropdownStates.planejamento && (
                <ul className={` ul ${dropdownStates.planejamento ? '' : 'display-none'}`}>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/planejamento-estrategico') })}> <Link href="#" className="nav-link">Planejamento estratégico </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/perspectivas') })}> <Link href="#" className="nav-link">Perspectivas </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/objetivos-estrategicos') })}> <Link href="#" className="nav-link">Objetivos estratégicos </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/objetivos-de-qualidade') })}> <Link href="#" className="nav-link">Objetivos de qualidade </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/planos-de-acao') })}> <Link href="#" className="nav-link">Planos de ação </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/acoes') })}> <Link href="#" className="nav-link">Ações </Link> </li>
                </ul>
              )}
            </div>

            <SingleList
              classPathName={'/documentos'}
              pageLink={"/documentos"}
              classDropdownStates={dropdownStates.planejamento || dropdownStates.controle}
              icone={'bi-folder2'}
              hideSpanClass={`${hideSpanClass}`}
              linkName={"Documentos"}
            />
            <SingleList
              classPathName={'/projetos'}
              pageLink={"/projetos"}
              classDropdownStates={dropdownStates.planejamento || dropdownStates.controle}
              icone={'bi-pencil-square'}
              hideSpanClass={`${hideSpanClass}`}
              linkName={"Projetos"}
            />
            <div className={clsx('withSideBarList', { 'display-none': dropdownStates.planejamento }, { 'active': pathname?.startsWith('/controle') },)} onClick={() => handle_with_list('planejamento')}>
              <div className="nav-link">
                <i className="bi bi-graph-up-arrow"></i>
                <span className={`${hideSpanClass}`}>Controle <i className={clsx('bi', { 'bi-caret-right-fill': !dropdownStates.planejamento, 'bi-caret-down-fill': dropdownStates.planejamento })}></i></span>
              </div>
              {dropdownStates.planejamento && (
                <ul className={` ul ${dropdownStates.planejamento ? '' : 'display-none'}`}>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/sala-de-controle') })}> <Link href="#" className="nav-link">Sala de controle </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/ocorrencias') })}> <Link href="#" className="nav-link">Ocorrências </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/acoes-de-ocorrencias') })}> <Link href="#" className="nav-link">Ações de ocorrências </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/graficos') })}> <Link href="#" className="nav-link">Gráficos </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/pesquisas') })}> <Link href="#" className="nav-link">Pesquisas </Link> </li>
                  <li className={clsx({ 'active': pathname?.startsWith('/planejamento/controle-de-riscos') })}> <Link href="#" className="nav-link">Controle de riscos </Link> </li>
                </ul>
              )}
            </div>

            <SingleList
              classPathName={'/relatorios'}
              pageLink={"/relatorios"}
              classDropdownStates={dropdownStates.planejamento || dropdownStates.controle}
              icone={'bi-clipboard-data'}
              hideSpanClass={`${hideSpanClass}`}
              linkName={"Relatórios"}
            />

            <SingleList
              classPathName={'/pesquisas'}
              pageLink={"/pesquisas"}
              classDropdownStates={dropdownStates.planejamento || dropdownStates.controle}
              icone={'bi-check-square'}
              hideSpanClass={`${hideSpanClass}`}
              linkName={"Pesquisas"}
            />

          </div>

          <div id="footerSideBar">

            <Link href="#" className="nav-link"><i className="bi bi-info-circle-fill text-blue-500"></i><span className={`${hideSpanClass}`}>  Inf. do Sistema  </span></Link>

          </div>

        </nav>
      </DropdownProvider>
    </>)
}

export default SideBar;
