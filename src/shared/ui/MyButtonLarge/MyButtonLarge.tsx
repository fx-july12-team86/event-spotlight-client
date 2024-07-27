import './MyButtonLarge.scss';

type Props = {
  children: React.ReactNode;
  style?: { [key: string]: string };
  className?: string;
  onClick?: () => void;
};

export const MyButtonLarge: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="MyButtonLarge" {...props}>
      {children}
    </button>
  );
};
