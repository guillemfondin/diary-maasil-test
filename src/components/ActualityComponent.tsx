import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NewsAPI } from 'api-service';
import moment from 'moment'
import { useRouter } from 'next/router';

const ActualityComponent = () => {
    const router=useRouter()
    const [actualities, setActualities] = useState([])
    const getOneActuality=(id:any)=>{
        router.push({
            pathname: '/actualite/[pid]',
            query: { aid: id },
          })
    }
    const fetchData = async () => {
        try {
          const result =await NewsAPI.getNews()
          setActualities(result)
        } catch (e) {
          console.log(e);
        }
      };
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="content">
          
            <div className="actuality">
                <img className="img-actuality-home" src="/home-actuality.png" alt=""/>
       
                <ul>
                    <li><Link href="/"><a>Accueil</a></Link></li>
                    <li>//</li>
                    <li><a className="active" href="#">Actualités</a></li>
                </ul>
                {actualities.length>0 && actualities.map((actuality:any)=>{
                    return(

                    <Link as={`/actualite/${actuality.id}`} href={`/actualite/${actuality.id}`}>
                        <div className="actuality-content" key={actuality.id}>
                        <div className="left-content">
                            <img src="/home-img.png" alt=""/>
                        </div>
                        <div className="right-content">
                            <button className="actuality-button">
                                catégorie
                            </button>
                            <h2>{actuality.title}</h2>
                            <p className="description">
                                {actuality.resume}
                                 </p>
                            <p className="date">
                                Date de mise en ligne : {moment(actuality.createdAt).format('DD/MM/YY')}
                            </p>
                           <Link prefetch={false} href={`/actualite/${actuality.id}`}>
                                <button className="actuality-view" onClick={()=>getOneActuality(actuality.id)}>
                                voir l'actualité
                            </button>
                            </Link>
                    </div>
                </div>
                </Link>
                    )
                })}
               
                <div className="pagination">
                    <div className="block active"><span>1</span></div>
                    <div className="block"><span>2</span></div>
                    <div className="block"><span>3</span></div>
                    <div className="block"><span>Suivant</span></div>                
                </div>
               </div>
        </div>
    )
}
export default ActualityComponent