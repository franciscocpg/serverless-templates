# serverless-templates

Opinionated serverless templates.


## aws-nodejs-typescript

A nodejs using typescript project with AWS as provider.

It uses jest as test framework and it has an opinonated configuration
for linting using `ts-lint` and `tslint-eslint-rules`.

### Installing

```sh
sls create -u https://github.com/franciscocpg/serverless-templates/tree/master/aws-nodejs-typescript --path aws-nodejs-typescript
cd aws-nodejs-typescript
yarn
```

### Invoking locally

```sh
yarn sls invoke local -f hello
```


### Invoking using serverless-offline

Open a terminal and run:
```sh
yarn sls offline start
```

Open another terminal and run:
```sh
curl localhost:3000/hello
```
