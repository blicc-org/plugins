# Plugin Development

This repository is a boilerplate for developing plugins to visualize data in [Blicc](https://blicc.org). 

## Quick start guide

### Prerequisites
You need to have [Git](https://git-scm.com/downloads), 
[Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install) installed to be able to run and build the project.

#### Versions
A greater or equal version of the listed softwares is required.
* Git 2.21.1
* Node.js 12.13.1
* Yarn 1.19.2
### Clone
If you haven't already cloned the repository within the monorepo, simply use the following command:

    git clone git@github.com:blicc-org/plugins.git

### Environment variables
To set the environment variables you simply need to make a copy of the `.env.example`
file and name it `.env`.

> Changing the environment variables enables you to also deploy your plugins to an production environment.

### Setup
For developing visualization plugins blicc uses the open source development tool [Storybook](https://storybook.js.org/). To set up the environment run the following command: 

    yarn start

### Access
Once the development setup is running you can access your plugins under the following link:

* [Development Suite](http://localhost:9090)

### Development

You will find the following simple plugin example in `/src/bundle/plugin/Plugin.js`. 

```js
export function Plugin(
  data = [],
  onDataUpdate = () => {},
  settings = {},
  setSettings = () => {}
) {
  return '<h1>Plugin example</h1>'
}
```

### Deploy

To deploy a plugin you just need to run the following command:

    yarn deploy

If the credentials are correct and the command has been successfully executed, you will then find the plugins in the application itself.
