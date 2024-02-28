import Banner from '../banner/Banner';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import ExperienceTimeline from '../experienceTimeline/ExperienceTimeline';
import Featured from '../featured/Featured';
import Projects from '../projects/Projects';
import Testimonials from '../testimonials/Testimonials';
import WorkProcess from '../workProcess/WorkProcess';

const Main = () => {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>

      <section id="featured">
        <Featured />
      </section>

      <section id="three">
        <WorkProcess />
      </section>

      <section id="four">
        <ExperienceTimeline />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="six">
        <Testimonials />
      </section>

      <section id="seven">
        <Blogs />
      </section>

      <section id="eight">
        <Contact />
      </section>
    </>
  );
};

export default Main;
