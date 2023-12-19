import clsx from "clsx";
import Link from "next/link";
import React from 'react';
import { usePathname } from "next/navigation";
import { DropdownProvider, useDropdown } from '../DropdownContext';
import "../SideBar/side-bar-style.css"

export const DropList = (props: any) => {
    const { classPathName, classDropdownStates, icone, hideSpanClass, pathNameItem, pathNameLink } = props;
    const { dropdownStates, toggleDropdown } = useDropdown();
    const pathname = usePathname();

    return (
        <DropdownProvider>
            <div className={clsx('withSideBarList', { 'display-none': classDropdownStates }, { 'active': pathname?.startsWith(`${classPathName}`) },)} onClick={() => toggleDropdown(classPathName)}>
                <div className="nav-link">
                    <i className={`bi ${icone}`}></i>
                    <span className={`${hideSpanClass}`}>{pathNameItem} <i className={clsx('bi', { 'bi-caret-right-fill': !dropdownStates[classPathName], 'bi-caret-down-fill': dropdownStates[classPathName] })}></i></span>
                </div>
                {dropdownStates[classPathName] && (
                    <ul className={`ul ${dropdownStates[classPathName] ? '' : 'display-none'}`}>
                        {listProps.map((item: any, index: number) => (
                            <li key={index} className={clsx({ 'active': pathname?.startsWith(`${item.pathName}`) })}>
                                <Link href={item.pageLink} className="nav-link">{item.pathName}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </DropdownProvider>
    );
}
