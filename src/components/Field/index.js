import React from 'react';

import { WrapperField, Label, Input } from './styles';

export default function FormField({ label, type, name, value, onChange }) {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  return (
    <WrapperField>
      <Label>
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </WrapperField>
  );
}
