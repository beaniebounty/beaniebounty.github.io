import React from 'react';

import Icon, { Icons } from '../../components/icon';

import Logo from './logo512.png';

function Home() {
  return (
    <section className="py-4 px-4 flex items-center justify-center min-h-screen bg-bb">
      <div className="flex text-center items-center flex-col">
        <img className="w-48 rounded-full border border-pink-600" src={ Logo } alt="BeanieBounty Logo" />
        <h1 className="text-5xl text-white font-semibold">BeanieBounty</h1>
        <h2 className="text-xl text-white">Software Developer, streamer, dog lover, and so much more.</h2>
        <div className="flex justify-around w-64 py-4">
          <Icon icon={ Icons.Discord } link="https://discord.gg/52aCvKg" />
          <Icon icon={ Icons.Twitter } link="https://twitter.com/beaniebounty" />
          <Icon icon={ Icons.Twitch } link="https://twitch.tv/beaniebounty" />
          <Icon icon={ Icons.GitHub } link="https://github.com/beaniebounty" />
        </div>
      </div>
    </section>
  );
}

export default Home