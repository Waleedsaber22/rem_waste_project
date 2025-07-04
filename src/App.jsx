import "./App.css";
import StepView from "./features/steps/components/StepView";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout currentStep={1}>
      <StepView />
    </Layout>
  );
};

export default App;
