import Switch from "@frontity/components/switch";
import { DatePicker } from "antd";
import antdGlobalStyles from "antd/dist/antd.css";
import { connect, css, Global, Head, styled } from "frontity";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import List from "./list";
import Loading from "./loading";
import PageError from "./page-error";
import Post from "./post";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // console.log(state.source);
  const data = state.source.get(state.router.link);
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

      <HeadContainer>
        <Header />
      </HeadContainer>
      <div style={{ width: 400, margin: "0 auto" }}>
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <DatePicker onChange={console.log} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
        {/**
         * add the Footer component
         * Here we've wrapped it in a FooterContainer
         * component for styling purposes
         */}
        <FooterContainer>
          <div>ChunkCreations &copy; 2021</div>
        </FooterContainer>
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

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;
