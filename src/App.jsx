import { Outlet } from "react-router-dom";
function App() {
  return (
    <section className="max-w-6xl mx-auto font-poppins">
      <Outlet />
    </section>
  );
}

export default App;
