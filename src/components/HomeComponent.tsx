import React, { useState, useEffect } from 'react';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { NewsAPI } from 'api-service';
import Link from 'next/link';

const HomeComponent = () => {
    const [actualities, setActualities] = useState([])
    const fetchData = async () => {
        try {
            const result = await NewsAPI.getNews()
            setActualities(result)
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="content">
            <div className="home">
                <div className="home-content">
                    <div className="description">
                        <p>
                            Les travaux du Centre Intégré de Traitement des Déchets (CITD) ont été engagés depuis le 1er janvier 2020
                        </p>
                    </div>
                    <button className="home-button">Suivre les travaux</button>
                </div>
                <div className="actuality">
                    <h2>Actualités</h2>
                    <div className="row">

                        {actualities.length > 0 && (actualities.slice(0, 3)).map((actuality: any, index) => {
                            return (
                                <div className="col-4" key={actuality.id}>
                                    <img src='/home-img.png' className="home-img" alt="" />
                                    <h2 className="decrih2tion-title">
                                        {actuality.title}
                                    </h2>
                                    <p className="description-content">
                                        {actuality.resume}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="button-actuality">
                        <Link href="/actualite">
                            <button className="home-button">
                                <PlusCircleFill color="#fff" size={25} />
                                <span>Actualités</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="presentation">
                    <h2>Comprendre <br /> le CITD</h2>
                    <div className="presentation-content">
                        <div className="presentation-block">
                            <img src='/home-pres-1.png' alt="" />
                            <h3>Les objectif des travaux</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum explicabo repudiandae necessitatibus sint quae voluptatem consequatur dignissimos, sequi facilis dolore molestiae earum ab. Voluptatibus, non labore. Quis, numquam sint.</p>
                            <button className="presentation-button">voir la video</button>
                        </div>
                        <div className="presentation-block">
                            <img src='/home-pres-2.png' alt="" />
                            <h3>Les objectif des travaux</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum explicabo repudiandae necessitatibus sint quae voluptatem consequatur dignissimos, sequi facilis dolore molestiae earum ab. Voluptatibus, non labore. Quis, numquam sint.</p>
                            <button className="presentation-button">voir la video</button>
                        </div>
                    </div>
                    <div className="button-presentation">
                        <button className="button">
                            <PlusCircleFill color="#fff" size={25} />
                            <span>Contenus pédagogiques</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeComponent