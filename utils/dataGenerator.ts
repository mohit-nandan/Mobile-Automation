import * as fs from 'fs';

const DATA_FILE = './utils/Fixtures/staging/onboarding.json';

export function getNextPhoneNumber() {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    let phone = data.DynamicData.phone;

    phone = phone + 1;
    data.DynamicData.phone = phone;

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

    return phone;
}

export function getRandomLastName() {
    return `LN_${Math.random().toString(36).substring(2, 8)}`;
}