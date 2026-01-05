import React from 'react';
import { mount as marketingMount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (<div>
        <h1>HELLO THERE!</h1>
        <hr/>
        <MarketingApp />
    </div>)
};