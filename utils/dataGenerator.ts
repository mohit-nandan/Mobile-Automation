import * as fs from 'fs';

const DATA_FILE = './utils/Fixtures/Phone.json';

export function getNextPhoneNumber() {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    let phone = data.phone;

    phone = phone + 1;

    fs.writeFileSync(DATA_FILE, JSON.stringify({ phone }, null, 2));

    return phone;
}

export function getRandomLastName() {
    return `LN_${Math.random().toString(36).substring(2, 8)}`;
}