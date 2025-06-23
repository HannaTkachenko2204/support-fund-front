import React, { useState } from 'react';
import s from './HelpCard.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Container from '../Container/Container';

const supportPrograms = [
  {
    id: 'medical',
    icon: 'icon-aid-kit',
    title: 'Медична реабілітація',
    summary:
      'Організація лікування та реабілітації поранених військовослужбовців у провідних медичних центрах України. Програма включає протезування, психологічну допомогу та довготривале супроводження.',
    details:
      'Також надається повний спектр медичних та відновлювальних заходів — від термінової госпіталізації до комплексної фізичної і психологічної реабілітації. Особлива увага приділяється сучасному протезуванню, лікуванню в санаторно-курортних установах та постійній підтримці родин військових. Психологічна допомога доступна як очно, так і онлайн.',
  },
  {
    id: 'housing',
    icon: 'icon-home3',
    title: 'Житлова підтримка',
    summary:
      'Допомога в поліпшенні житлових умов для родин загиблих або тяжко поранених військових. Програма включає пільгову іпотеку, орендні субсидії, а також підтримку з ремонтом житла.',
    details:
      'Ми допомагаємо в придбанні, оренді та облаштуванні житла. Передбачено оформлення субсидій, ремонти для адаптації житла до потреб захисників та їхніх сімей. Також діє програма тимчасового житла у надзвичайних випадках і допомога при переїзді.',
  },
  {
    id: 'education',
    icon: 'icon-library',
    title: 'Освітні програми',
    summary:
      'Безкоштовне навчання дітей військових у закладах-партнерах, підготовчі курси, програми перекваліфікації для подружжя. Передбачено стипендії для успішних студентів та спеціальні умови вступу.',
    details:
      'Дітям і дружинам/чоловікам військових надається можливість безкоштовного навчання у провідних університетах та коледжах України. Також доступні курси перекваліфікації, профорієнтація і супровід при вступі.',
  },
  {
    id: 'employment',
    icon: 'icon-briefcase',
    title: 'Працевлаштування',
    summary:
      'Програми адаптації та працевлаштування для військових, які повернулись із фронту. Співпраця з перевіреними роботодавцями, вакансії, курси підвищення кваліфікації, гранти для ветеранів.',
    details:
      'Ми підтримуємо повернення до активного професійного життя: навчання, карєрні консультації, стажування, допомога у відкритті власної справи (юридичний супровід, фінансова підтримка, менторство).',
  },
];

const HelpCard = () => {
  return (
    <section className={s.section}>
      <Container>
        <SectionHeader
          subtitle="Програми допомоги"
          title="Форми підтримки учасників бойових дій"
          description="Комплексні програми допомоги за всіма критично важливими напрямками"
        />
        <div className={s.list}>
          {supportPrograms.map(({ id, icon, title, summary, details }) => (
            <CardItem
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

const CardItem = ({ icon, title, summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <article className={s.item}>
      <div className={s.wrapper}>
        <svg className={s.icon}>
          <use xlinkHref={`/assets/icons/icons.svg#${icon}`} />
        </svg>
      </div>

      <div className={s.content}>
        <h4>{title}</h4>
        <p>{summary}</p>
        <a className={s.link} onClick={toggleDetails}>
          Детальніше
          <svg
            className={s.arrow}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            }}
          >
            <use xlinkHref="/assets/icons/icons.svg#icon-keyboard_arrow_down" />
          </svg>
        </a>
        <div
          className={s.toggleContent}
          style={{
            maxHeight: isOpen ? '500px' : '0',
          }}
        >
          <p>{details}</p>
        </div>
      </div>
    </article>
  );
};

export default HelpCard;
