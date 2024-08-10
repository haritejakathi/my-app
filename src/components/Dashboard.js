import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.user_firstname || 'User'}!</p>
      <p>Email: {user?.user_email}</p>
      <p>Phone: {user?.user_phone}</p>
      {/* Add more user details or creative elements here */}
    </div>
  );
}

export default Dashboard;
