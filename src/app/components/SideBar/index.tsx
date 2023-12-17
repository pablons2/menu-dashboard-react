import React from "react";
import './side-bar-style.css'
const SideBar = ()=>{
    return (<>
        <nav id="sideBar" className="nav_ navMobile">

<div id="headerSideBar">
  <button id="button"><i className="bi bi-x"></i><span className=""><b>Menu</b></span></button>
</div>
<div id="bodySideBar">

  <div className="noSideBarList active "><a href="#"><i className="bi bi-house-door"></i><span className="">Página
        Inicial</span></a></div>


  <div className="noSideBarList  "><a href="#"><i className="bi bi-file-earmark-text"></i><span className="">Cadastro</span></a></div>

  <div className="noSideBarList  "><a href="#"> <i className="bi bi-gear"></i><span className="">Configurações</span></a></div>
    
  <div className="withSideBarList"><a href="#"><i className="bi bi-pencil"></i><span className="">Nível 2 <i
          className="bi bi-caret-right-fill"></i></span></a>

    <ul className=" ul display-none ">
      <li> <a href="#">Opção 1 n2 </a> </li>
      <li> <a href="#">Opção 2 n2 </a> </li>
      <li> <a href="#">Opção 3 n2 </a> </li>
    </ul>

  </div>

  <div className="withSideBarList classeteste"><a href="#"><i className="bi bi-pencil"></i><span className="">Nível 3 <i
    className="bi bi-caret-right-fill"></i></span></a>

<ul className=" ul display-none ">
<li> <a href="#">Opção 1 n3 </a> </li>
<li> <a href="#">Opção 2 n3</a> </li>
<li> <a href="#">Opção 3 n3</a> </li>
</ul>
</div>




</div>
<div id="footerSideBar">

  <a href="#"><i className="bi bi-info-circle-fill"></i><span className="display-none">  Informações do Sistema  </span></a>

</div>

</nav>
    </>) 
}

export default SideBar;
