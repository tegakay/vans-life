import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface vanType{
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export const Van = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState<vanType>();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan.type}`}
                    >
                        {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>
            </div>
        </div>
    </section>
);
};
