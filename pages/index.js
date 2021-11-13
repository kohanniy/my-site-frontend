import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { defaultTheme } from '../src/themes/defaultTheme';

export default function Home() {
  console.log(defaultTheme);
  return (
    <div>
      ПРивет
    </div>
  );
}
