import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function Search() {
  const searchFiled = useRef()
  const [cities, setCities] = useState([])
  const [location, setLocation] = useState(0)
  const dispatch = useDispatch()
  const getdata = () => {
    try {
      dispatch({ type: "loading", payload: true })
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=83845f742218cb8d52cd482a52d94839`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          console.log("Successfuly got data", json);
          const { clouds,dt, main, name, sys, weather, wind } = json
          console.log([main.temp, main.pressure, main.humidity, clouds.all, name, sys.country, weather[0].main])
          dispatch({
            type: "adddataweather",
            payload: {
              clouds,
              main,
              name,
              dt,
              sys,
              weather,
              wind,
            },
          });
          dispatch({ type: "loading", payload: false })
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    catch(error){
        console.error("Error in try block:", error); 
    }
  }


  useEffect(() => {
    console.log(location)
    if (location !== 0) {
      console.log("data is aploaded")
      getdata()
    }
  }, [location])
  const handleSelectChange = (e, value) => {
    if (value !== null) {
      const { lon, lat } = value
      setLocation({
        lon,
        lat,
      })
    }
  }
  const handlechange = (e) => {
    const { value } = e.currentTarget
    if (value.toString().trim().length > 1) {
      try {
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=d57985742c8241da965af8e8e990dabb`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(res => {
            setCities(res.results?.map((data) => {
              const { lat, lon, city, country, formatted } = data;
              return { lat, lon, city, country, formatted };
            }));
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      } catch (error) {
        console.error("Error in try block:", error);
      }
    }
  }
  return (
    <div className="text-center pt-5 block mx-auto">
      <div>
        <Autocomplete
          ref={searchFiled}
          onChange={handleSelectChange}
          renderInput={(params) => {
            return <TextField className="w-[100%] py-3 bg-transparen border border-xl border-semi-black text-[20px] rounded-lg px-5  py-2"
              onChange={handlechange}
              {...params}
              label={"enter your city"} />
          }}
          options={cities || []}
          getOptionLabel={(option) => option.formatted}
          isOptionEqualToValue={(option, value) => option.formatted === value.formatted}
        />
      </div>
      <div className="flex ">
        <button className="p-3 hidden rounded-lg  bg-secondary hover:bg-primary hover:text-semi-white min-w-[100%] text-semi-white mt-3">select</button>
      </div>
    </div>
  )
}
