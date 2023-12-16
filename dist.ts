import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2), 'utf-8');

fs.copyFileSync('LICENSE', './dist/LICENSE');
