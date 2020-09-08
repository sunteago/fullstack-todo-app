import React from "react";
import classes from "./Layout.module.css";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import Nav from "../components/layout/Nav/Nav";

interface IPageContent {
  children: JSX.Element[];
}

export default function Layout({ children }: IPageContent): JSX.Element {
  return (
    <>
      <Nav />
      <main className={classes.MainLayout}>
        <div className={classes.PageContainer}>
          <Header />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
