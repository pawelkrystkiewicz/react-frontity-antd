import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";

import { DatePicker, message } from "antd";
import antdGlobalStyles from "antd/dist/antd.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  // console.log(state.source);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={antdGlobalStyles} />
      <Global styles={globalStyles} />

      <HeaderMainPage>AntD + Frontity</HeaderMainPage>

      <div style={{ width: 400, margin: "0 auto" }}>
        <h2>Data from State</h2>
        <p>
          Site Description: <em>{state.frontity.description}</em>
        </p>
        <p>
          Site Title: <em>{state.frontity.title}</em>
        </p>
        {/* <p>
          Some Post Link: <em>{state.source.post[0].link}</em>
        </p>
        <p>
          Some Post Title: <em>{state.source.post[0].title.rendered}</em>
        </p> */}

        <h2>AntD DatePicker Component</h2>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </div>
      </div>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeaderMainPage = styled.h1`
  font-size: 40px;
  font-style: italic;
  width: 400;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;
