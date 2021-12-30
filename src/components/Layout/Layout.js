import Head from "next/head"
import React from "react"
import {StyledMainContent} from "./styles";
import styles from "../../styles/Home.module.css"
import AppHeaderBar from "../AppHeaderBar/AppHeaderBar";
import {SideBar} from "../SideBar/SideBar";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.navbar}>
        <AppHeaderBar title={props.pageTitle}/>  
      </header>
      <StyledMainContent>
        <SideBar />
        <main className={styles.main}>
          {props.children}
        </main>
      </StyledMainContent>
      <footer className={styles.footer} />
    </div>
  )
}
