'use client';
import LeftArrowIcon from "@/app/components/LeftArrowIcon";
import ProfileForm from "@/app/components/ProfileForm";
import ThreeDots from "@/app/components/ThreeDotsMenu";

const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto" style={{ background: 'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)', height: '100vh', padding: '50px 20px 50px 20px' }}>
            <div className="header flex items-center" style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <LeftArrowIcon size="20px"/>
                    <span className="text-lg mb-4 ml-2">Back</span>
                </div>
                <p style={{marginRight: '100px', marginLeft: '70px'}}>@aashish</p>
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