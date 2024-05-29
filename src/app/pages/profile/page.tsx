'use client';
import { BackButton } from "@/app/components/BackButton";
import ProfileForm from "@/app/components/ProfileForm";
import ThreeDots from "@/app/components/ThreeDotsMenu";
import { useEffect, useState } from "react";

const ProfilePage: React.FC = () => {

    const [username, setUserName] = useState('');

    useEffect(()=> {
        const userData = localStorage.getItem('user_data');
        const parsedUserData = (JSON.parse(userData != null ? userData : ''));
        setUserName(parsedUserData.userData.email);
        console.log(parsedUserData);
      })

    return (
        <div className="container mx-auto" style={{ background: 'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)', height: '100vh', padding: '50px 20px 50px 20px' }}>
            <div className="header flex items-center" style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                <BackButton />
                <p style={{marginRight: '100px', marginLeft: '70px'}}>@{username}</p>
                <div>
                    
                </div>
                <ThreeDots />
                    
                
            </div>
            
            <div style={{ padding: '10px', marginTop: '0px'}}>
                <ProfileForm/>
            </div>

            
            
        </div>
    )
}

export default ProfilePage