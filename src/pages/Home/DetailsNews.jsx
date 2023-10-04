import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const DetailsNews = () => {
  const { id } = useParams();

  const { setCategoryId } = useContext(AuthContext);

  const news = useLoaderData();

  const [aNews] = news.filter((aNews) => aNews._id === id);

  useEffect(() => {
    setCategoryId(aNews.category_id);
  }, [aNews.category_id, setCategoryId]);

  const { details, thumbnail_url, image_url, title } = aNews;

  return (
    <>
      <Header />
      <Navbar />
      <main className="grid grid-cols-3 max-w-6xl mx-auto gap-6">
        {/* Details News Section */}

        <aside className="col-span-2 space-y-5 my-3">
          <h2 className="text-xl font-semibold leading-7">Dragon News</h2>

          <section className="card card-body card-bordered">
            <figure>
              {image_url ? (
                <img src={image_url} alt={title} />
              ) : (
                <img src={thumbnail_url} alt={title} />
              )}
            </figure>

            <h2 className="card-title font-bold text-xl">{title}</h2>

            <div className="leading-6 text-gray">
              <p className="p-0">{details}</p>
              <Link
                to="/"
                className="text-white text-xl flex items-center max-w-max p-3 my-5 bg-red font-medium">
                <FaArrowLeft /> All news in this category
              </Link>
            </div>
          </section>

          {/* More News Section */}
          <section className="my-5">
            <h2 className="text-xl font-semibold leading-7">Editors Insight</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="card space-y-4">
                <figure>
                  {image_url ? (
                    <img src={image_url} alt={title} />
                  ) : (
                    <img src={thumbnail_url} alt={title} />
                  )}
                </figure>

                <h2 className="card-title font-semibold text-xl">{title}</h2>

                <div className="flex items-center text-gray">
                  <FaCalendar />{" "}
                  <span className="ps-3">{moment().format("MMM D, YYYY")}</span>
                </div>
              </div>
              <div className="card space-y-4">
                <figure>
                  {image_url ? (
                    <img src={image_url} alt={title} />
                  ) : (
                    <img src={thumbnail_url} alt={title} />
                  )}
                </figure>

                <h2 className="card-title font-semibold text-xl">{title}</h2>

                <div className="flex items-center text-gray">
                  <FaCalendar />{" "}
                  <span className="ps-3">{moment().format("MMM D, YYYY")}</span>
                </div>
              </div>
              <div className="card space-y-4">
                <figure>
                  {image_url ? (
                    <img src={image_url} alt={title} />
                  ) : (
                    <img src={thumbnail_url} alt={title} />
                  )}
                </figure>

                <h2 className="card-title font-semibold text-xl">{title}</h2>

                <div className="flex items-center text-gray">
                  <FaCalendar />{" "}
                  <span className="ps-3">{moment().format("MMM D, YYYY")}</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <RightSideNav />
      </main>
    </>
  );
};

// DetailsNews.propTypes = {
//   news: PropTypes.object.isRequired,
// };

export default DetailsNews;
