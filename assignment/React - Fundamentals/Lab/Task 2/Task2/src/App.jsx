import PlaylistCard from "./PlaylistCard";
import ProductCard from "./ProductCard";
import VideoList from "./VideoList";
function App() {
  return (
    <div>
      <PlaylistCard
        name="Top Bollywood Hits"
        creator="Spotify India"
        songCount={50}
      />
      <ProductCard
      image="https://via.placeholder.com/180"
      title="Apple iPhone 16"
      price={79999}
    />
     <VideoList />
    </div>
  );
}

export default App;