import path from 'node:path';
import helpers from 'yeoman-test';
// import assert from 'yeoman-assert';

const runGenerator = () => helpers.run(path.join(process.cwd(), 'tests', 'generator.ts'));

describe('test', () => {
  it('testtt', async () => {
    await runGenerator().inDir('output');
  });
});
