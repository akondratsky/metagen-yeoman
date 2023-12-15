import Generator from '../src/Generator';

export default class extends Generator {
  writing() {
    this.renderMetaTemplate(
      this.templatePath(),
      this.destinationPath('test_folder'),
      {
        persons: [
          { name: 'John' },
          { name: 'Robert' },
        ],
        variable: '42',
      },
    );
  }
}