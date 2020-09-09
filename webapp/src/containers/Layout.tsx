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
  const user = useSelector((state: IState) => state.user);
  const {
    error,
    currentUser: { email },
  } = user;
  return (
    <>
      <Nav />
      <main className={classes.MainLayout}>
        <div className={classes.PageContainer}>
          <Header email={email} />

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
