import React from 'react';
import Landing from './Landing';
import BoxE from './BoxE';
import BoxP from './BoxP';
import BoxS from './BoxS';
import BoxK from './BoxK';

export default function Main() {
  return (
    <div className="mainFlex">
      <Landing />
      <BoxE />
      <BoxP />
      <BoxS />
      <BoxK />
    </div>
  );
}
