import React from "react";
import './side-bar-style.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";

const SideBar = ()=>{
    return (
    <>
<nav id="sideBar" className="nav_ navMobile">

<div id="headerSideBar">
  <button id="button-toggle"><i className="bi bi-x"></i><span className=""><b>Menu</b></span></button>
</div>

<div id="bodySideBar">

  <div className="noSideBarList active "><Link href="#"><i className="bi bi-house-door"></i><span className="">Página
        Inicial</span></Link></div>


  <div className="noSideBarList  "><Link href="#"><i className="bi bi-file-earmark-text"></i><span className="">Cadastro</span></Link></div>


  <div className="noSideBarList  "><Link href="#"> <i className="bi bi-gear"></i><span className="">Configurações</span></Link></div>
    

  <div className="withSideBarList"><Link href="#"><i className="bi bi-pencil"></i><span className="">Nível 2 <i
          className="bi bi-caret-right-fill"></i></span></Link>

    <ul className=" ul display-none ">
      <li> <Link href="#">Opção 1 n2 </Link> </li>
      <li> <Link href="#">Opção 2 n2 </Link> </li>
      <li> <Link href="#">Opção 3 n2 </Link> </li>
    </ul>

  </div>

  <div className="withSideBarList classeteste"><Link href="#"><i className="bi bi-pencil"></i><span className="">Nível 3 <i
    className="bi bi-caret-right-fill"></i></span></Link>

<ul className=" ul display-none ">
<li> <Link href="#">Opção 1 n3 </Link> </li>
<li> <Link href="#">Opção 2 n3</Link> </li>
<li> <Link href="#">Opção 3 n3</Link> </li>
</ul>
</div>




</div>
<div id="footerSideBar">

  <Link href="#"><i className="bi bi-info-circle-fill"></i><span className="display-none">  Informações do Sistema  </span></Link>

</div>

</nav>
    </>) 
}

export default SideBar;
