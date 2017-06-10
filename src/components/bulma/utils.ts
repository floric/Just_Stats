export interface ClassValue {
  identifier: string;
  value: string;
}

const colorValues = [ 'primary', 'info', 'success', 'warning', 'danger', 'light', 'dark'];
const sizeValues = [ 'medium', 'large', 'fullheight' ];

export const colors: ClassValue[] = colorValues.map(val => ({ identifier: `is-${val}`, value: val }));
export const sizes: ClassValue[] = sizeValues.map(val => ({ identifier: `is-${val}`, value: val }));

export const getCurrentVal = (values: ClassValue[], currentVal: string) => values.filter(val => val.value === currentVal).map(col => col.identifier);
