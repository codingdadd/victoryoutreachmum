import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    const token = data.session?.access_token;

    if (token) {
      localStorage.setItem('token', token);
      navigate('/admin'); // ✅ Redirect after login
    } else {
      alert(data.error || 'Login failed');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm p-8 rounded-2xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 rounded-xl bg-[#e0e0e0] border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-700 rounded-xl bg-[#e0e0e0] border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={login}
              className="w-full py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
          <p className="text-gray-600 text-lg">
            Access your dashboard and manage your journey. Your presence empowers transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
