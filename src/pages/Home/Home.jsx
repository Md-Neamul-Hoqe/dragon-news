import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("1");
  const [news, setNews] = useState([]);
  // const [newsOfTheCategory, setNewsOfTheCategory] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => {
        const theNews = data.filter(
          (news) => news.category_id == activeCategory
        );

        console.log(theNews);
        setNews(theNews);
      });
  }, [activeCategory]);

  const handleActiveCategory = (id) => {
    setActiveCategory(id);
  };
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* left side nav */}
        <aside>
          <LeftSideNav
            activeCategory={activeCategory}
            handleActiveCategory={handleActiveCategory}
          />
        </aside>

        {/* News Container */}
        <aside className="col-span-2">
          <h2 className="text-xl font-semibold ">Dragon News Home</h2>
          {news.map((aNews) => (
            <NewsCard news={aNews} key={aNews._id} />
          ))}
        </aside>

        {/* Right side nev */}
        <aside>
          <RightSideNav />
        </aside>
      </main>
    </>
  );
};

export default Home;
