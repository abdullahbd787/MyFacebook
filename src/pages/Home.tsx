import Post from "../component/Post";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import SidebarRight from "../component/SidebarRight";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SidebarRight />
      <Post />
    </div>
  );
};

export default Home;
