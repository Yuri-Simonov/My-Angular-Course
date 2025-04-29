export interface User {
    name: string;
    lastName: string;
    email: string;
    gender: Gender;
    country: Country;
    comment: string;
    agree: boolean;
}

type Gender = 'male' | 'female';
type Country = 'ru' | 'us' | 'de';
