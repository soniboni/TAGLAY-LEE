import React, { useState } from 'react';
import '../styles/SignInPage.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data } = await loginUser({ email, password });
      console.log('Login successful:', data);

      // Save token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('type', data.type);

      // Redirect to dashboard
      navigate('/dashboard/dash-articles', {
        state: { firstName: data.firstName, type: data.type },
      });
    } catch (err) {
      console.error('Login failed:', err);

      // Determine error message based on status
      if (err.response) {
        switch (err.response.status) {
          case 401:
            setError('Incorrect password. Please try again.');
            break;
          case 403:
            setError('Your account is inactive. Contact support.');
            break;
          case 404:
            setError('No account found with this email.');
            break;
          default:
            setError(err.response.data?.message || 'Login failed. Please try again.');
        }
      } else {
        setError('Unable to reach server. Check your network.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-hero">
        <div className="auth-hero-badge">Taglay</div>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to manage users and articles.</p>
      </div>

      <div className="auth-card">
        <div className="auth-card-header">
          <h2>Sign in</h2>
          <p className="muted">Use your email and password to continue.</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="button-link primary auth-submit"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          {error && <p className="auth-error">{error}</p>}
        </form>

        <p className="auth-footnote muted">
          By signing in, you agree to our terms.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
