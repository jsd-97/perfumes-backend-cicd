import { readFile } from 'node:fs/promises';
const RAW_DATA = './data/validImg.csv';

export async function getAllPerfumes() {
  try {
    const data = await readFile(RAW_DATA, { encoding: 'utf8' });
    return data.split('\r');
  } catch (err) {
    console.log(err);
  }
};
