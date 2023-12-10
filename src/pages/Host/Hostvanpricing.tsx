import { useOutletContext } from "react-router-dom";

export const Hostvaninfo = () => {
  const { currentVan }:{currentVan:any} = useOutletContext()
  return (
      <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
  )
};
