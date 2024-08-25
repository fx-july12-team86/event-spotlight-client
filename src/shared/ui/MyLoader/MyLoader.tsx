import { RotatingLines } from 'react-loader-spinner';

export const MyLoader = () => {
  return (
    <RotatingLines
      visible={true}
      strokeColor="#6b1aee"
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};
