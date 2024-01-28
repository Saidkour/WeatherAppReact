
import Search from './component/Search'
import Weather from './component/Weather'

function App() {

  return (
    <>
      <div className='relative '>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-primary bg-cover bg-center  h-[100vh] opacity-[0.1] z-[-1]'></div>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-[url("img/bg-img.jpg")] bg-cover bg-center  z-[-2] h-[100vh]'></div>
        {/* <h1 className="text-3xl mb-5  text-center text-primary font-bold underline">
          Hello world!
        </h1> */}
        <div className='container px-2 mx-auto'>
          <Search />
          <Weather />
        </div>
      </div>

    </>
  )
}

export default App
