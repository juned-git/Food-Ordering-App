import { Link } from "react-router-dom";

const ResturanntCard = ({ restaurant }) => {
  return (
    <Link to={"/restaurant/" + restaurant.info.id} >
        <div className="md:content-center lg:w-60 my-4 mx-1 bg-pink-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-full">
          <img
            className="rounded-t-lg lg:w-64 md:w-full h-40 "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant.info.cloudinaryImageId
            }
            alt="Restaurant Image"
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {restaurant.info.name}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {restaurant.info.cuisines.slice(0, 2).join(", ") + "..."}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {restaurant.info.avgRating} stars
            </p>
          </div>
        </div>
    </Link>
  );
};

export default ResturanntCard;
