import Modal from './modal/Modal';
import Loader from './loader/Loader';
import ImageGallery from './imagegallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Button from './button/Button';
import Searchbar from './searchbar/Searchbar';

const API_KEY = '42343056-d970fc336103e47429fc1ac41';

export const App = () => {
  function fetchAPI() {
    fetch(
      `https://pixabay.com/api/?q=sex&safesearch=true&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(data => data.json())
      .then(pic => console.log(pic));
  }
  fetchAPI();
  return (
    <div>
      <Searchbar></Searchbar>
      <Loader></Loader>
      <ImageGallery></ImageGallery>
      <ImageGalleryItem></ImageGalleryItem>
      <Button></Button>
    </div>
  );
};
