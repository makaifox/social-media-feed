import {PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://wallpaperaccess.com/full/1338352.jpg" 
        />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/47568863?v=4" />

        <strong> Eu mesmo </strong>
        <span>developper</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size='20'/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}