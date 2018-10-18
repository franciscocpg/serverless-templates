import { APIGatewayProxyResult } from 'aws-lambda';

import { Factory } from '../test/factory';
import { hello } from './handler';

describe('Handler', () => {
  describe('#hello', () => {
    it('should return body', async () => {
      const event = Factory.newAPIGatewayProxyEvent();

      const result = await hello(
        event,
        Factory.newContext(),
        jest.fn(),
      ) as APIGatewayProxyResult;

      expect(result.statusCode).toBe(200);
      expect(result.body).toEqual(JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
      }));
    });
  });
});
