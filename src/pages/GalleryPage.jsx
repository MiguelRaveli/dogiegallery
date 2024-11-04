import HomeCards from "../components/HomeCards";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar"
const GalleryPage = () => {
  return (
    <>
      <div>
        <Searchbar/>
        <HomeCards />
        <Pagination />
      </div>
    </>
  );
};

export default GalleryPage;
