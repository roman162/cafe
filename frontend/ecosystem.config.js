module.exports = {
  apps : [{
    name    : "lime_prod",
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    instances : "max",
    wait_ready: true,
    port: 3000,
    autorestart: true,
    max_memory_restart: '900M'
  },
  {
    name    : "lime_dev",
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'dev',
    instances : "max",
    wait_ready: true,
    port: 3000,
    autorestart: true,
    max_memory_restart: '900M'
  }
  ]
}
