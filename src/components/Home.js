import React from 'react';
import styles from "./css/home.module.css"; // Create this CSS module
import Image from 'react-bootstrap/Image';
// import taskListDemo from './assets/images/home/task_list_demo.png'; // Demo image of your task list
// import arrowRight from './assets/icons/arrow_right.svg'; // A simple right arrow icon
import { Link } from 'react-router-dom';

export default function Home() {
    const isLoggedIn = localStorage.getItem('role'); // Or however you manage login state

  return (
    <section id={styles.hero_section}>
      <div id={styles.hero_container}>
        <h1 style={{ marginTop: '40px' }}>Organize Your Learning, Effortlessly with <span>Study Buddy</span> 📚✨</h1>
        <div id={styles.mascot_container}>
          <Image id={styles.study_buddy_mascot} src="/studyingGirl.jpg" alt="Friendly Study Buddy Mascot" fluid priority={true} />
        </div>
        <div id={styles.demo_container}>
          <div id={styles.demo_snippet} onClick={null}>
            {/* <Image id={styles.demo_image} src={taskListDemo} alt="Demo of the Study Buddy task list" fluid priority={true} />
            <Image id={styles.demo_arrow} src={arrowRight} alt="Right arrow" fluid priority={true} /> */}
          </div>
          <h2>Ready to Get Organized?</h2>
          <p>Create tasks, track your progress, and stay on top of your studies.</p>
          <div id={styles.get_started}>
            <Link to="/view-tasks" className={styles.get_started_button} style={{marginTop:'40px'}}>View Your Tasks</Link>
            {/* <p>New to Study Buddy? <Link to="/signup">Sign Up</Link></p>
             */}
              {!isLoggedIn && (
              <p>New to Study Buddy? <Link to="/signup">Sign Up</Link></p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}