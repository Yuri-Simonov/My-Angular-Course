// @ts-nocheck

// примеры для урока
const providers = [
    // // useClass
    DataService,
    { provide: DataService, useClass: UserService },

    // // useValue
    // строка
    { provide: TOKEN, useValue: 'Какие-то строковые данные' },
    // число
    { provide: TOKEN, useValue: 1 },
    // булево
    { provide: TOKEN, useValue: true },
    // объект
    { provide: TOKEN, useValue: { name: 'Вася' } },
    // массив
    { provide: TOKEN, useValue: [1, 2, 3] },
    // функция
    {
        provide: TOKEN,
        useValue: () => console.log('Какая-то логика внутри функции'),
    },
    // и т.д.

    // // useFactory
    {
        provide: TOKEN,
        useFactory: () => console.log('Какая-то логика внутри функции'),
    },
    {
        provide: TOKEN,
        useFactory: () => {
            if (Math.random() > 0.5) {
                return {
                    message: 'Число больше 0.5',
                };
            }
            return {
                message: 'Число меньше 0.5',
            };
        },
    },
    {
        provide: TOKEN,
        useFactory: (http: HttpClient) => {
            if (Math.random() > 0.5) {
                return new RandomService();
            }
            return new DataService(http);
        },
        deps: [HttpClient],
    },

    // // useExisting
    { provide: USER_RANDOM_SERVICE_TOKEN, useExisting: RandomService },
    { provide: ADMIN_RANDOM_SERVICE_TOKEN, useExisting: RandomService },
];
