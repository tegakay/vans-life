import {useParams} from 'react-router-dom'
import  { useState, useEffect } from "react";


type vanType = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  };

export const VanDetail = () => {
    const params = useParams()
    let [van, setVan] = useState<vanType>();
 

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("xxxy", json);
        setVan(json);
      });
  }, [params.id]);

 
  return (
    <div className="van-detail-container">
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>
                {van.type}
            </i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
  )
}
