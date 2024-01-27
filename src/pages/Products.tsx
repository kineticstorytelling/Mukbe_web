import DataTable from "../components/DataTable"
import Big from "../assets/images/Jehlyo_bg.png"
import UnitConverter from "../components/UnitConverter"

const Products = () => {
  return (
    <div    
    style={{backgroundImage: `url(${ Big })`}} 
    className='hero mx-auto bg-cover'
    >
      <UnitConverter />
      <DataTable />
    </div>
  )
}

export default Products