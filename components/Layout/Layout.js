import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import AppHeaderBar from '../../components/AppHeaderBar/AppHeaderBar';
import {SideBar} from '../../components/SideBar/SideBar';
import {StyledMainContent} from './styles';

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
      <footer className={styles.footer}></footer>
    </div>
  )
}
