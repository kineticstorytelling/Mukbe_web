// import Background from '../assets/images/hero3-1.jpg'
// import '../styles.css'

function Home() {
  return (
    <div 
    // style={{backgroundImage: `url(${ Background })`}} 
    className='hero mx-auto bg-cover '
    >
          <h2 className="text-8xl font-bold m-5">Jehlyo</h2>
          <br />
          <h2 className="text 7x1 text-gray-700 font-semibold m-5">Find the best prices for ingredients at the stores. Never struggle to remember which stores have the most affordable items again. It'!</h2>
          <h3 className="text 5x1 text-gray-700 font-semibold m-5">What would you like to do?</h3>
          <a href="#/items/"><button className='rounded border-2 border-gray-800 p-3 mx-5 hover:bg-gray-800 hover:text-white'>Start a New Session</button></a>
          <a href="#/stores/"><button className='rounded border-2 border-gray-800 p-3 mx-5 hover:bg-gray-800 hover:text-white'>Look at your Store Prices</button></a>
    </div>
  )
}

export default Home