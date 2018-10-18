import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export class Factory {
  public static newAPIGatewayProxyEvent(overwrite?: any): APIGatewayProxyEvent {
    const event = {
      body: 'hi',
      headers: {},
      httpMethod: 'GET',
      isBase64Encoded: false,
      path: '/',
      pathParameters: null,
      queryStringParameters: null,
      stageVariables: null,
      requestContext: {
        accountId: '1',
        apiId: '1',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: null,
          apiKey: null,
          caller: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          sourceIp: 'ip',
          user: null,
          userAgent: null,
          userArn: null,
        },
        requestId: '1',
        requestTimeEpoch: 1,
        resourceId: '1',
        resourcePath: 'a',
        stage: 'stage',
      },
      resource: 'a',
    };

    return Object.assign({}, event, overwrite);
  }

  public static newContext(overwrite?: any): Context {
    const context = {
      awsRequestId: 'a',
      callbackWaitsForEmptyEventLoop: false,
      functionName: 'f',
      functionVersion: '1',
      invokedFunctionArn: 'a',
      logGroupName: 'a',
      logStreamName: 'a',
      memoryLimitInMB: 2,
      getRemainingTimeInMillis: () => 1,
      done: (_error?: Error, _result?: any) => { return; },
      fail: (_error: Error | string) => { return; },
      succeed: (_messageOrObject: any) => { return; },
    };

    return Object.assign({}, context, overwrite);
  }
}
