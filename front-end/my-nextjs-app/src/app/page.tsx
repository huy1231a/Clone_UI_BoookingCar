/* eslint-disable @next/next/no-img-element */
import './globals.css'

interface pageProps { }

const Page: React.FC<pageProps> = () => {
  return (
    <>
      <>
        <nav>
          <div className="wrapper">
            <a href="/">
              <div className="logo">
                <img loading="lazy" src="https://www.mioto.vn/static/media/logo-full.ea382559.png" alt="Mioto" />
              </div>
            </a>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times" />
              </label>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/">By Driver</a>
              </li>
              <div className='vetical-line'>
              </div>
              <li>
                <a href="/">Signin</a>
              </li>
              <li className='btn-btn-up'>
                <a href="/">Signup</a>
              </li>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fas fa-bars" />
            </label>
          </div>
        </nav>
      </>

    </>
  )
}

export default Page
