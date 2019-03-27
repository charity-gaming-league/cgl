const { version } = require('./package.json');

const CGL_CONFIG = {
    name: 'Charity Gaming League',
    script: './app/server/dist/index.js',
    instances: 0,
    exec_mode: cluster,
    merge_logs: true,
    env_dev: {
        NODE_ENV: 'dev',
        CM_VERSION: version
    },
    env_qa: {
        NODE_ENV: 'qa',
        CM_VERSION: version
    },
    env_prod: {
        NODE_ENV: 'prod',
        CM_VERSION: version
    }
}

module.exports = {
    apps: [CGL_CONFIG]
}