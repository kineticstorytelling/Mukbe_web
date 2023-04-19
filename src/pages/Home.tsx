import Background from '../assets/images/Jehlyo_bg.png'
import '../styles.css'

function Home() {
  return (
    <div 
    style={{backgroundImage: `url(${ Background })`}} 
    className='hero mx-auto my-auto bg-cover'
    >
      <div className="mx-10 p-4 w-2/5 rounded bg-gray-300 bg-opacity-70">
          <h2 className="text-6xl font-semibold m-5 bg-gray-200 bg-opacity-10 max-w-xl">Jehlyo</h2>
          <br />
          <h2 className="text 5x1 text-gray-800 bg-gray-200 bg-opacity-10 m-5 max-w-xl">Find the best prices for ingredients at the stores. Never struggle to remember which stores have the most affordable items again.</h2>
          <h3 className="text 5x1 text-gray-800 bg-gray-200 bg-opacity-10 font-semibold mx-5 max-w-xl">What would you like to do?</h3>
          <a href="#/items/"><button className='hero_btn w-30 h-15 bg-gray-800 hover:bg-gray-500 text-white m-5 py-2 px-4 rounded-lg'>Start a New Session</button></a>
          <a href="#/stores/"><button className='hero_btn w-30 h-15 bg-gray-800 hover:bg-gray-500 text-white m-5 py-2 px-4 rounded-lg'>Look at your Store Prices</button></a>
      </div>
    </div>
  )
}

export default Home