# @metagen/yeoman-generator

The class extending `yeoman-generator` with the method rendering [metagen](https://github.com/akondratsky/metagen) templates.

## How to use

Installation:

```sh
npm i yeoman-generator @metagen/yeoman-generator
```

Create your generator:

```ts
import { Generator } from '@metagen/yeoman-generator';

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

Follow the official [Yeoman documentation](https://yeoman.io/authoring/) for the details about creating generators.

## Website

Visit the website:

https://akondratsky.github.io/metagen/
