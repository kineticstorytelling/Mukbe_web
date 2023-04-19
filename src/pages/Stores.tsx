import DataTable from "../components/DataTable"
import Big from "../assets/images/Jehlyo_bg.png"

const Stores = () => {
  return (
    <div    
    style={{backgroundImage: `url(${ Big })`}} 
    className='hero mx-auto bg-cover'
    >
        <DataTable />
    </div>
  )
}

export default Stores