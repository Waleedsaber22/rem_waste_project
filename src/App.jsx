import "./App.css";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout currentStep={1}>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Design Phase</h1>
      <p className="text-gray-700">
        Here you can start putting together wireframes, UX flows, and visual
        direction.
      </p>
    </Layout>
  );
};

export default App;
