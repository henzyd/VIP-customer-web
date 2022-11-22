import React from "react";
import styling from "./demo.module.css";
import checkmark from "./assets/checkmark.png";
import { Footer, Navbar } from "components/general";
import useScreenSize from "hooks/useScreenSize";

const Demo = () => {
  const { grid_container } = styling;
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;
  return (
    <>
      <Navbar mobile={mobile} tablet={tablet} />
      <main>
        <section className={grid_container}>
          <div>
            <h1>
              Live Demo of <strong> Axe API VIP </strong> recognition software
            </h1>
          </div>
          <div>
            <article>
              <h2>Try Out A Live Demo</h2>
              <p>
                Fill in the information below with a VIP’s details and hit
                analyze or choose Advanced options to customize the
                identification process
              </p>
              <form>
                <label>
                  FirstName <span>*</span>
                  <input type="text" required />
                </label>
                <label>
                  LastName <span>*</span>
                  <input type="text" required />
                </label>
                <label>
                  Email Address
                  <input />
                </label>
                <label>
                  Gender
                  <input type="text" />
                </label>
                <label>
                  Career/Industry
                  <input type="text" />
                </label>
                <label>
                  Country
                  <input type="text" />
                </label>
                <article>
                  <button type="submit">Analyse</button>
                  <span>Advanced options</span>
                </article>
              </form>
            </article>
          </div>
          <div>
            <h2>
              See why companies trust AXE API to identify high profile
              personalities, gain their loyalty, and encourage customer
              retention.
            </h2>
            <p>
              Try out Axe API with any VIP’s information and see how it performs{" "}
            </p>
            <ul>
              <li>
                <img src={checkmark} />
                Automatic VIP level tagging and categorization with relevant
                keyword extraction
              </li>
              <li>
                <img src={checkmark} />
                Real-time data collection so that you can make decisions on how
                to improve high ranking customer satisfaction levels.
              </li>
              <li>
                <img src={checkmark} />
                Automatic customer profiling methods and processes so teams can
                focus on what matters the most
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer mobile={mobile} tablet={tablet} />
    </>
  );
};
export default Demo;
