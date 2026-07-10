import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return <h2>ホームページ</h2>;
}

const Profile = () => {
  return <h2>プロフィール</h2>;
}

const Contact = () => {
  return <h2>お問い合わせ</h2>;
}

const NotFound = () => {
  return <h2>ページが見つかりません</h2>;
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/profile">プロフィール</Link>
        <Link to="/contact">お問い合わせ</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
