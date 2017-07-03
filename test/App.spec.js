import React from 'react';
import ava from 'ava';
import App from '../src/assets/scripts/App.js';
import { shallow } from 'enzyme';

ava('does not throw', (t) => {
    const instance = React.createElement(App);

    t.notThrows(() => shallow(instance));
});
