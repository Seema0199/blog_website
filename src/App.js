import Header from "./components/Header";
import Blogs from "./components/Blogs";
import pagination from "./components/pagination";

export default function App() {
  return (
    <div>
      <Header />
      <Blogs />
      <pagination />
    </div>
  );
}
