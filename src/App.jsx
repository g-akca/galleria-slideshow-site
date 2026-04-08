import Header from "./components/Header";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <div className="text-base leading-base text-grey-400">
      <Header />

      <main className="px-8 py-6 tablet:px-13.5 tablet:py-10.5 desktop:p-10">
        <GallerySection />
      </main>
    </div>
  )
}

export default App;