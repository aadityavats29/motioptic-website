import {appendFile, mkdir} from 'node:fs/promises';
import {join} from 'node:path';
export function validateInquiry(body) {
  const fields = JSON.parse(body);
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) throw Error('Invalid enquiry.');
  if (fields.website) throw Error('Invalid enquiry.');
  const limits = {firstName:120,lastName:120,email:254,interest:80,description:8000,budget:120,startDate:120};
  const record = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = fields[key] ?? '';
    if (typeof value !== 'string' || value.length > limit) throw Error('Invalid form field.');
    record[key] = value.trim();
  }
  if (!record.firstName || !record.description || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email)) throw Error('Complete the required fields.');
  if (!['Branding','UI/UX design','Web development','Animation','Not sure yet'].includes(record.interest)) throw Error('Choose a service.');
  return record;
}
export async function acceptInquiry(body, directory) {
  const record=validateInquiry(body);
  await mkdir(directory, {recursive:true,mode:0o700});
  await appendFile(join(directory,'inquiries.jsonl'), JSON.stringify({...record,receivedAt:new Date().toISOString()})+'\n', {mode:0o600});
}
