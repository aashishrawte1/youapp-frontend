'use client';
import LeftArrowIcon from "@/app/components/LeftArrowIcon";
import { useState } from "react";

const InterestPage: React.FC = () => {

    const [name, setName] = useState();
    const [inputValue, setInputValue] = useState('');
    const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
    const [showOptions, setShowOptions] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
      setInputValue(e.target.textContent || '');
      console.log(e.target.textContent);
      setShowOptions(true);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' && inputValue.trim() !== '') {
        console.log(inputValue, selectedRecipients)
        e.preventDefault();
        setSelectedRecipients([...selectedRecipients, inputValue.trim()]);
        setInputValue('');
        setShowOptions(false);
      }
      console.log(inputValue);
      
    };
  
    const handleSelect = (recipient: string) => {
      setSelectedRecipients([...selectedRecipients, recipient]);
      setInputValue('');
      setShowOptions(false);
    };
  
    const handleDiscard = (index: number) => {
      const updatedRecipients = selectedRecipients.filter((_, i) => i !== index);
      setSelectedRecipients(updatedRecipients);
    };
    return (
        <div className="container mx-auto" style={{ background: 'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)', height: '100vh', padding: '50px 20px 50px 20px' }}>
            <div className="header flex items-center" style={{display: 'flex', flexDirection: 'row', padding: '10px', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <LeftArrowIcon size="20px"/>
                    <span className="text-lg mb-4 ml-2">Back</span>
                </div>
                <p style={{marginLeft: '70px', fontSize: '15px', color: 'linear-gradient(134.86deg, #ABFFFD 2.64%, #4599DB 102.4%, #AADAFF 102.4%)' }}>Save</p>                    
                
            </div>
            
            <div style={{ padding: '10px', marginTop: '0px', lineHeight: '2'}}>
                <p style={{ fontSize: '11px', marginTop: '20px', color: '#ffcb78'}}>Tell eveyone about yourself</p>
                <span>What interest you?</span>
                {/* <ProfileForm/> */}
                
                {/* <input
                      type="text"
                      id="name"
                    //   value={name}
                    //   onChange={(e) => setName(e.target.value)}
                      style={{ borderRadius: '5px', padding: '10px', width: '300px', marginTop: '25px', minHeight: '35px', maxHeight: 'auto', background: '#2e3336' }}
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                    /> */}

<div>
      <div
        contentEditable
        onKeyDown={handleKeyDown}
        onInput={handleChange}
        style={{ borderRadius: '5px', padding: '10px', width: '300px', marginTop: '25px', minHeight: '35px', maxHeight: 'auto', background: '#2e3336' }}
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline input-card"
      >
        {selectedRecipients.map((recipient, index) => (
          <div key={index} className="recipient-card">
            <span>{recipient}</span>
            <button onClick={() => handleDiscard(index)} className="discard-button">&#10006;</button>
          </div>
        ))}
      </div>
    </div>

                
            </div>

            
            
        </div>
    )
}

export default InterestPage;