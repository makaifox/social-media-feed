import { Header } from "./components/header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post  
            author='eu' 
            content="meu bilau de oculos"
            />
          <Post  
            author='shambala' 
            content="irineu"
          />
        </main>
      </div>
   </div>
  )
}