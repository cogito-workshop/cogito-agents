/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto, { BinaryLike } from 'crypto';

class MerkleNode {
  left: MerkleNode | null;
  right: MerkleNode | null;

  constructor(
    public hash: string,
    public filename = '',
  ) {
    this.hash = hash;
    this.filename = filename;
    this.left = null;
    this.right = null;
  }
}

export class MerkleTree {
  root: MerkleNode | null;

  constructor() {
    this.root = null;
  }

  // calculating data's hash
  static hash(data: BinaryLike) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  // creating Merkle Tree
  buildTree(files: Record<string, BinaryLike>) {
    // creating leaf node
    const leaves = Object.entries(files).map(([filename, content]) => {
      const hash = MerkleTree.hash(content);
      return new MerkleNode(hash, filename);
    });

    // building tree
    this.root = this.buildTreeFromNodes(leaves);
    return this.root;
  }

  // building tree from node array
  buildTreeFromNodes(nodes: MerkleNode[]): MerkleNode | null {
    if (nodes.length === 0) return null;
    if (nodes.length === 1) return nodes[0];

    const parents: MerkleNode[] = [];

    // picking two nodes to combine at a time
    for (let i = 0; i < nodes.length; i += 2) {
      const left = nodes[i];
      const right = i + 1 < nodes.length ? nodes[i + 1] : null;

      // caculating parent node hash
      const combinedHash = right
        ? MerkleTree.hash(left.hash + right.hash)
        : left.hash;

      const parent = new MerkleNode(combinedHash);
      parent.left = left;
      parent.right = right;

      parents.push(parent);
    }

    // building previous level node recusively
    return this.buildTreeFromNodes(parents);
  }

  // finding different files
  findDifferences(otherTree: any) {
    const differences: string[] = [];

    const compare = (
      leftNode: MerkleNode | null,
      rightNode: MerkleNode | null,
    ) => {
      // if they hash values are equal, indicates that all the files are same below current branch
      if (!leftNode || !rightNode || leftNode.hash === rightNode.hash) {
        return;
      }

      // if the node is leaf node(when it has filename), indicates this file is difference
      if (leftNode.filename) {
        differences.push(leftNode.filename);
        return;
      }

      // recursively compares left and right subtrees
      compare(leftNode.left, rightNode.left);
      compare(leftNode.right, rightNode.right);
    };

    compare(this.root, otherTree.root);

    return differences;
  }
}

// use cases
function main() {
  // simulating initial files content
  const originalFiles = {
    'file1.txt': 'Hello',
    'file2.txt': 'World',
    'file3.txt': 'Merkle',
    'file4.txt': 'Tree',
  };

  // simulating modified file content（file2.txt is modifies）
  const modifiedFiles = {
    'file1.txt': 'Hello',
    'file2.txt': 'World', // modifying the file
    'file3.txt': 'TypeScript',
    'file4.txt': 'Tree',
  };

  // building raw files Merkle Tree（simulates cloud）
  const cloudTree = new MerkleTree();
  cloudTree.buildTree(originalFiles);

  // building modified files Merkle Tree（simulates local）
  const localTree = new MerkleTree();
  localTree.buildTree(modifiedFiles);

  // retrieving differences
  const differences = localTree.findDifferences(cloudTree);
  console.log('files to be synchronized:', differences);

  // print whole progress
  console.log('\nvalidation:');
  console.log('compare root node hash:');
  console.log('Cloud:', localTree.root?.hash);
  console.log('Local:', cloudTree.root?.hash);
}

main();
