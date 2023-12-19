import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import "../SideBar/side-bar-style.css"

export const SingleList = (props: any) => {
    const { classPathName, pageLink, classDropdownStates, icone, hideSpanClass, linkName, } = props;
    const pathname = usePathname();

    return (
        <div className={clsx('noSideBarList',
            { 'active': pathname?.startsWith(`${classPathName}`) },
            {
                'display-none': classDropdownStates
            })}>
            <Link href={pageLink} className="nav-link">
                <i className={`bi ${icone}`}></i>
                <span className={`${hideSpanClass}`}>{linkName}</span>
            </Link>
        </div>
    );
}
