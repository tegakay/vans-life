import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type vanType = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

export const Vans = () => {
  let [vans, setVans] = useState<vanType[]>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    //fetch("https://mocki.io/v1/2effbba6-22b5-485f-a579-94a642b72d82")
      fetch('/api/vans')
      .then((response) => response.json())
      .then((json) => {
        console.log("check", json);
        setVans(json.vans);
        setisLoading(false);
      });
  }, []);

  let vanData = vans?.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className="van-tile">
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore Van Options</h1>
      {!isLoading && <ul className="van-list"> {vanData}</ul>}
      {isLoading && <h2>Loading ...</h2>}
    </div>
  );
};
