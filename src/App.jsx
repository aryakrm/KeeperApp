import CreateArea from "./Components/CreateArea";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Title" content="Content" />
      <Footer />
    </div>
  );
}

export default App;
