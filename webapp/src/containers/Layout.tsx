import React from "react";
import { useSelector } from "react-redux";
import classes from "./Layout.module.css";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Nav from "../components/layout/Nav/Nav";
import { IState } from "../store/reducers";

interface IPageContent {
  children: JSX.Element;
}

export default function Layout({ children }: IPageContent): JSX.Element {
  const error = useSelector((state: IState) => state.user.error);

  return (
    <>
      <Nav />
      <main className={classes.MainLayout}>
        <div className={classes.PageContainer}>
          <Header />
          <div className={classes.ErrorContainer}>
            {error ? <p className={classes.ErrorMsg}>{error}</p> : ""}
          </div>
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
