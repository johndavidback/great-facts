const fs = require('fs');
const path = require('path');

const factsPath = path.join(__dirname, '../src/facts.js');
const content = fs.readFileSync(factsPath, 'utf8');

const factsRegex = /export const facts = \[([\s\S]*?)\];/;
const match = content.match(factsRegex);

if (!match) {
  console.error('Error: Could not find facts array in src/facts.js');
  process.exit(1);
}

const factsString = match[1];
const factLines = factsString.split(/\r?\n/).map(line => line.trim()).filter(line => line.startsWith('"') && line.endsWith('",'));

const facts = factLines.map(line => line.substring(1, line.length - 2)); // Remove quotes and comma

const uniqueFacts = new Set();
const duplicates = new Set();

facts.forEach(fact => {
  if (uniqueFacts.has(fact)) {
    duplicates.add(fact);
  } else {
    uniqueFacts.add(fact);
  }
});

if (duplicates.size > 0) {
  console.error('Error: Duplicate facts found in src/facts.js:');
  duplicates.forEach(duplicate => console.error(`- ${duplicate}`));
  process.exit(1);
} else {
  console.log('No duplicate facts found.');
  process.exit(0);
}

