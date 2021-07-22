export type ButtonProps = {
  onClick: () => unknown;
  label: string;
};

export const Button = ({ onClick, label }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);
