'use client';
import { useState } from 'react';
// import { loginValidation } from '../validations/loginValidation';
import { useRouter } from 'next/navigation';
import { loginUser } from '../utils/auth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const validationError = loginValidation(email, password);
    // if (validationError) {
    //   setError(validationError);
    //   return;
    // }
    try {
      const userResponse = await loginUser(email, password);
      if(userResponse) {
        router.push('/pages/profile');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigateToRegister = () => {
    router.push('/pages/register');
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-10">
      <span className="font-bold text-2xl" style={{ width: '99px', height: '29px', top: '158px', left: '41px', gap: '0px', opacity: '0px', marginBottom:'20px', fontSize:'20px', fontStyle:'bold' }}>Login</span>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4" style={{ marginTop: '20px'}}>
      <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <input
            placeholder='Enter Email/Username'
            type="text"
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
            placeholder='Enter password'
            type={passwordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '5px', padding: '10px', width: '320px', color: 'black', background: '#1F4247' }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 focus:outline-none"
          >
            {passwordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15v-2a2 2 0 012-2h0a2 2 0 012 2v2m-4 4v2a2 2 0 002 2h0a2 2 0 002-2v-2m4-10h.01" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17h1M12 12h.01M12 7h.01" />
              </svg>
            )}
          </button>
        </div>


        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-6 relative" style={{ borderRadius: '15px', marginBottom: '10px'}}>
          <button 
            type="submit" 
            // className={`${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`} 
            // disabled={!isFormValid}
            style={{width: '320px', background: 'linear-gradient(108.32deg, #62CDCB 24.88%, #4599DB 78.49%)', padding:'10px', borderRadius: '5px', marginTop: '30px'}}
          >Login</button>

        </div>

        <div className="have-an-account" style={{textAlign: 'center', marginTop: '50px'}}>
          <p style={{fontSize: '12px'}}>No account?<span onClick={navigateToRegister} style={{textDecoration:'underline', color: '#f7d08d'}}> Register Here</span></p>
        </div>
        

      </form>
    </div>
  );
};

export default LoginForm;
