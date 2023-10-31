import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [type, setType] = useState("word"); // Default to PDF

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Conversion successful");
      } else {
        console.error("Conversion failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="hero" id="home">
        <nav>
          <h2 className="logo">
            Convert<span>ify</span>
          </h2>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about-text-id">About</Link>
            </li>
            <li>
              <Link href="#more_conversions">More Conversions</Link>
            </li>
            <li>
              <Link href="#contacts">Contact</Link>
            </li>
          </ul>
          <Link href="/" className="btn">
            Donate <i className="fa-solid fa-heart" />
          </Link>
        </nav>
        <div className="content">
          <h4>Hey there! </h4>
          <h1>
            {" "}
            <div>
              {type === "pdf" && <span>Convert PDF to Word</span>}
              {type === "word" && <span>Convert Word to PDF</span>}
              {type === "pptx" && <span>Convert PPTX to PDF</span>}
            </div>
          </h1>
          <h3>Upload your file right here</h3>
          <input
            type="file"
            className="file:bg-blue-700 file:rounded-md file:p-3 file:border file:border-blue-300 file:hover:bg-transparent"
            id="upload-file"
            accept=".pdf, .docx, .pptx"
            onChange={handleFileChange}
          />

          <button
            id="upload_button"
            className="p-2 rounded-sm bg-blue-900"
            onClick={handleConvert}
          >
            Convert
          </button>
          {convertedFile && (
            <div>
              <a
                href={convertedFile}
                download={`converted.${type === "word" ? "docx" : "pdf"}`}
              >
                Download Converted File
              </a>
            </div>
          )}
          <span id="custom-text">No file chosen, yet.</span>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n            #custom-text{\n                color:white;\n            }\n        ",
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
              We have begun our adventure into developing responsive and
              innovative websites.
            </p>
            <form>
              <a
                className="button-three"
                href="https://linktr.ee/josephjohnphilip"
              >
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
                Convert Word files to PDF for free and quickly using an
                efficient and dependable algorithm.{" "}
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <div style={{ textAlign: "center" }}>
                <div
                  onClick={() => {
                    setType("word");
                  }}
                  className="button"
                >
                  Click Here
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-file-word" />
            <h5> Convert PDF to Word </h5>
            <div className="para">
              <p>
                Convert Word files to PDF for free and quickly using an
                efficient and dependable algorithm.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <div style={{ textAlign: "center" }}>
                <div
                  onClick={() => {
                    setType("pdf");
                  }}
                  className="button"
                >
                  Click Here
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-file-lines" />
            <h5> Convert PPTX to PDF</h5>
            <div className="para">
              <p>
                Convert PPTX files to PDF for free and quickly using an
                efficient and dependable algorithm.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <div style={{ textAlign: "center" }}>
                <div
                  onClick={() => {
                    setType("pptx");
                  }}
                  className="button"
                >
                  Click Here
                </div>
              </div>
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
          <Link href="/">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link href="/">
            <i className="fa-brands fa-square-facebook" />
          </Link>
          <Link href="/">
            <i className="fa-brands fa-linkedin" />
          </Link>
        </div>
        <p className="end"> CopyRight by Team Convertify</p>
      </footer>
    </>
  );
}
