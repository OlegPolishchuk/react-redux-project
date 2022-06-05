import React, { ChangeEvent, useState } from 'react';

import SuperButton, {
  VariantType,
} from '../../common/components/SuperButton/SuperButton';
import SuperCheckbox from '../../common/components/SuperCheckbox/SuperCheckbox';
import SuperInputText from '../../common/components/SuperInputText/SuperInputText';
import SuperRadio from '../../common/components/SuperRadio/SuperRadio';
import SuperSelect from '../../common/components/SuperSelect/SuperSelect';
import { ReturnComponentType } from '../../types';

import s from './Test.module.scss';

const EXAMPLE_ARRAY = ['x', 'y', 'z'];
const btnVariantOptions = [
  'purple',
  'red',
  'white',
  'outline',
  'default',
] as VariantType[];
const zeroIndex = 0;

const Test: React.FC = (): ReturnComponentType => {
  const firstItem = EXAMPLE_ARRAY[zeroIndex];
  const [checked, setChecked] = useState(false);
  const [variant, setVariant] = useState(btnVariantOptions[zeroIndex]);
  const [radioRowType, setRadioRowType] = useState(false);

  const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.currentTarget.checked);
  };
  const onChangeRadioTypeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setRadioRowType(event.currentTarget.checked);
  };

  const [value, setValue] = useState(firstItem);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h3>common input</h3>
        <SuperInputText />
      </div>
      <div className={s.wrapper}>
        <h3>Common button</h3>
        <p>Variant of button:</p>
        <SuperSelect
          options={btnVariantOptions}
          value={variant}
          onChangeOption={setVariant}
        />
        <SuperButton variant={variant}>Example</SuperButton>
      </div>
      <div className={s.wrapper}>
        <h3>Common checkbox</h3>
        <SuperCheckbox checked={checked} onChange={onChangeCheckboxHandler}>
          {`${checked}`}
        </SuperCheckbox>
      </div>
      <div className={s.wrapper}>
        <h3>Common select and radio</h3>
        <div className={s.inner}>
          <div className={s.radioWrapper}>
            <SuperCheckbox checked={radioRowType} onChange={onChangeRadioTypeHandler}>
              Radio row: {`${radioRowType}`}
            </SuperCheckbox>
            <SuperRadio
              options={EXAMPLE_ARRAY}
              value={value}
              onChangeOption={setValue}
              row={radioRowType}
            />
          </div>
          <SuperSelect options={EXAMPLE_ARRAY} value={value} onChangeOption={setValue} />
        </div>
      </div>
    </div>
  );
};

export default Test;
