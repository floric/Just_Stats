export interface ClassValue {
  identifier: string;
  value: string;
}

export const colorValues = [ 'primary', 'info', 'success', 'warning', 'danger', 'light', 'dark'];

export const mapToClassValue = (val: string): ClassValue => ({ identifier: `is-${val}`, value: val });

export const getCurrentValues = (values: string[], currentVal: string): string[] => values
  .filter(val => val === currentVal)
  .map(val => mapToClassValue(val))
  .map(col => col.identifier);
