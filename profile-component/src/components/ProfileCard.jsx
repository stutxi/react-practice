import React from 'react';
import { useRecoilValue } from 'recoil';
import { profileState } from '../recoil/atom';

const ProfileCard = () => {
  const profile = useRecoilValue(profileState);

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-teal-400 h-24 relative">
        <img
          src={profile.picture}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto absolute -bottom-10 inset-x-0 border-4 border-white"
        />
      </div>
      <div className="pt-10 pb-6 text-center">
        <h2 className="text-xl font-semibold">
          {profile.name} <span className="text-gray-500 text-sm">{profile.age}</span>
        </h2>
        <p className="text-gray-600 text-sm">{profile.location}</p>
      </div>
      <div className="border-t px-4 py-2 text-center flex justify-around space-x-4">
        <div>
          <h4 className="text-lg font-bold">{profile.followers}</h4>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">{profile.likes}</h4>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">{profile.photos}</h4>
          <p className="text-sm text-gray-500">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
