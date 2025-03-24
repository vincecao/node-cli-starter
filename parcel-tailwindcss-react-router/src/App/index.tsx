import React, { memo } from "react";
import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../util/useScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App(): ReactElement {
  useScrollToTop();
  return (
    <Main>
      <Header />
      <Outlet />
      <Footer />
    </Main>
  );
}

export default memo(App);
