import { useState } from 'react';
import useHiddenFileInput from '../../hooks/useHiddenFileInput';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import s from './HelpRequestForm.module.css';

const HelpRequestForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { fileInputRef, openFileDialog, onKeyDown } = useHiddenFileInput();

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    setSelectedFiles((prevFiles) => {
      const existingNames = prevFiles.map((f) => f.name);
      const filteredNewFiles = newFiles.filter(
        (f) => !existingNames.includes(f.name)
      );
      return [...prevFiles, ...filteredNewFiles];
    });

    e.target.value = null;
  };

  const handleFileRemove = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
    // Здесь можно отправить selectedFiles на сервер
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
            <input
              type="date"
              id="dob"
              name="dob"
              required
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
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
            <label htmlFor="region">Область*</label>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Область"
              required
            />
          </div>

          <div>
            <label htmlFor="city">Місто*</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Місто"
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
            <label>Документи (посвідчення, медичні довідки та ін.)</label>
            <div className={s.fileInputWrapper}>
              <label
                className={s.fileInputLabel}
                onClick={openFileDialog}
                role="button"
                tabIndex={0}
                onKeyDown={onKeyDown}
              >
                Вибрати файли
              </label>

              <input
                type="file"
                id="documents"
                name="documents"
                multiple
                className={s.fileInput}
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{
                  position: 'absolute',
                  opacity: 0,
                  width: 0,
                  height: 0,
                  pointerEvents: 'none',
                }}
                tabIndex={-1}
              />
            </div>

            {selectedFiles.length > 0 && (
              <ul className={s.fileList}>
                {selectedFiles.map((file, index) => (
                  <li
                    key={index}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span>{file.name}</span>
                    <button
                      type="button"
                      className={s.fileRemoveBtn}
                      onClick={() => handleFileRemove(index)}
                      aria-label="Видалити файл"
                      title="Видалити файл"
                    >
                      <svg
                        className={s.icon}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use xlinkHref="/assets/icons/icons.svg#icon-close" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
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

          <div className={s.buttonWrapper}>
          <button type="submit" className={s.btn}>
            Надіслати заявку
          </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default HelpRequestForm;
