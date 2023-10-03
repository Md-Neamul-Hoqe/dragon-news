import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import DetailsNews from "./DetailsNews";

const Home = () => {
  const [detailsNews, setDetailsNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setDetailsNews(data));
  }, []);

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside>
          <LeftSideNav />
        </aside>
        <aside className="col-span-2">
          {detailsNews.map((news) => (
            <DetailsNews news={news} key={news.id} />
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
