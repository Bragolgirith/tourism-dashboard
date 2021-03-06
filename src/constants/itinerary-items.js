const TYPES = Object.freeze({
  OTHERS: 'OTHERS',
  LOCATIONS: 'LOCATIONS',
  TRAVELS: 'TRAVELS',
})

const Locations = Object.freeze(
  [

    {
      id: '0А',
      name: 'Нощувка в хотел "Лайт Касъл"',
      durationInMinutes: 0,
      priceConstant: 0,
      pricePerAdult: 20,
      link: 'линк 0А',
      notes: 'бла, бла',
      infos: '0000ааа',
    },
    {
      id: '0Б',
      name: 'Нощувка в къща гости "Ахрида"',
      durationInMinutes: 0,
      priceConstant: 0,
      pricePerAdult: 18.8,
      link: 'линк 0Б',
      notes: 'добре 8',
      infos: '222бб10',
    },
    {
      id: '1А',
      name: 'Училище за родители  - големи ',
      durationInMinutes: 90,
      priceConstant: 25,
      pricePerAdult: 2.44,
      link: 'линк 1А',
      notes: 'аде бе!',
      infos: '111аааа',
    },
    {
      id: '1Б',
      name: 'Училище за родители  - бебета ',
      durationInMinutes: 150,
      priceConstant: 13,
      pricePerAdult: 6.33,
      link: 'линк 1Б',
      notes: 'кот-тва',
      infos: '',
    },
    {
      id: '1В',
      name: 'Училище за бъдещи семейства  ',
      durationInMinutes: 60,
      priceConstant: 15.5,
      pricePerAdult: 2.8,
      link: 'линк 1Б',
      notes: 'добре А',
      infos: '222бб10',
    },
    {
      id: '1Г',
      name: 'Духовно наследство - Църква Ивайловград, аязмо Барбука, Атеренски мост, Манастир ',
      durationInMinutes: 210,
      priceConstant: 7,
      pricePerAdult: 12,
      link: 'линк 1Г',
      notes: 'добре Б',
      infos: '222ааа',
    },
    {
      id: '1Д',
      name: 'Духовно наследство - Църкви Ивайловград, Свирачи, Долно Луково',
      durationInMinutes: 180,
      priceConstant: 12,
      pricePerAdult: 2.1,
      link: 'линк 1Д',
      notes: 'добре 1',
      infos: '222ббб',
    },
    {
      id: '1Е',
      name: 'Църкви Ивайловград и Плевун (капитан Петко)',
      durationInMinutes: 240,
      priceConstant: 12.5,
      pricePerAdult: 2.2,
      link: 'линк 1Е',
      notes: 'добре 2',
      infos: '222ббб',
    },
    {
      id: '1Ж',
      name: 'Духовно наследство -  Църкви в 3 държави: Ивайловград, Димотика, Одрин ',
      durationInMinutes: 60,
      priceConstant: 13,
      pricePerAdult: 2.3,
      link: 'линк 1Ж',
      notes: 'добре 3',
      infos: '222б7б',
    },
    {
      id: '1З',
      name: 'Меандрите на Бяла река - пясъчен плаж, грил, скокове във вода от 6-8 м., каменно "джакузи" ',
      durationInMinutes: 90,
      priceConstant: 13.5,
      pricePerAdult: 2.4,
      link: 'линк 1З',
      notes: 'добре 4',
      infos: '222б8б',
    },
    {
      id: '1И',
      name: 'Меандрите на Бяла река - преход с лагер, лагерен огън ',
      durationInMinutes: 120,
      priceConstant: 14,
      pricePerAdult: 2.5,
      link: 'линк 1И',
      notes: 'добре 5',
      infos: '222бб7',
    },
    {
      id: '1К',
      name: 'Язовир Ивайловград с моторни лодки  - залив "Цимбала" - с обяд риба, на брега',
      durationInMinutes: 150,
      priceConstant: 14.5,
      pricePerAdult: 2.6,
      link: 'линк 1К',
      notes: 'добре 6',
      infos: '222бб8',
    },
    {
      id: '1Л',
      name: 'Язовир Ивайловград с моторни лодки  - целодневна, до Маджарово',
      durationInMinutes: 180,
      priceConstant: 15,
      pricePerAdult: 2.7,
      link: 'линк 1Л',
      notes: 'добре 7',
      infos: '222бб9',
    },
    {
      id: '1М',
      name: 'Риболовен туризъм  - р. Арда и язовира (спининг, кефал)',
      durationInMinutes: 60,
      priceConstant: 15.5,
      pricePerAdult: 2.8,
      link: 'линк 1М',
      notes: 'добре 8',
      infos: '222бб10',
    },
    {
      id: '1Н',
      name: 'Риболовен туризъм  - Бяла Река (спининг, кефал)',
      durationInMinutes: 90,
      priceConstant: 16,
      pricePerAdult: 2.9,
      link: 'линк 1Н',
      notes: 'добре 9',
      infos: '222бб11',
    },
    {
      id: '1О',
      name: 'Риболовен туризъм  - Реки и водоеми в Гърция - р. Бяла река, р. Марица, р. Еритропотамос',
      durationInMinutes: 120,
      priceConstant: 16.5,
      pricePerAdult: 3,
      link: 'линк 1О',
      notes: 'добре 10',
      infos: '222бб12',
    },
    {
      id: '1П',
      name: 'Риболовен туризъм  - Сом на кльонк по язовир Ивайловград ',
      durationInMinutes: 150,
      priceConstant: 17,
      pricePerAdult: 3.1,
      link: 'линк 1П',
      notes: 'добре 11',
      infos: '222бб13',
    },
    {
      id: '1Р',
      name: 'Винен туризъм - дегустация на домашни и/или маркови вина.',
      durationInMinutes: 180,
      priceConstant: 17.5,
      pricePerAdult: 3.2,
      link: 'линк 1Р',
      notes: 'добре 12',
      infos: '222бб14',
    },
    {
      id: '1С',
      name: 'Разпознаване и събиране на билки и подправки',
      durationInMinutes: 60,
      priceConstant: 17.55,
      pricePerAdult: 3.25,
      link: 'линк 1С',
      notes: 'добре 13',
      infos: '222бб15',
    },
    {
      id: '1Т',
      name: 'Тийм билдинг - групови игри',
      durationInMinutes: 90,
      priceConstant: 17.6,
      pricePerAdult: 3.3,
      link: 'линк 1Т',
      notes: 'добре 14',
      infos: '222бб16',
    },
    {
      id: '1У',
      name: 'Обучение по оцеляване                                                     ',
      durationInMinutes: 120,
      priceConstant: 17.65,
      pricePerAdult: 3.35,
      link: 'линк 1У',
      notes: 'добре 15',
      infos: '222бб17',
    },
    {
      id: '1Ф',
      name: 'Приготвяне на домашна зимнина - за есента',
      durationInMinutes: 90,
      priceConstant: 17.7,
      pricePerAdult: 3.4,
      link: 'линк 1Ф',
      notes: 'Бележки 1Ф',
      infos: 'Информация 1Ф',
    },
    {
      id: '1Х',
      name: 'Тъкане на стан кърпи, сувенири от цар. шума, житни класове',
      durationInMinutes: 150,
      priceConstant: 17.75,
      pricePerAdult: 3.45,
      link: 'линк 1Х',
      notes: 'Бележки 1Х',
      infos: 'Информация 1Х',
    },
    {
      id: '1Ц',
      name: '',
      durationInMinutes: 60,
      priceConstant: 17.8,
      pricePerAdult: 3.5,
      link: 'линк 1Ц',
      notes: 'Бележки 1Ц',
      infos: 'Информация 1Ц',
    },
    {
      id: '1Ч',
      name: 'Караоке вечер ',
      durationInMinutes: 210,
      priceConstant: 17.85,
      pricePerAdult: 3.55,
      link: 'линк 1Ч',
      notes: 'Бележки 1Ч',
      infos: 'Информация 1Ч',
    },
    {
      id: '2А',
      name: 'Вело преход - кросови велосипеди (степени на трудност)',
      durationInMinutes: 180,
      priceConstant: 17.9,
      pricePerAdult: 3.6,
      link: 'линк 2А',
      notes: 'Бележки 2А',
      infos: 'Информация 2А',
    },
    {
      id: '2Б',
      name: 'Вело преход - шосени велосипеди (степени на трудност)',
      durationInMinutes: 240,
      priceConstant: 17.95,
      pricePerAdult: 3.65,
      link: 'линк 2Б',
      notes: 'Бележки 2Б',
      infos: 'Информация 2Б',
    },
    {
      id: '2В',
      name: 'Посещение на местни събития, фестивали - от календара на общината',
      durationInMinutes: 60,
      priceConstant: 18,
      pricePerAdult: 3.7,
      link: 'линк 2В',
      notes: 'Бележки 2В',
      infos: 'Информация 2В',
    },
    {
      id: '2Г',
      name: 'Вила Армира ',
      durationInMinutes: 90,
      priceConstant: 18.05,
      pricePerAdult: 3.75,
      link: 'линк 2Г',
      notes: 'Бележки 2Г',
      infos: 'Информация 2Г',
    },
    {
      id: '2Д',
      name: 'Могила с. Свирачи   ',
      durationInMinutes: 120,
      priceConstant: 18.1,
      pricePerAdult: 3.8,
      link: 'линк 2Д',
      notes: 'Бележки 2Д',
      infos: 'Информация 2Д',
    },
    {
      id: '2Е',
      name: 'Крепост Лютица',
      durationInMinutes: 150,
      priceConstant: 18.15,
      pricePerAdult: 3.85,
      link: 'линк 2Е',
      notes: 'Бележки 2Е',
      infos: 'Информация 2Е',
    },
    {
      id: '2Ж',
      name: 'Църквата в с. Плевун',
      durationInMinutes: 180,
      priceConstant: 18.2,
      pricePerAdult: 3.9,
      link: 'линк 2Ж',
      notes: 'Бележки 2Ж',
      infos: 'Информация 2Ж',
    },
    {
      id: '2З',
      name: 'Църквата в с. Долно Луково',
      durationInMinutes: 60,
      priceConstant: 18.25,
      pricePerAdult: 3.95,
      link: 'линк 2З',
      notes: 'Бележки 2З',
      infos: 'Информация 2З',
    },
    {
      id: '2И',
      name: 'Общински музей Ивайловград',
      durationInMinutes: 90,
      priceConstant: 18.3,
      pricePerAdult: 4,
      link: 'линк 2И',
      notes: 'Бележки 2И',
      infos: 'Информация 2И',
    },
    {
      id: '2К',
      name: 'Бубарска къща - Паскалева къща',
      durationInMinutes: 120,
      priceConstant: 18.35,
      pricePerAdult: 4.05,
      link: 'линк 2К',
      notes: 'Бележки 2К',
      infos: 'Информация 2К',
    },
    {
      id: '2Л',
      name: 'Тракийски долмени ',
      durationInMinutes: 150,
      priceConstant: 18.4,
      pricePerAdult: 4.1,
      link: 'линк 2Л',
      notes: 'Бележки 2Л',
      infos: 'Информация 2Л',
    },
    {
      id: '2М',
      name: 'Атеренски мост ',
      durationInMinutes: 180,
      priceConstant: 18.45,
      pricePerAdult: 4.15,
      link: 'линк 2М',
      notes: 'Бележки 2М',
      infos: 'Информация 2М',
    },
    {
      id: '2Н',
      name: 'Пътят на сиренето (Новото тракийско злато)',
      durationInMinutes: 60,
      priceConstant: 18.5,
      pricePerAdult: 4.2,
      link: 'линк 2Н',
      notes: 'Бележки 2Н',
      infos: 'Информация 2Н',
    },
    {
      id: '2О',
      name: 'Посещение действаща таханджийница - Ив/град',
      durationInMinutes: 90,
      priceConstant: 18.55,
      pricePerAdult: 4.25,
      link: 'линк 2О',
      notes: 'Бележки 2О',
      infos: 'Информация 2О',
    },
    {
      id: '2П',
      name: 'Посещение на действаща таханджийница - .....',
      durationInMinutes: 120,
      priceConstant: 18.6,
      pricePerAdult: 4.3,
      link: 'линк 2П',
      notes: 'Бележки 2П',
      infos: 'Информация 2П',
    },
    {
      id: '3А',
      name: 'Снимки с местни костюми        ',
      durationInMinutes: 90,
      priceConstant: 18.65,
      pricePerAdult: 4.35,
      link: 'линк 3А',
      notes: 'Бележки 3А',
      infos: 'Информация 3А',
    },
    {
      id: '3Б',
      name: 'Заснемане на преживяванията ',
      durationInMinutes: 150,
      priceConstant: 18.7,
      pricePerAdult: 4.4,
      link: 'линк 3Б',
      notes: 'Бележки 3Б',
      infos: 'Информация 3Б',
    },
    {
      id: '3В',
      name: 'Заснемане от въздуха',
      durationInMinutes: 60,
      priceConstant: 18.75,
      pricePerAdult: 4.45,
      link: 'линк 3В',
      notes: 'Бележки 3В',
      infos: 'Информация 3В',
    },
    {
      id: '3Г',
      name: 'Грижа за децата, докато родителите участват в атракция',
      durationInMinutes: 210,
      priceConstant: 18.8,
      pricePerAdult: 4.5,
      link: 'линк 3Г',
      notes: 'Бележки 3Г',
      infos: 'Информация 3Г',
    },
    {
      id: '3Д',
      name: 'Игри за деца (от нашето детство)                                       ',
      durationInMinutes: 180,
      priceConstant: 18.85,
      pricePerAdult: 4.55,
      link: 'линк 3Д',
      notes: 'Бележки 3Д',
      infos: 'Информация 3Д',
    },
    {
      id: '3Е',
      name: 'Акордеон и/или др. жив музикален съпровод и анимация',
      durationInMinutes: 240,
      priceConstant: 18.9,
      pricePerAdult: 4.6,
      link: 'линк 3Е',
      notes: 'Бележки 3Е',
      infos: 'Информация 3Е',
    },
    {
      id: '3Ж',
      name: 'Развръщане на бивак на местността (за хранене)',
      durationInMinutes: 60,
      priceConstant: 18.95,
      pricePerAdult: 4.65,
      link: 'линк 3Ж',
      notes: 'Бележки 3Ж',
      infos: 'Информация 3Ж',
    },
    {
      id: '3З',
      name: 'Развръщане на бивак на местността (за нощувка)',
      durationInMinutes: 90,
      priceConstant: 19,
      pricePerAdult: 4.7,
      link: 'линк 3З',
      notes: 'Бележки 3З',
      infos: 'Информация 3З',
    },
    {
      id: '4А',
      name: 'Гърция, Пенталофос  - "По желязната завеса" + дивечово стопанство.  ',
      durationInMinutes: 120,
      priceConstant: 19.05,
      pricePerAdult: 4.75,
      link: 'линк 4А',
      notes: 'Бележки 4А',
      infos: 'Информация 4А',
    },
    {
      id: '4Б',
      name: 'Гърция,Триетнос ',
      durationInMinutes: 150,
      priceConstant: 19.1,
      pricePerAdult: 4.8,
      link: 'линк 4Б',
      notes: 'Бележки 4Б',
      infos: 'Информация 4Б',
    },
    {
      id: '4В',
      name: 'Гърция, Спилео - "Музей - археологически находки от горен Еврос" + правене на ръчна юфка/кус-кус.  ',
      durationInMinutes: 180,
      priceConstant: 19.15,
      pricePerAdult: 4.85,
      link: 'линк 4В',
      notes: 'Бележки 4В',
      infos: 'Информация 4В',
    },
    {
      id: '4Г',
      name: 'Гърция, Орестиада',
      durationInMinutes: 60,
      priceConstant: 19.2,
      pricePerAdult: 4.9,
      link: 'линк 4Г',
      notes: 'Бележки 4Г',
      infos: 'Информация 4Г',
    },
    {
      id: '4Д',
      name: 'Гърция, Петрота - Музей на камъка ',
      durationInMinutes: 90,
      priceConstant: 19.25,
      pricePerAdult: 4.95,
      link: 'линк 4Д',
      notes: 'Бележки 4Д',
      infos: 'Информация 4Д',
    },
    {
      id: '4Е',
      name: 'Гърция, с. Микри Доксипара',
      durationInMinutes: 120,
      priceConstant: 19.3,
      pricePerAdult: 5,
      link: 'линк 4Е',
      notes: 'Бележки 4Е',
      infos: 'Информация 4Е',
    },
    {
      id: '4Ж',
      name: 'Гърция, Димотика ',
      durationInMinutes: 150,
      priceConstant: 19.35,
      pricePerAdult: 5.05,
      link: 'линк 4Ж',
      notes: 'Бележки 4Ж',
      infos: 'Информация 4Ж',
    },
    {
      id: '4З',
      name: 'Гърция, Софлу',
      durationInMinutes: 180,
      priceConstant: 19.4,
      pricePerAdult: 5.1,
      link: 'линк 4З',
      notes: 'Бележки 4З',
      infos: 'Информация 4З',
    },
    {
      id: '4И',
      name: 'Гърция, Александруполи',
      durationInMinutes: 60,
      priceConstant: 19.45,
      pricePerAdult: 5.15,
      link: 'линк 4И',
      notes: 'Бележки 4И',
      infos: 'Информация 4И',
    },
    {
      id: '5А',
      name: 'Туристическа обиколка на Одрин',
      durationInMinutes: 90,
      priceConstant: 19.5,
      pricePerAdult: 5.2,
      link: 'линк 5А',
      notes: 'Бележки 5А',
      infos: 'Информация 5А',
    },
    {
      id: '6А',
      name: 'Обиколка с каруца/магаре                                                       ',
      durationInMinutes: 120,
      priceConstant: 19.55,
      pricePerAdult: 5.25,
      link: 'линк 6А',
      notes: 'Бележки 6А',
      infos: 'Информация 6А',
    },
    {
      id: '6Б',
      name: 'Каракачански коне в с. Костилково                                         ',
      durationInMinutes: 90,
      priceConstant: 19.6,
      pricePerAdult: 5.3,
      link: 'линк 6Б',
      notes: 'Бележки 6Б',
      infos: 'Информация 6Б',
    },
    {
      id: '9А',
      name: 'Закуска',
      durationInMinutes: 150,
      priceConstant: 19.65,
      pricePerAdult: 5.35,
      link: 'линк 9А',
      notes: 'Бележки 9А',
      infos: 'Информация 9А',
    },
    {
      id: '9Б',
      name: 'Обяд',
      durationInMinutes: 60,
      priceConstant: 19.7,
      pricePerAdult: 5.4,
      link: 'линк 9Б',
      notes: 'Бележки 9Б',
      infos: 'Информация 9Б',
    },
    {
      id: '9В',
      name: 'Вечеря',
      durationInMinutes: 210,
      priceConstant: 19.75,
      pricePerAdult: 5.45,
      link: 'линк 9В',
      notes: 'Бележки 9В',
      infos: 'Информация 9В',
    },
    {
      id: '9Г',
      name: 'Попътна закуска',
      durationInMinutes: 180,
      priceConstant: 19.8,
      pricePerAdult: 5.5,
      link: 'линк 9Г',
      notes: 'Бележки 9Г',
      infos: 'Информация 9Г',
    },
    {
      id: '9Д',
      name: 'На гости в селски дом - обяд                                                ',
      durationInMinutes: 240,
      priceConstant: 19.85,
      pricePerAdult: 5.55,
      link: 'линк 9Д',
      notes: 'Бележки 9Д',
      infos: 'Информация 9Д',
    },
    {
      id: '9Е',
      name: 'На гости в селски дом - вечеря                   ',
      durationInMinutes: 60,
      priceConstant: 19.9,
      pricePerAdult: 5.6,
      link: 'линк 9Е',
      notes: 'Бележки 9Е',
      infos: 'Информация 9Е',
    },
    {
      id: '9Ж',
      name: 'Закуската на баба',
      durationInMinutes: 90,
      priceConstant: 19.95,
      pricePerAdult: 5.65,
      link: 'линк 9Ж',
      notes: 'Бележки 9Ж',
      infos: 'Информация 9Ж',
    },
    {
      id: '9З',
      name: '"Надупено" пиле (върху бирена бутилка, под тенекия)',
      durationInMinutes: 120,
      priceConstant: 20,
      pricePerAdult: 5.7,
      link: 'линк 9З',
      notes: 'Бележки 9З',
      infos: 'Информация 9З',
    },
    {
      id: '9И',
      name: 'Тиква пълнена със заек/пиле',
      durationInMinutes: 150,
      priceConstant: 20.05,
      pricePerAdult: 5.75,
      link: 'линк 9И',
      notes: 'Бележки 9И',
      infos: 'Информация 9И',
    },
    {
      id: '9К',
      name: 'Агне/яре на фурна',
      durationInMinutes: 180,
      priceConstant: 20.1,
      pricePerAdult: 5.8,
      link: 'линк 9К',
      notes: 'Бележки 9К',
      infos: 'Информация 9К',
    },
    {
      id: '9Л',
      name: 'Агне/яре чеверме/трап',
      durationInMinutes: 60,
      priceConstant: 20.15,
      pricePerAdult: 5.85,
      link: 'линк 9Л',
      notes: 'Бележки 9Л',
      infos: 'Информация 9Л',
    },
    {
      id: '9М',
      name: 'Сладкиши - с кафето',
      durationInMinutes: 90,
      priceConstant: 20.2,
      pricePerAdult: 5.9,
      link: 'линк 9М',
      notes: 'Бележки 9М',
      infos: 'Информация 9М',
    },
    {
      id: '9Н',
      name: 'Домашна пита - 30 парчета в тава',
      durationInMinutes: 120,
      priceConstant: 20.25,
      pricePerAdult: 5.95,
      link: 'линк 9Н',
      notes: 'Бележки 9Н',
      infos: 'Информация 9Н',
    },
    {
      id: '9О',
      name: 'Зелник, тиквеник, баница със спанак/коприва',
      durationInMinutes: 150,
      priceConstant: 20.3,
      pricePerAdult: 6,
      link: 'линк 9О',
      notes: 'Бележки 9О',
      infos: 'Информация 9О',
    },
    {
      id: '9П',
      name: 'традиционна гръцка кухня',
      durationInMinutes: 180,
      priceConstant: 20.35,
      pricePerAdult: 6.05,
      link: 'линк 9П',
      notes: 'Бележки 9П',
      infos: 'Информация 9П',
    },
    {
      id: '9Р',
      name: 'традиционнни, местни и био храни',
      durationInMinutes: 60,
      priceConstant: 20.4,
      pricePerAdult: 6.1,
      link: 'линк 9Р',
      notes: 'Бележки 9Р',
      infos: 'Информация 9Р',
    },
    {
      id: '9С',
      name: 'Риба',
      durationInMinutes: 90,
      priceConstant: 20.45,
      pricePerAdult: 6.15,
      link: 'линк 9С',
      notes: 'Бележки 9С',
      infos: 'Информация 9С',
    },
    {
      id: '9Т',
      name: 'Сом ',
      durationInMinutes: 120,
      priceConstant: 20.5,
      pricePerAdult: 6.2,
      link: 'линк 9Т',
      notes: 'Бележки 9Т',
      infos: 'Информация 9Т',
    },
  ],
)

const Others = Object.freeze([
  {
    id: 'NEW_DAY',
    name: 'Нов ден',
    type: TYPES.OTHERS,
    icon: 'mdi-weather-sunset',
  },
])

Locations.forEach(value => {
  value.type = TYPES.LOCATIONS
  value.icon = 'mdi-sign-direction'
})
Others.forEach(value => {
  value.type = TYPES.OTHERS
  value.icon = value.icon || 'mdi-adjust'
})
const AllItems = [...Others, ...Locations]

export {
  TYPES,
  Others,
  Locations,
  AllItems,
}
