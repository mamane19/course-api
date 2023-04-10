import { existsSync } from 'fs';
import { resolve } from 'path';

/**
 * It returns the path to the environment file that should be used for the current environment
 *
 * "We are doing this because we are using different environment files for development and production."
 *
 * @param {string} dest - The destination directory of the project.
 * @returns The path to the .env file.
 */
export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}
