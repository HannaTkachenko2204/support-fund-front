import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import StoryCard from '../StoryCard/StoryCard';
import s from './StoriesList.module.css';
import { stories } from '../../../data/stories';

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


