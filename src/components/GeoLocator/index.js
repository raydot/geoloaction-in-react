import React, { useState, useEffect } from 'react'

const GeoLocator = () => {
    const [geoAvailable, setGeoAvailable] = useState(false);
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [errorVar, setErrorVar] = useState("All is well!")
    // const [count, setCount] = useState(0)

    // // Geolocation functions
    // const success = (position) => {
    //     console.log("Success!")
    //     let crd = position.coords;
    //     setLatitude(crd.latitude)
    //     setLongitude(crd.longitude)
    // }

    // const error = (err) => {
    //     setErrorVar(err)
    // }

    const successHandler = position => console.log(position.coord);

    const errorHandler = error => console.error(error.message);

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);


    // Here's your componentDidMount
    useEffect(() => {
        if ("geolocation" in navigator) {
            setGeoAvailable(true)
        } else {
            setGeoAvailable(false)
        }

        // console.log("hello!")
        // navigator.geolocation.getCurrentPosition(success, error)
        // navigator.geolocation.getCurrentPosition((position) => {
        //     setLatitude(position.coords.latitude)
        // })
        // const getPosition = async () => {
        //     console.log("getPosition")
        // try {
        //     const position = await navigator.geolocation.getCurrentPosition()
        //     return(position);
        // } catch (err) {
        //     console.error(err.message);
        // }
        //}

        // getPosition()
        // console.log("GO TIME!")
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log("Hello!")
        //     console.log("Longitude:", position.coords.latitude)
        // })



     
        
    }, [])

    return (
        <div>
            <p>Geolocation {geoAvailable ? "is" : "is not"} available.</p>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <p>Error: {errorVar}</p>
        </div>
    )

}

export default GeoLocator