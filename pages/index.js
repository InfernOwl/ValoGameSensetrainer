import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import NaviButton from '../components/NaviButtons';

export default function HomePage() {
  

  return (
    <>
      <Head>
        <title>Valorant Game Sense Trainer</title>
      </Head>

      <div>
        <Image 
          priority
          src="/assets/valo_logo.png"
          height={100}
          width={100}
          alt="valorant"
          />
        <h1>Valorant Game</h1>
        <h1>Sense Trainer</h1>

        <div>
          <ul>
            <li><NaviButton url="soundtest" name="Sound Test" image="/assets/speaker_icon.png" /></li>
            <li><NaviButton url="spatialtest" name="Spatial Test" image="/assets/map_pin_icon.png" /></li>
            <li>Hamburger Menu ¯\_(ツ)_/¯</li>
          </ul>
        </div>
      </div>
    </>
  );
}