import { useOutletContext } from "react-router-dom"


export const HostVanphotos = () => {
  const { currentVan }:{currentVan:any} = useOutletContext()
  return (
    <img src={currentVan.imageUrl} className="host-van-detail-image" />
  )
}
