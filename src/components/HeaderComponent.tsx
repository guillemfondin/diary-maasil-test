import React, { Component } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const HeaderComponent = () => {
	const router = useRouter();
	return (
		<div className="row nav-bar">
			<div className="logo-content">
				<Link href="/">
					<div className="logo">
					</div>
				</Link>
			</div>
			<div className="menus-content">
				<ul className="menus">
					<li><a href="#">Qui <br /> sommes-nous ?</a></li>
					<li className="menu-div"></li>
					<li><a href="#">Comprendre le <br /> CITD</a></li>
					<li className="menu-div"></li>
					<li><Link href="/actualite"><a className={router.pathname == "/actualite" ? "active" : ""} >Actualités</a></Link></li>
					<li className="menu-div"></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderComponent
