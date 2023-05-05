import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './HomePage.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import notesData from '../../data.json';

export default function HomePage() {
  const [greetText, setGreetText] = useState('');
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('default', { weekday: 'long' });
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if (currentHour < 12) setGreetText('Good Morning!');
    else if (currentHour < 18) setGreetText('Good Afternoon!');
    else setGreetText('Good Evening!');
  }, []);

  return (
    <div className="app flex">
      <Sidebar />
      <div className="app-main">
        <header className="header w-100 flex align-center">
          <div className="container w-100">
            <section className="header-content flex align-center justify-between text-white py-3">
              <article className="greetings">
                <h3 className="fw-6">{greetText}</h3>
              </article>
              <article className="date">
                <span className="text-uppercase fs-13 fw 4">{date}</span>
              </article>
            </section>
          </div>
        </header>
        <div className="notes-wrapper py-4 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
