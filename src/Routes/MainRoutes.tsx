import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Component/00-Header/header";
import Footer from "../Component/01-Footer/footer";

import Home from "../Pages/0-Home/Home";
import About from "../Pages/02-About/About";
import Properties from "../Pages/01-Properties/proPerties";
import Contact from "../Pages/04-Contact/Contact";
// import Contact from "../Pages/Contact/Contact";

// import BlogView from "../Component/Blogs/BlogView";
// import BlogsAll from "../Component/Blogs/BlogsAll";
// import Achievements from "../Pages/Achievements/Achievements";
// import AchievementsAll from "../Component/Achievements/AchievementsAll";
// import AchievementView from "../Component/Achievements/AchievementView";
// import Feedback from "../Component/Feedback/Feedback";

const Mainroutes: React.FC = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proPerties" element={<Properties />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/achievements" element={<Achievements />} />
          <Route path="/blogs-all" element={<BlogsAll />} />
          <Route path="/blog-view/:id/:title" element={<BlogView />} />

          <Route path="/achievements-all" element={<AchievementsAll />} />
          <Route path="/achievement-view" element={<AchievementView />} />

          <Route path="/feedback" element={<Feedback />} /> */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default Mainroutes;