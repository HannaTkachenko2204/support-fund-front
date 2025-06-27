// DonationPayTypes.ts

export type PaymentMethod = string; // або можна звузити тип, якщо методів мало: 'Карта' | 'Готівка' | 'PayPal' тощо

export type Amount = string; // тут рядок, бо суми в тебе як рядки (наприклад: '100', '200', '500')

export type Frequency = string; // тип для періодичності, наприклад: 'Разова', 'Щомісяця' тощо

// Типи масивів, які імпортуються (за потребою)
export type PaymentMethods = PaymentMethod[];
export type Amounts = Amount[];
export type Frequencies = Frequency[];

// Якщо будуть пропси (зараз DonationPay без пропсів)
export interface DonationPayProps {
  // наприклад, якщо треба передавати щось у майбутньому
}
