import React from 'react';

import { WrapperField, Label, Input } from './styles';

export default function FormField({
  label,
  type,
  name,
  value,
  onChange,
  suggestions,
}) {
  const fieldId = `id_${name}`;

  const hasSuggestions = suggestions;

  return (
    <WrapperField>
      <Label>
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                key={`suggestionFor_${fieldId}_option${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </WrapperField>
  );
}
