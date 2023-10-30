import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="hero" id="home">
      <nav>
        <h2 className="logo">
          Convert<span>ify</span>
        </h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-text-id">About</a>
          </li>
          <li>
            <a href="#more_conversions">More Conversions</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <a href="#" className="btn">
          Donate <i className="fa-solid fa-heart" />
        </a>
      </nav>
      <div className="content">
        <h4>Hey there! </h4>
        <h1>
          {" "}
          Convert Word to <span>PDF</span>
        </h1>
        <h3>Upload your file right here</h3>
        <input type="file" className='bg-blue-300 p-5 border border-blue-300 hover:bg-transparent' id="upload-file" >
          Choose File
          </input>
        {/* <button  id="upload_button" className="upload-button">
          Choose File
        </button> */}
        <span id="custom-text">No file chosen, yet.</span>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            #custom-text{\n                color:white;\n            }\n        "
          }}
        />
      </div>
      <img src="/images/feature image.png" className="feature-image" />
    </div>
    {/*About Section*/}
    <section className="about" id="about-text-id">
      <div className="main">
        <img src="/images/about_us.png" alt="" className="about_us" />
        <div className="about-text">
          <h2>About Us</h2>
          <h5>
            Designers &amp; <span>Developers</span>
          </h5>
          <p>
            {" "}
            We have begun our adventure into developing responsive and innovative
            websites.
          </p>
          <form>
            <a className="button-three" href="https://linktr.ee/josephjohnphilip">
              Let's Talk
            </a>
          </form>
        </div>
      </div>
    </section>
    {/*Education*/}
    <div className="service">
      <div className="title" id="more_conversions">
        <h2>More Conversions</h2>
      </div>
      <div className="box">
        <div className="card">
          <i className="fa-solid fa-file-pdf" />
          <h5> Convert Word to PDF</h5>
          <div className="para">
            <p>
              Convert Word files to PDF for free and quickly using an efficient
              and dependable algorithm.{" "}
            </p>
            <p>
              <br />
              <br />
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <a className="button" href="/index.html">
                Click Here
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-file-word" />
          <h5> Convert PDF to Word </h5>
          <div className="para">
            <p>
              Convert Word files to PDF for free and quickly using an efficient
              and dependable algorithm.
            </p>
            <p>
              <br />
              <br />
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <a className="button" href="/pdftoword.html">
                Click Here
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <i className="fa-solid fa-file-lines" />
          <h5> Convert PPTX to PDF</h5>
          <div className="para">
            <p>
              Convert PPTX files to PDF for free and quickly using an efficient
              and dependable algorithm.
            </p>
            <p>
              <br />
              <br />
              <br />
            </p>
            <p style={{ textAlign: "center" }}>
              <a className="button" href="/pptxtopdf.html">
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*Contact Me*/}
    <div className="contact">
      <p>Find Us On</p>
      <a className="button-two" href="#">
        {" "}
        Follow us! It's Free!{" "}
      </a>
    </div>
    {/*footter start*/}
    <footer>
      <p>Team Convertify</p>
      <p> To find about more about us! Click this Links below</p>
      <div className="social" id="contacts">
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-square-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
      </div>
      <p className="end"> CopyRight by Team Convertify</p>
    </footer>
  </>
  
  )
}
