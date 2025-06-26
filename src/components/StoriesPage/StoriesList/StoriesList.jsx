import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import StoryCard from '../StoryCard/StoryCard';
import s from './StoriesList.module.css';

const stories = [
  {
    id: 'alex',
    name: 'Олександр П.',
    age: 'Старший сержант, 35 років',
    preview:
      'Після важкого поранення в зоні СВО фонд організував мою реабілітацію…',
    full: '…Після тяжкого поранення я опинився в госпіталі без розуміння, що буде далі. Фонд допоміг мені пройти якісну реабілітацію, а згодом – перекваліфікацію. Завдяки цьому я зміг повернутися до нормального життя.',
    photo: '/assets/users/user-1.jpg',
  },
  {
    id: 'olga',
    name: 'Ольга К.',
    age: 'Дружина військовослужбовця, 28 років',
    preview:
      'Коли мій чоловік загинув на фронті, фонд допоміг з житлом і освітою дітей…',
    full: '…Після загибелі мого чоловіка на фронті я залишилась одна з двома дітьми і без стабільного доходу. Фонд не тільки допоміг нам з житлом, а й оплатив навчання старшого сина.',
    photo: '/assets/users/user-2.jpg',
  },
  {
    id: 'dmitry',
    name: 'Дмитро С.',
    age: 'Ветеран СВО, 32 роки',
    preview:
      'Після повернення з фронту фонд допоміг мені отримати нову професію…',
    full: '…Повернувшись додому після фронту, я не знав, з чого почати. Фонд запропонував пройти навчання на IT‑спеціаліста та допоміг влаштуватись на першу роботу.',
    photo: '/assets/users/user-3.jpg',
  },
];

const StoriesList = () => {
  return (
    <section className={s.section}>
      <Container>
        <SectionHeader
          subtitle="Історії допомоги"
          title="Реальні історії наших підопічних"
          description="Як ваша підтримка змінює життя захисників та їхніх родин"
        />
        <div className={s.list}>
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StoriesList;


