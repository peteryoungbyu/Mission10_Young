// Peter Young 1-9
// This app uses an asp.net C# backend api and a react frontend to display data from the bowlers on the Marlins
// and the sharks. This app.tsx renders the components Heading and BowlerList. The Heading gives a description
// and the BowlerList displays the list itself.

import BowlerList from './BowlerList';
import Heading from './Heading';

import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Heading />
      <main className="content-wrap">
        <BowlerList />
      </main>
    </div>
  );
}

export default App;
