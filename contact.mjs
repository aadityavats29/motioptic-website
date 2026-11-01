import {appendFile, mkdir} from 'node:fs/promises';
import {join} from 'node:path';

export async function acceptInquiry(body, directory) {
  const fields = JSON.parse(body);
  for (const key of ['firstName','lastName','email','interest','description']) {
    if (typeof fields[key] !== 'string' || fields[key].length > 16000) throw new Error('Invalid form field.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) throw new Error('Enter a valid email address.');
  const record = Object.fromEntries(['firstName','lastName','email','interest','description'].map(key=>[key,fields[key]]));
  await mkdir(directory,{recursive:true,mode:0o700});
  await appendFile(join(directory,'inquiries.jsonl'),JSON.stringify({...record,receivedAt:new Date().toISOString()})+'\n',{mode:0o600});
}
