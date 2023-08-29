import styles from './NewsLetterImage.module.css'

const NewsLetterImage = () => {
  return (
    <div className="flex justify-end z-10">
      <div className={`${styles.image}`}></div>
    </div>
  );
};

export default NewsLetterImage;
