import React from 'react'
import useFonts from './useFonts'
import { useGoogleFonts } from "@flayyer/use-googlefonts"

// make a function called FontList which will take props,
// then it will define a variable called fonts, which performs useFonts with
// props.sort passed to it.
const FontList = props => {
  const fonts = useFonts(props.sort)

  const arrayer = []
  fonts.forEach(thing => {
    arrayer.push({
      family: thing.family,
      styles: [400]
    })
  })

  useGoogleFonts(arrayer)

  return (
    <div className='card'>
      {fonts.map((font, index) => (
        <a
          href={`https://fonts.google.com/specimen/${font.family.replace(
            ' ',
            '+'
          )}`}
          target="_blank"
          rel="noreferrer"
          className='card__item'
          key={index}
          style={{fontFamily: font.family}}
        >
          {font.family}
        </a>
      ))}
    </div>
  );
};

export default FontList;
