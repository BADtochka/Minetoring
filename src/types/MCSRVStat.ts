export interface OnlineServer {
  online: boolean;
  ip: string;
  port: number;
  hostname: string;
  debug: Debug;
  version: string;
  protocol: Protocol;
  icon: string;
  software: string;
  map: Map;
  gamemode: string;
  serverid: string;
  eula_blocked: boolean;
  motd: Motd;
  players: Players;
  plugins: Plugin[];
  mods: Mod[];
  info: Info;
}

export interface OfflineServer {
  online: boolean;
  ip: string;
  port: number;
  hostname: string;
  debug: Debug;
}

export interface Debug {
  ping: boolean;
  query: boolean;
  bedrock: boolean;
  srv: boolean;
  querymismatch: boolean;
  ipinsrv: boolean;
  cnameinsrv: boolean;
  animatedmotd: boolean;
  cachehit: boolean;
  cachetime: number;
  cacheexpire: number;
  apiversion: number;
}

export interface Protocol {
  version: number;
  name: string;
}

export interface Map {
  raw: string;
  clean: string;
  html: string;
}

export interface Motd {
  raw: string[];
  clean: string[];
  html: string[];
}

export interface Players {
  online: number;
  max: number;
  list: List[];
}

export interface List {
  name: string;
  uuid: string;
}

export interface Plugin {
  name: string;
  version: string;
}

export interface Mod {
  name: string;
  version: string;
}

export interface Info {
  raw: string[];
  clean: string[];
  html: string[];
}
