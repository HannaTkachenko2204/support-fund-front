import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import s from './HelpRequestForm.module.css';

const HelpRequestForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можешь добавить отправку данных, валидацию и т.д.
    alert('Форма отправлена!');
  };

  return (
    <section className={s.section}>
      <Container>
        <SectionHeader
          subtitle="Форма отримання допомоги"
          description="Заповніть форму та наша команда зв’яжеться з Вами"
        />
        <form id="help-request-form" className={s.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">ПІБ*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="ПІБ"
              required
            />
          </div>

          <div>
            <label htmlFor="dob">Дата народження*</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          <div>
            <label htmlFor="phone-help">Телефон*</label>
            <input
              type="tel"
              id="phone-help"
              name="phone"
              placeholder="+38 (___) ___-__-__"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="region">Регіон проживання*</label>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Регіон"
              required
            />
          </div>

          <div>
            <label htmlFor="status">Ваш статус*</label>
            <select id="status" name="status" required>
              <option value="">Оберіть</option>
              <option value="svo">Учасник бойових дій</option>
              <option value="relative">Родич захисника</option>
              <option value="widow">Вдова / вдівець</option>
              <option value="other">Інше</option>
            </select>
          </div>

          <div>
            <label htmlFor="documents">Документи (необов’язково)</label>
            <input type="file" id="documents" name="documents" multiple />
          </div>

          <div>
            <label htmlFor="helpText">Чим можемо допомогти?</label>
            <textarea id="helpText" name="helpText" rows="4"></textarea>
          </div>

          <div className={s.checkboxWrapper}>
            <label>
              <input type="checkbox" required />
              <span>Я даю згоду на обробку персональних даних</span>
            </label>
          </div>

          <button type="submit" className="btn">
            Надіслати заявку
          </button>
        </form>
      </Container>
    </section>
  );
};

export default HelpRequestForm;
