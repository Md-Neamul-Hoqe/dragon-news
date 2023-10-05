import { useContext, useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const [news, setNews] = useState([]);
  const { categoryId } = useContext(AuthContext);

  useEffect(() => {
    const theNews = data.filter(
      (news) => isNaN(categoryId) || news.category_id == categoryId
    );

    // console.log(theNews, categoryId);
    setNews(theNews);
  }, [categoryId, data]);

  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* left side nav */}
        <aside>
          <LeftSideNav />
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
