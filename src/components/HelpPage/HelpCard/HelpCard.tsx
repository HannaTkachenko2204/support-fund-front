import { FC } from 'react';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Container from '../../Container/Container';
import HelpCardItem from '../HelpCardItem/HelpCardItem';
import s from './HelpCard.module.css';
import { supportPrograms } from '../../../data/supportPrograms';
import type { HelpCardProps } from './HelpCardTypes';

const HelpCard: FC  = () => {
  return (
    <section className={s.section}>
      <Container>
        <SectionHeader
          subtitle="Програми допомоги"
          description="Комплексні форми підтримки учасників бойових дій за всіма критично важливими напрямками"
        />
        <div className={s.list}>
          {supportPrograms.map(({ id, icon, title, summary, details }) => (
            <HelpCardItem
              key={id}
              icon={icon}
              title={title}
              summary={summary}
              details={details}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HelpCard;
