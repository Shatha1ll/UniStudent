import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h1>Welcome, {user.first_name}</h1>
      <p>...</p>
    </div>
  );
}

export default Dashboard
