import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full h-screen min-w-full min-h-screen max-w-full overflow-x-hidden overflow-y-auto">
      <div className="w-full flex flex-col items-center justify-start p-3">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
