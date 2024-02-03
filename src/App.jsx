
import Search from './component/Search'
import Weather from './component/Weather'

function App() {

  return (
    <>
      <div className='relative '>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-primary bg-cover bg-center opacity-[0.1] z-[-1]'></div> */}
        <div style={{ backgroundImage: `url('img/bg-img.jpg')` }} className='absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center  z-[-2] h-[110vh] md:h-[100vh]'></div>
        <div className='container px-5 mx-auto'>
          <Search />
          <Weather />
        </div>
      </div>

    </>
  )
}

export default App
