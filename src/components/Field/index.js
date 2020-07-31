import React from 'react';

import { WrapperField, Label, Input } from './styles';

export default function FormField({ label, type, name, value, onChange }) {
  return (
    <WrapperField>
      <Label>
        <Input type={type} name={name} value={value} onChange={onChange} />
        <Label.Text>{label}</Label.Text>
      </Label>
    </WrapperField>
  );
}
