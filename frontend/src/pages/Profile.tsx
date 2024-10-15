import React, { useState } from 'react';

const Profile = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [payInfo, setPayInfo] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handlePayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayInfo({ ...payInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add the logic to submit the form data later
    console.log({ profileImage, contactInfo, payInfo });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 custom-font">Customize Your Profile</h2>
      <form onSubmit={handleSubmit} className="custom-font">
        <div className="mb-4">
          <label className="block mb-2">Profile Picture</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={contactInfo.fullName}
            onChange={handleContactChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleContactChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={contactInfo.phone}
            onChange={handleContactChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={payInfo.cardNumber}
            onChange={handlePayChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
          <input
            type="text"
            name="expiration"
            placeholder="Expiration Date"
            value={payInfo.expiration}
            onChange={handlePayChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={payInfo.cvv}
            onChange={handlePayChange}
            className="block w-full mt-2 p-2 border custom-font"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 custom-font"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
