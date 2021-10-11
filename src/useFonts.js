import { useState, useEffect } from 'react'
import axios from 'axios'

// our developer api key.
const API_KEY = require('./apikey.json').API_KEY


// create a constant function that takes a sort parameter.
const useFonts = sort => {
  // useState hook for setting fonts var.
  const [fonts, setFonts] = useState([])
  // run useEffect. why?
  // because we need to make a request, but only when sort property changes.
  // [sort] tells useFonts to look for fonts to change, and on that
  // it will refresh.
  useEffect(() => {
    // async function containing a res variable.
    const getFonts = async () => {
    // res will wait for axios to get that url and return a response.
    // and when it does.
    const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=${sort}`)
    // take that res object, extract data.items[0:300]
    // and perform setFonts on it.
    // which is just fonts = res.data.items[0:300]
    setFonts(res.data.items.slice(0, 300))
    // now fonts will be set to an array of font objects.
    }
    getFonts()
  }, [sort])
  // console.log(fonts);
  // and we just want to return that list.
  return fonts
}
// export useFonts, expecting to pass it a sort prop.
export default useFonts
