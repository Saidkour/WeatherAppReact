export const initstate = {
    data: {
        cloud: undefined,
        temp: undefined,
        city: undefined,
        sunrise:undefined,
        sunset:undefined,
        statu: undefined,
        time:undefined,
        wind:undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        icon:undefined,
    },
    isLoading: false
};

export const ReducerCounter = (state = initstate, action) => {
    switch (action.type) {
        case "adddataweather":
            const { clouds, main,dt, name, sys, weather, wind } = action.payload
            console.log(action.payload)
            return {
                ...state, data:{
                    icon:weather[0].icon,
                    cloud: clouds.all,
                    temp: main.temp,
                    city: name,
                    time:dt,
                    wind:wind.speed,
                    statu: weather[0].description,
                    country: sys.country,
                    sunrise:sys.sunrise,
                    sunset:sys.sunset,
                    humidity: main.humidity,
                    pressure: main.pressure
                }
            };
        case "loading": return { ...state, isLoading: action.payload }
        default:
            return state;
    }
};