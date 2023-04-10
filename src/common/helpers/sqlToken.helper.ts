import { Request } from 'express';
/**
 * @description This is a test when I wanted to hijack the token being received from the old API
 */

export class SqlTokenHelper {
  public static getSqlTokenFromRequest(req: Request): string {
    const token = req.headers.authorization;
    if (token) {
      return this.transformToken(token);
    }
    return null;
  }

  protected static transformToken(token: string): string {
    let newToken = token;
    if (token) {
      newToken = token.replace('Bearer ', '');
    }
    return newToken;
  }
}
