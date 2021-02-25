import './App.css';
import Profile from './components/Profile/Profile';
import userDB from './db/user.json';
import Statistics from './components/Statistics/Statistics';
import statDB from './db/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsDB from './db/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsDB from './db/transactions.json';

const { name, tag, location, avatar, stats } = userDB;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statDB} />
      <FriendList friends={friendsDB} />
      <TransactionHistory items={transactionsDB} />
    </div>
  );
}

export default App;
