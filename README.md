# @metagen/yeoman-generator

The class extending `yeoman-generator` with the method rendering [metagen](https://github.com/akondratsky/metagen) templates.

## How to use

Installation:

```sh
npm i yeoman-generator @metagen/yeoman-generator
```

Create your generator:

```ts
import Generator from '@metagen/yeoman-generator';

export default class extends Generator {
  writing() {
    this.renderMetaTemplate(
      this.templatePath(),
      this.destinationPath(),
      {
        // your payload object
      },
    );
  }
}
```

