module.exports = function getI18nText({
  stringTokens,
  variables,
  translations,
  locale,
}) {
  let i18nText = '';

  // проходим по токенам
  for (let index = 0; index < stringTokens.length; index++) {
    const stringToken = stringTokens[index];

    // проверяем, если токен является  массивом
    if (Array.isArray(stringToken)) {
      switch (stringToken[0]) {
        case '@date':
          if (isNaN(Number(stringToken[1]))) {
            const nameOfDateVarible = stringToken[1].replace('$', '');
            const dateNumber = variables[nameOfDateVarible];
            const newPartDate = new Intl.DateTimeFormat(locale, {
              dateStyle: 'full',
              timeStyle: 'long',
            }).format(dateNumber);
            i18nText += newPartDate;
          } else {
            const dateNumber = Number(stringToken[1]);
            const newPartDate = new Intl.DateTimeFormat(locale, {
              dateStyle: 'full',
              timeStyle: 'long',
            }).format(dateNumber);
            i18nText += newPartDate;
          }

          break;
        case '@number':
          // число
          const nameOfvarible = stringToken[1].replace('$', '');
          const number = variables[nameOfvarible];

          // если валюта указана
          if (stringToken[2] != undefined) {
            const currency = stringToken[2];
            const newPart = new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: currency,
            }).format(number);
            i18nText += newPart;

            // если валюта не указана
          } else {
            const newPart = new Intl.NumberFormat(locale).format(number);
            i18nText += newPart;
          }
          break;
        case '@plural':
          const pluralNumber = stringToken[2].replace('$', '');
          const pluralNumberFromVariable = variables[pluralNumber];
          const pluralKey = stringToken[1].replace('#', '');
          const pluralFormatter = new Intl.PluralRules(locale);
          const valueOfPlural = pluralFormatter.select(
            pluralNumberFromVariable
          );
          const pluralKeyFromTranslations =
            translations[locale][pluralKey][valueOfPlural];

          let newPartPlural = pluralNumberFromVariable;
          newPartPlural += ' ';
          newPartPlural += pluralKeyFromTranslations;
          i18nText += newPartPlural;
          break;
        case '@list':
          // создаем пустой массив - список слов для отображения
          let list = [];
          // проходим по массиву - списку для преобразования слов
          for (
            let internalIndex = 1;
            internalIndex < stringToken.length;
            internalIndex++
          ) {
            const valueList = stringToken[internalIndex];

            // переменная для сохранения значения слова после его преобразования
            let newValue = '';

            // проверяем, чем является значение: variable, key или чистым значением
            switch (valueList[0]) {
              // если слово является ключем
              case '#':
                const rawValueList = valueList.replace('#', '');
                const translatedValue = translations[locale][rawValueList];
                newValue = translatedValue;
                break;

              // если слово является переменной
              case '$':
                const rawValueListFromConstant = valueList.replace('$', '');
                newValue = variables[rawValueListFromConstant];
                break;

              // если слово просто string
              default:
                newValue = valueList;
                break;
            }
            // добавляем слово в массив - список
            list.push(newValue);
          }

          // используем Intl для отображения массива - списка по заданному locale
          const formatter = new Intl.ListFormat(locale, {
            style: 'long',
            type: 'conjunction',
          });
          const newPartList = formatter.format(list);
          i18nText += newPartList;
          break;
        case '@relativeTime':
          // проверяем является ли токен переменной
          if (isNaN(Number(stringToken[1]))) {
            const nameOfRelativeTimeVarible = stringToken[1].replace('$', '');
            const relativeTimeNumber = variables[nameOfRelativeTimeVarible];
            const rtf1 = new Intl.RelativeTimeFormat(locale, { style: 'long' });
            const newPartTimeRelative = rtf1.format(
              relativeTimeNumber,
              stringToken[2]
            );
            i18nText += newPartTimeRelative;
          } else {
            // если токен оказался числом
            const rtf1 = new Intl.RelativeTimeFormat(locale, { style: 'long' });
            const newPartTimeRelative = rtf1.format(
              stringToken[1],
              stringToken[2]
            );
            i18nText += newPartTimeRelative;
          }
          break;
      }
    } else {
      // если есть ключ
      const hashTag = stringToken[0];
      if (hashTag == '#') {
        const wordToTranslate = stringToken.replace('#', '');
        const newPartTranslation = translations[locale][wordToTranslate];
        i18nText += newPartTranslation;
      }
      // если нет ключа, то присоединяем, как есть
      else {
        i18nText += stringTokens[index];
      }
    }
  }

  return i18nText; // строка
};
