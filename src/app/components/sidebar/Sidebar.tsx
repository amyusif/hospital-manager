"use client"
// components/Sidebar.js
import React, { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [isExpanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <div className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.toggleBtn} onClick={toggleSidebar}>
          ☰
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.tab}>
          <i className={styles.icon}>Icon1</i>
          <span className={styles.tabName}>Tab 1</span>
        </div>
        <div className={styles.tab}>
          <i className={styles.icon}>Icon2</i>
          <span className={styles.tabName}>Tab 2</span>
        </div>
        {/* Add more tabs as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
