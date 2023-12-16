import YeomanGenerator, { GeneratorOptions } from 'yeoman-generator';
import path from 'node:path';
import { MetaGenerator, PayloadObject, Tree } from '@metagen/core';
import { mkdirpSync } from 'mkdirp';

export class Generator<T extends GeneratorOptions = GeneratorOptions> extends YeomanGenerator<T> {
  /**
   * Renders Metagen template
   * @param template - path to a meta template, does not support wildcards
   * @param destination - the folder to which templates should be rendered
   * @param payload - context for rendering templates
   */
  public renderMetaTemplate(
    template: string,
    destination: string,
    payload: PayloadObject,
  ) {
    mkdirpSync(this.destinationPath(destination));
    const { trees } = new MetaGenerator(template).generate({
      destination,
      payload,
      isDryRun: true,
      isSilent: true,
    });
    trees.forEach((node) => this.writeTree(node, destination));
  }

  private writeTree(node: Tree, destination: string) {
    const filename = path.join(destination, node.name);
    if (node.isDirectory) {
      node.children.forEach((child) => {
        this.writeTree(child, filename);
      });
    } else {
      this.fs.write(filename, node.content);
    }
  }
}
