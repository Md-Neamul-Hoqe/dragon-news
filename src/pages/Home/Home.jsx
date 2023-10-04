import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import DetailsNews from "./DetailsNews";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("1");
  const [detailsNews, setDetailsNews] = useState([]);
  // const [newsOfTheCategory, setNewsOfTheCategory] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setDetailsNews(data));
  }, []);

  const handleActiveCategory = (id) => {
    setActiveCategory(id);

    setDetailsNews(
      detailsNews.filter((news) => news.category_id === activeCategory)
    );
  };

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <aside>
          <LeftSideNav
            activeCategory={activeCategory}
            handleActiveCategory={handleActiveCategory}
          />
        </aside>
        <aside className="col-span-2">
          {detailsNews.map((news) => (
            <DetailsNews news={news} key={news._id} />
          ))}
        </aside>
        <aside>
          <RightSideNav />
        </aside>
      </section>
    </div>
  );
};

export default Home;
