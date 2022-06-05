import React from 'react';

import SuperButton from '../../common/components/SuperButton/SuperButton';
import SuperCheckbox from '../../common/components/SuperCheckbox/SuperCheckbox';
import SuperInputText from '../../common/components/SuperInputText/SuperInputText';
import SuperRadio from '../../common/components/SuperRadio/SuperRadio';
import SuperSelect from '../../common/components/SuperSelect/SuperSelect';
import { ReturnComponentType } from '../../types';

const Test: React.FC = (): ReturnComponentType => (
  <div>
    <SuperInputText />
    <SuperButton />
    <SuperCheckbox />
    <SuperRadio />
    <SuperSelect />
  </div>
);

export default Test;
