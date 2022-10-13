import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'; 
const Home: NextPage = () => {
  const [isActiveThemeDarkOrLight, setIsActiveThemeDarkOrLight] = useState<boolean>(false);

  interface IProps {
    isActiveThemeDarkOrLight: boolean,
  }

  const GlobalStyles = createGlobalStyle<IProps>`
    ${props => props.isActiveThemeDarkOrLight ? `
      body {
        background-color: white
      }
    ` : `
      body {
        background-color: #202124
      } 
    `}
  `;

  return (
    <>
      <Head>
        <title>Dark Mode | Home</title>
      </Head>
      <GlobalStyles isActiveThemeDarkOrLight={isActiveThemeDarkOrLight}/>
      <div className="btn-theme">
        <input onClick={() => console.log(isActiveThemeDarkOrLight)} onChange={(event) => setIsActiveThemeDarkOrLight(event.target.checked)} type="checkbox" id="btn-checkbox" />
        <label className='label' htmlFor="btn-checkbox">
          <img src="https://i.postimg.cc/qqQgHzYh/image-removebg-preview-2022-10-13-T154928-853.png" alt="Sol" />
          <img src="https://i.postimg.cc/SxM1Z8HK/image-removebg-preview-2022-10-13-T154724-825.png" alt="Lua" />
          <div className="ball"></div>
        </label>
      </div>
    </>
  )
}

export default Home
