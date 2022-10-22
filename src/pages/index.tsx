import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'; 

const Home: NextPage = () => {
  const [isActiveThemeDarkOrLight, setIsActiveThemeDarkOrLight] = useState<boolean>(false);

  interface IProps {
    isActiveThemeDarkOrLight: boolean,
  }

  const GlobalStyles = createGlobalStyle<IProps>`
    ${props => props.isActiveThemeDarkOrLight ? `
      :root {
        --bg-color: white;
        --bg-panel: #eeeeee;
        --color-headings: #f3920b;
        --color-text: #333;
      }
    ` : `
      :root {
        --bg-color: #202124;
        --bg-panel: #434343;
        --color-headings: #f3b20b;
        --color-text: #dedede;
      }
    `}
  `;

  return (
    <>
      <Head>
        <title>Dark Mode | Home</title>
      </Head>
      <GlobalStyles isActiveThemeDarkOrLight={isActiveThemeDarkOrLight}/>
      <div className='container'>
        <h1>Title Container</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
        <div className="btn-theme">
          <input onClick={() => console.log(isActiveThemeDarkOrLight)} onChange={(event) => setIsActiveThemeDarkOrLight(event.target.checked)} type="checkbox" id="btn-checkbox" />
          <label className='label' htmlFor="btn-checkbox">
            <Image src="https://i.postimg.cc/qqQgHzYh/image-removebg-preview-2022-10-13-T154928-853.png" alt="Sol" height={20} width={20} />
            <Image src="https://i.postimg.cc/SxM1Z8HK/image-removebg-preview-2022-10-13-T154724-825.png" alt="Lua" height={20} width={20} />
            <div className="ball"></div>
          </label>
        </div>
      </div>
    </>
  )
}

export default Home
