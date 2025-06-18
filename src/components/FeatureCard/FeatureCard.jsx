import s from './FeatureCard.module.css';

const FeatureCard = ({ iconId, title, description }) => {
  return (
    <article className={s.feature}>
      <div className={s.icon_wrapper}>
        <svg className={s.icon}>
          <use xlinkHref={`/assets/icons/icons.svg#${iconId}`}></use>
        </svg>
      </div>
      <h3 className={s.feature_title}>{title}</h3>
      <p className={s.feature_description}>{description}</p>
    </article>
  );
};

export default FeatureCard;