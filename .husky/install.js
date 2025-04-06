// .husky/install.js
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync, chmodSync } from 'node:fs';

if (!existsSync('.git')) {
  console.error('This is not a Git repository!');
  process.exit(1);
}

// Create .husky directory if it doesn't exist
if (!existsSync('.husky')) {
  mkdirSync('.husky');
}

// ✅ Create .husky/_ directory too
if (!existsSync('.husky/_')) {
  mkdirSync('.husky/_');
}

// Now safely write the .gitignore file inside .husky/_
writeFileSync('.husky/_/.gitignore', '*\n');

// Make sure .husky directory is executable (required for Git to run hooks)
chmodSync('.husky', 0o755);

// Set Git hook path
execSync('git config core.hooksPath .husky', { stdio: 'inherit' });

console.log('✅ Husky v9 installed and Git hooks path configured!');
