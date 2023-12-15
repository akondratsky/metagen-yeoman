import YeomanGenerator from 'yeoman-generator';
import path from 'node:path';
import { MetaGenerator, PayloadObject, Tree } from '@metagen/core';
import { mkdirpSync } from 'mkdirp';

export default class Generator extends YeomanGenerator {
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
