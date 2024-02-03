import React from 'react'
import { useSelector } from 'react-redux'

export default function Weather() {
  const datat = useSelector(state => state.data)
  const isLoading = useSelector(state => state.isLoading)
  const formatdate = (val) => {
    const timestamp = val;
    const date = new Date(timestamp * 1000);
    const h = date.getHours()
    const m = date.getMinutes()
    if (m < 10) {
      return `${h}:0${m}`
    }
    return `${h}:${m}`
  }
  const formatdegre = (val) => {
    return (val - 273.15).toFixed(2)
  }
  const handleReload = () => {
    console.log("reaload");
  }

  return (
    <>
      <div className='p-5 backdrop-blur-sm  rounded mt-5 border text-center'>
        {(isLoading) ? <div className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#5E5E5E" className="bi bi-arrow-clockwise  animate-spin" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg></div> : (datat.temp !== undefined) ? <div className='lg:flex block  '>
            <div className='lg:max-w-[50%] lg:ml-[35px] max-w-[100%]'>
              <div className='flex  justify-center'>
                <div className='block'>
                  <h6 className='flex'> {datat.city}, {datat.country} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mt-[3px] ml-2" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg></h6>
                  <h6 onClick={handleReload} className='flex justify-center'>{formatdate(datat.time)}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5E5E5E" className="bi bi-arrow-clockwise corsur-pointer mt-[4px] ml-2  hover:animate-spin" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                  </svg></h6>
                  <h6 className='font-bold '>{datat.statu}</h6>
                </div>
              </div>
              <div className='flex justify-center p- lg:p-10 min-w-[100%]'>
                <img src={`https://openweathermap.org/img/wn/${datat.icon}@2x.png`} alt="test" width='100px' height='auto' />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-cloud-moon" viewBox="0 0 16 16">
                <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" />
                <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
              </svg> */}
              </div>
              <div className='flex justify-center'>
                <h1>{formatdegre(datat.temp)} °C</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-thermometer-half mt-[4px] ml-2" viewBox="0 0 16 16">
                  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415" />
                  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1" />
                </svg>
              </div>
              <div className='flex justify-center my-5 lg:my-0'>
                <hr className='w-[100px] md:hidden ' />
              </div>
            </div>
            <div className='lg:max-w-[50%] lg:ml-[150px] xl:ml-[250px] md:my-auto max-w-[100%]'>
              <div className='block md:flex justify-center max-w-[100%]'>
                <div className='flex mb-2 md:mb-0 justify-center'>
                  <div className='border flex flex-col justify-center rounded p-3 ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sunrise" viewBox="0 0 16 16">
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                      </svg>
                    </h6>
                    <p className='font-medium text-semi-gray sm:text-[18px] text-[14px] '>{formatdate(datat.sunrise)}</p>
                  </div>
                  <div className='border flex flex-col justify-center rounded p-3 ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sunset" viewBox="0 0 16 16">
                      <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                    </svg></h6>
                    <p className='font-medium text-semi-gray sm:text-[18] text-[16px] '>{formatdate(datat.sunset)}</p>
                  </div>
                </div>
                <div className='flex mb-2 md:mb-0 justify-center'>
                  <div className='border flex flex-col justify-center rounded  ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'>
                      <img className='max-w-none' src="img/pressure.svg" alt="pressure" />
                    </h6>
                    <p className='font-medium text-semi-gray sm:text-[18] text-[16px]  '>{datat.pressure} hPa</p>
                  </div>
                  <div className='border flex flex-col justify-center rounded p-3 ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud" viewBox="0 0 16 16">
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                    </svg></h6>
                    <p className='font-medium text-semi-gray sm:text-[18px] text-[16px] '>{datat.cloud} %</p>
                  </div>
                </div>
                <div className='flex mb-2 md:mb-0 justify-center'>
                  <div className='border flex flex-col justify-center rounded p-3 ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'>
                      <img src="img/humidity.svg" alt="humidity" />
                    </h6>
                    <p className='font-medium text-semi-gray sm:text-[18px] text-[16px]  '>{datat.humidity} %</p>
                  </div>
                  <div className='border flex flex-col justify-center rounded p-0 ml-4 sm:w-[100px] w-[75px] sm:h-[100px] h-[75px]  '>
                    <h6 className='flex justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
                      </svg></h6>
                    <p className='font-medium text-semi-gray sm:text-[18px] text-[16px]  '>{datat.wind}m/s</p>
                  </div>
                </div>
              </div>
            </div>
          </div> : <span>select a city !!</span>
        }
      </div>
    </>

  )
}

