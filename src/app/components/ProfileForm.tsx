/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createProfile, getProfile, updateUserProfile } from '../utils/auth';
import EditPencilIcon from './EditPencilIcon';
import PlusIcon from './PlusIcon';

const ProfileForm: React.FC = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [editAboutState, setAboutEditState] = useState<boolean>(false);
  const [editInterestState, setInterestEditState] = useState<boolean>(false);
  const [aboutState, setAboutState] = useState('');
  const router = useRouter();

  const [username, setUserName] = useState('');


  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [userData, setUserData] = useState('');
  const [interests, setInterests] = useState([]);

  useEffect(()=> {
    const userData = localStorage.getItem('user_data');
    const parsedUserData = (JSON.parse(userData != null ? userData : ''));
    setUserName(parsedUserData.user.username);
    console.log(parsedUserData);
  })

  useEffect(() => {
    getProfile().then((profile) => {
      const profileResponse =  profile;
      setName(profileResponse.displayName);
      setGender(profileResponse.gender);
      // setBio(profileResponse.bio);
      setDob(profileResponse.dob);
      setHoroscope(profileResponse.horoscope);
      setZodiac(profileResponse.zodiac);
      setHeight(profileResponse.height);
      setWeight(profileResponse.weight);
      setInterests(profileResponse.interests);
    });
  })


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, bio);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleClick = () => {
    console.log('clicked')
    // setEditState(!editState);
  };

  const handleAboutEditClick = async () => {
    setAboutEditState(!editAboutState);
    if(editAboutState) {
      const profileResponse = await createProfile(name, gender, dob, horoscope, zodiac, height, weight, interests);
      setName(profileResponse.displayName);
      setGender(profileResponse.gender);
      // setBio(profileResponse.bio);
      setDob(profileResponse.dob);
      setHoroscope(profileResponse.horoscope);
      setZodiac(profileResponse.zodiac);
      setHeight(profileResponse.height);
      setWeight(profileResponse.weight);
      setInterests(profileResponse.interests);

    }
      
      console.log(name, dob, horoscope, zodiac, height, weight);
  }

  const handleInterestEditClick = () => {
    setInterestEditState(!editInterestState)
    router.push('/pages/profile/interest')
  }

  return (
    <div>
      <div className="profile-pic relative h-5 w-5" style={{ background: '#162329', height: '150px', width: '315px', padding: '10px', borderRadius: '5px'}}>
        <div onClick={handleClick}  className="edit-icon absolute top-0 right-0 m-2" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end'}}>
          <EditPencilIcon/>
        </div>
        <p style={{marginTop:'90px', display: 'flex'}}>@{username}</p>

      </div>
      <div className="editable-content">
          <div className="profile-pic absolute h-5 w-5" style={{ background: '#0E191F', height: editAboutState ? '110px' : 'auto', width: '315px', padding: '10px', borderRadius: '5px', marginTop: '20px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <span style={{ fontSize: '12px', position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>About</span>
              <div onClick={handleAboutEditClick}  className="edit-icon absolute top-0 right-0 m-2" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', fontSize: '10px'}}>
                { !editAboutState ? <EditPencilIcon/> : 'Save & Update' }
                
              </div>
            </div>
            { !editAboutState && 
              <>
                <div className="content">
                  <p style={{ marginTop: '50px', display: 'flex', fontSize: '10px', color: '#a3a2a2' }}>Add in your about to help others know you better</p>
                </div>
                <div className="content-available" style={{fontSize: '12px', color: '#818385', lineHeight: '2'}}>
                  <p>Birthday: {dob}</p>
                  <p>Horoscope: {horoscope}</p>
                  <p>Zodiac: {zodiac}</p>
                  <p>Height: {height}</p>
                  <p>Weight: {weight}</p>
                </div>
              </>
            }

            { editAboutState && 
              <div className="edit-dialog" style={{marginBottom: '20px'}}>
                <div className="add-profile" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px'}}>
                  <div className="add-icon" style={{width:'45px', height:'45px',padding: '15px', background: '#2c3438', borderRadius: '15px'}}><PlusIcon /></div>
                  <span style={{fontSize: '10px', marginLeft: '10px'}}>Add image</span>
                </div>
                <div className="editable-info" style={{fontSize: '12px', color: '#818385'}}>
                  <div className="name" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px'}}>
                    <label>Display name: </label>
                    <input
                      placeholder='Enter name'
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385',  background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="gender" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Gender: </label>
                    <select className="border border-gray-300 rounded-md px-3 py-2"
                     style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                    >
                      <option disabled selected>Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                </div>
                  <div className="dob" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Birthday: </label>
                    <input
                      placeholder='DD MM YYYY'
                      type="text"
                      id="name"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="horoscope" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Horoscope: </label>
                    <input
                      placeholder='--'
                      type="text"
                      id="name"
                      value={horoscope}
                      onChange={(e) => setHoroscope(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="zodiac"  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Zodiac: </label>
                    <input
                      placeholder='--'
                      type="text"
                      id="name"
                      value={zodiac}
                      onChange={(e) => setZodiac(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="height" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Height: </label>
                    <input
                      placeholder='Add Height'
                      type="text"
                      id="name"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="weight" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px'}}>
                    <label>Weight </label>
                    <input
                      placeholder='Add Weight'
                      type="text"
                      id="name"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '200px', height: '35px', border: '1px solid #818385', background: '#21282b', textAlign: 'right' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                </div>
              </div>
            }
            
          </div>
          <div className="profile-pic absolute h-5 w-5" style={{ background: '#0E191F', height: '110px', width: '315px', padding: '10px', borderRadius: '5px', marginTop: '20px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <span style={{ fontSize: '12px', position: 'relative', display: 'flex', justifyContent: 'flex-start'}}>Interest</span>
              <div onClick={handleInterestEditClick}  className="edit-icon absolute top-0 right-0 m-2" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', fontSize: '10px'}}>
                { !editInterestState ? <EditPencilIcon/> : 'Save & Update' }
                
              </div>
            </div>

            { !editInterestState && 
                <>
                    <div className="content">
                      <p style={{ marginTop: '50px', display: 'flex', fontSize: '10px', color: '#a3a2a2' }}>Add in your interest to find a better match</p>
                    </div>
                    <div className="content-available"></div>
                </>
            }

            {/* { editInterestState && 
              <div className="edit-dialog"></div>
            } */}
            
          </div>
      </div>
      
    </div>


    // <form onSubmit={handleSubmit}>
    //   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //   <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
    //   <button type="submit">Update Profile</button>
    //   {error && <div>{error}</div>}
    // </form>
  );
};

export default ProfileForm;
