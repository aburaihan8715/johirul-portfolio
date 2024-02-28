import Achievements from '../achievements/Achievements';
import Banner from '../banner/Banner';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import ExperienceTimeline from '../experienceTimeline/ExperienceTimeline';
import Featured from '../featured/Featured';
import FunFacts from '../funFacts/FunFacts';
import Pricing from '../pricing/Pricing';
import Projects from '../projects/Projects';
import Teaching from '../teaching/Teaching';
import Testimonials from '../testimonials/Testimonials';
import TrustedBy from '../trustedBy/TrustedBy';
import WorkProcess from '../workProcess/WorkProcess';

const Main = () => {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>

      <section>
        <TrustedBy />
      </section>

      <section id="featured">
        <Featured />
      </section>

      <section id="three">
        <WorkProcess />
      </section>

      <section>
        <Teaching />
      </section>

      <section id="four">
        <ExperienceTimeline />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section>
        <FunFacts />
      </section>

      <section>
        <Achievements />
      </section>

      <section id="six">
        <Testimonials />
      </section>

      <section id="seven">
        <Blogs />
      </section>

      <section>
        <Pricing />
      </section>

      <section id="eight">
        <Contact />
      </section>
    </>
  );
};

export default Main;
