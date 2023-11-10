import { type ProfileType, ValidateProfileError } from 'pages/ProfilePage/model/types/types';

export const validateProfile = (profile?: ProfileType) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first,
        lastname,
        age,
        country
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY);
    }

    return errors
}
