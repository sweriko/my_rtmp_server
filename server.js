import NodeMediaServer from 'node-media-server';

const config = {
  logType: 2,
  rtmp: {
    port: 1935,
    chunk_size: 6000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
};

const nms = new NodeMediaServer(config);
nms.run();

console.log('NodeMediaServer is running on rtmp://localhost:1935/live');
