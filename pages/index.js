import Head from "next/head";
import Footer from "../components/footer.jsx";
import Menu from "../components/menu.jsx";
import imgBalanca from "../../ceratti/images/escritório.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rogério Ceratti Advocacia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main>
        <div className="welcome">
          <div className="welcomeImg">
            <img alt="logo" src={imgBalanca} style={{ width: "100%" }} />
          </div>
          <div className="welcomeTxt">
            <blockquote>
              <p style={{ textAlign: "justify" }}>
                <strong>
                  <span
                    style={{
                      fontSize: "27px",
                      fontFamily: "Gravity",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Rogério Ceratti
                  </span>
                </strong>
              </p>

              <p style={{ textAlign: "justify" }}>
                <strong>
                  <span
                    style={{
                      fontSize: "27px",
                      fontFamily: "Gravity",
                      color: "rgb(0, 0, 0)",
                    }}
                  ></span>
                </strong>
                <span
                  style={{
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Gravity",
                    fontSize: "17px",
                    textAlign: "justify",
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the f irst true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </span>
              </p>
              <p style={{ textAlign: "justify" }}>
                <span
                  style={{
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Gravity",
                    fontSize: "17px",
                    textAlign: "justify",
                  }}
                >
                  <br />
                </span>
              </p>
              
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
