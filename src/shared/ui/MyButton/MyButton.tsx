import './MyButton.scss';

type Props = {
  children: React.ReactNode;
  style?: { [key: string]: string };
};

export const MyButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="MyButton" {...props}>
      {children}
    </button>
  );
};
