'use client';
import { BackButton } from '@/app/components/BackButton';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="container mx-auto" style={{ background: 'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)', height: '100vh', padding: '50px 20px 50px 20px' }}>
      <div className="header flex items-center" style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
        <BackButton />
      </div>

      <div style={{ padding: '10px', marginTop: '30px'}}>
        <RegisterForm/>
      </div>

      
      
    </div>
  );
};

export default RegisterPage;
