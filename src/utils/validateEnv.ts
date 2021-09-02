import { cleanEnv, str, num } from "envalid";

import { NodeEnvEnum } from "../infra/config";

const getEnvVars = (): EnvObject => {
  const EnvVars = cleanEnv(process.env, {
    NODE_ENV: str({ choices: Object.values(NodeEnvEnum) }),
    PORT: num(),
    SECRET: str()
  });

  return EnvVars as EnvObject;
};

export const EnvVars = getEnvVars();
