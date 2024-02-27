import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './projects.module.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.tabContainer}>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={styles.tabs}
        >
          <TabList className={styles.tabList}>
            <Tab className={styles.tab}>ALL</Tab>
            <Tab className={styles.tab}>WEB</Tab>
            <Tab className={styles.tab}>APP</Tab>
          </TabList>

          {/* ALL CONTENT */}
          <TabPanel className={styles.tabPanel}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  key={item}
                >
                  <img
                    src="https://images.pexels.com/photos/7088828/pexels-photo-7088828.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </motion.div>
              )
            )}
          </TabPanel>

          {/* WEB CONTENT */}
          <TabPanel className={styles.tabPanel}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={item}
              >
                <img
                  src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </motion.div>
            ))}
          </TabPanel>

          {/* APP CONTENT */}
          <TabPanel className={styles.tabPanel}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={item}
              >
                <img
                  src="https://images.pexels.com/photos/5355731/pexels-photo-5355731.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </motion.div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
