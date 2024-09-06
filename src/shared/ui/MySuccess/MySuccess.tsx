import cn from 'classnames';
import styles from './MySuccess.module.scss';

type Props = {
  className?: string;
  title: string;
  text: string;
};

export const MySuccess: React.FC<Props> = (props) => {
  const { title, text, className = '', ...otherProps } = props;

  return (
    <div className={cn(styles.success, className)} {...otherProps}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.text}>{text}</p>
    </div>
  );
};
