import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../appwrite-backend/auth";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await login(email, password);
      setSuccess(true);
      // Optionally redirect after login:
      // navigate("/all-items");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 via-indigo-100 to-blue-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-600 text-center">{error}</div>}
          {success && <div className="text-green-600 text-center">Login successful!</div>}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg text-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <button
        onClick={() => navigate("/signup")}
        className="text-violet-600 hover:underline bg-transparent border-none cursor-pointer"
        style={{ background: "none", border: "none", padding: 0 }}
       >
       Sign up
     </button>
     </p>

        </div>
    </div>
  )
}