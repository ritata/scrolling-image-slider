import "./styles.css";
import Carousel from "./Carousel.js";

export default function App() {
  const banners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="App">
      <Carousel sliders={banners} />
    </div>
  );
}
