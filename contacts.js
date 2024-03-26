import * as fs from "fs/promises";
import * as path from "path";

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data.toString());
  } catch (err) {
    console.log(err.message);
  }
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const data = await fs.readFile(contactsPath);
    const records = JSON.parse(data.toString());
    const findRecord = records.find((record) => record.id === contactId);
    return findRecord ? findRecord : null;
  } catch (err) {
    console.log(err.message);
  }
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const data = await fs.readFile(contactsPath);
    const records = JSON.parse(data.toString());
    const findRecord = records.find((record) => record.id === contactId);
    const filteredRecords = records.filter((record) => record.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(filteredRecords));
    return findRecord ? findRecord : null;
  } catch (err) {
    console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  try {
    const data = await fs.readFile(contactsPath);
    const records = JSON.parse(data.toString());
    const newRecord = {
      id: crypto.randomUUID(),
      name: name,
      email: email,
      phone: phone,
    };
    records.push(newRecord);
    fs.writeFile(contactsPath, JSON.stringify(records));
    return newRecord;
  } catch (err) {
    console.log(err.message);
  }
}
export { listContacts };
export { getContactById };
export { removeContact };
export { addContact };
