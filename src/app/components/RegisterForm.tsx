'use client';
import { useState } from 'react';
import { registerUser } from '../utils/auth';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password);
    const isPasswordsMatch = password === confirmPassword;
    setIsFormValid(isEmailValid && isPasswordValid && isPasswordsMatch && username !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, username, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-10">
      <span className="font-bold text-2xl" style={{ width: '99px', height: '29px', top: '158px', left: '41px', gap: '0px', opacity: '0px', marginBottom:'20px', fontSize:'20px', fontStyle:'bold' }}>Register</span>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4" style={{ marginTop: '20px'}}>
      <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <input
            placeholder='Enter email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '5px', padding: '10px', width: '320px', color: 'black', background: '#1F4247' }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <input
            placeholder='Create username'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderRadius: '5px', padding: '10px', width: '320px', color: 'black', background: '#1F4247' }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <input
            placeholder='Create password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '5px', padding: '10px', width: '320px', color: 'black', background: '#1F4247' }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <input
            placeholder='Confirm password'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderRadius: '5px', padding: '10px', width: '320px', color: 'black', background: '#1F4247' }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>


        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <button 
            type="submit" 
            className={`${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`} 
            disabled={!isFormValid}
            style={{width: '320px', background: 'linear-gradient(108.32deg, #62CDCB 24.88%, #4599DB 78.49%)', padding:'10px', borderRadius: '5px', marginTop: '30px'}}
          >Register</button>

        </div>

        <div className="have-an-account" style={{textAlign: 'center', marginTop: '50px'}}>
          <p style={{fontSize: '12px'}}>Have an account?<span style={{textDecoration:'underline', color: '#f7d08d'}}> Login Here</span></p>
        </div>
        

      </form>
    </div>
  );
};

export default RegisterForm;
