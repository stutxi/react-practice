import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ProfileCard />
      </div>
    </RecoilRoot>
  );
}

export default App;
