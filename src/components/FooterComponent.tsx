import React, { Component } from 'react';
const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6 left">
                    <h2>CITD</h2>
                    <h3>Centre Intégré de Traitement de Déchets</h3>
                    <p>ECOSISTE <br /> VERT-LE-GRAND,<br /> 91810 VERT-LE-GRAND <br /><br /> TEL : 01 69 74 23 50</p>
                </div>
                <div className="col-6 ">
                    <div className="right">
                        <div className="logo">
                        </div>
                        <button className="footer-button">
                            Mentions légales
                    </button>
                        <button className="footer-button">
                            Accessibilité
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent