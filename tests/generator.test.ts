import path from 'node:path';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';

it('Yeoman generator works with Metagen', async () => {
  await helpers
    .run(path.join(process.cwd(), 'tests', 'generator.ts'))
    .inDir('tests/output');

  assert.file([
    'test_folder/John.txt',
    'test_folder/Robert.txt',
    'test_folder/hello/world.hbs',
  ]);

  assert.fileContent('test_folder/hello/world.hbs', '{{variable}}');
  assert.fileContent('test_folder/John.txt', '42');
  assert.fileContent('test_folder/Robert.txt', '42');
});
