import { PanCard } from "../../components/PanCard/PanCard"

const Productos = ({panes}) => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {panes?.map(elem=>{
        return(
          <PanCard 
            key={elem.id} 
            elem={elem}
          />
        )
      })}

    </div>
  )
}

export default Productos