import Switch from "@frontity/components/switch";
import { DatePicker } from "antd";
import antdGlobalStyles from "antd/dist/antd.css";
import { connect, css, Global, Head, styled } from "frontity";
import React from "react";
import Header from "./header";
import List from "./list";
import Loading from "./loading";
import PageError from "./page-error";
import Post from "./post";
import Player from "./player/player";

const Theme = ({ state }) => {
  const videoYT = {
    playlist: undefined,
    clip: {
      title: "YouTube video",
      url: "https://www.youtube.com/watch?v=bSIc5pBMKN8",
      chapters: [
        { start: 0, title: "Wstęp i modlitwa" },
        {
          start: 1217,
          title:
            "Gdzie i kiedy po raz pierwszy pada zapowiedź przyjścia Mesjasza poprzez kobietę?"
        },
        {
          start: 2221,
          title: "Czy rola kobiet w Piśmie Świętym jest umniejszona?"
        },
        { start: 2558, title: "Na czym polega błogosławieństwo Marii?" },
        {
          start: 3525,
          title:
            "W jaki sposób Jezus podchodzi do dzieci, prawa głosu kobiet oraz jaką tajemnice ujawnia Samarytance?"
        },
        {
          start: 4520,
          title:
            "Jak Jezus podchodzi do wdów i jak pewna wdowa staje się wzorem ekonomii Królestwa?"
        },
        {
          start: 5062,
          title:
            'Co Jezus miał na myśli używając zwrotu "ta córka Abrahama", uzdrawiając kobietę w synagodze?'
        },
        {
          start: 6126,
          title:
            "Dlaczego Jezus staje w obronie kobiety cudzołożnej i co pokazuje, pisząc palcem po ziemi?"
        },
        {
          start: 6688,
          title:
            "Jak Jezus zawstydza Szymona faryzeusza w jego domu, wskazując postępowanie grzesznicy?"
        },
        {
          start: 7462,
          title:
            "Jaki dobry uczynek spełnia kobieta wylewając olejek nardowy na głowę Jezusa?"
        },
        {
          start: 7860,
          title:
            "Jak Jezus odnosił się to tematu menstruacji? Kobieta cierpiąca na upływ krwi, córka Jaira, córka Labana"
        },
        { start: 9701, title: "Jak Jezus odnosi się do małżeństwa i rozwodu?" },
        {
          start: 10125,
          title: "W jaki sposób kobiety zarządzają dobrami materialnymi?"
        },
        { start: 11510, title: "Koniec" }
      ]
    }
  };

  const videoMP4 = {
    playlist: undefined,
    clip: {
      title: "Hosted video",
      url:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4",

      chapters: [
        {
          order: 1,
          title: "Rozdział 1",
          start: "00:02:20"
        },
        {
          order: 2,
          title: "Rozdział 1",
          start: "00:02:20"
        }
      ]
    }
  };

  const response2 = {
    clip: undefined,
    playlist: [
      {
        order: 1,
        end: "00:02:20",
        title: "Clip 1",
        start: "00:02:20",
        url: "youtbe.com/ahfalsfgl"
      },
      {
        order: 2,
        end: "00:02:20",
        title: "Clip 2",
        start: "00:02:20",
        url: "youtbe.com/ahfalsfgl"
      }
    ]
  };

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
      <div style={{ width: 1000, margin: "0 auto" }}>
        <Player {...videoYT} />
        <DatePicker onChange={console.log} />
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
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
