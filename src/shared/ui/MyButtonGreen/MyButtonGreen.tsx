import './MyButtonGreen.scss';

type Props = {
  children: React.ReactNode;
};

export const MyButtonGreen: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="MyButtonGreen" {...props}>
      {children}
    </button>
  );
};
