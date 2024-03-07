import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile from './components/Profile/Profile';
import userData from './components/Profile/userData.json';

import FrienndList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json'

function App() {

  return (
    <>
      <Profile
        key={userData.id}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FrienndList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
