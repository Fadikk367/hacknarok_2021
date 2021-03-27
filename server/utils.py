import environ
from pathlib import Path

base = Path(__file__).parent
ENV_PATH = str((base / ".env").resolve())


def env():
    envir = environ.Env(DEBUG=(bool, False))
    environ.Env.read_env(env_file=ENV_PATH)

    MONGO_USER = envir('MONGO_USER')
    MONGO_PASS = envir('MONGO_PASS')
    MONGO_HOST = envir('MONGO_HOST')
    MONGO_OPT = envir('MONGO_OPT')

    return \
    'mongodb+srv://%s:%s@%s/%s/consulti' \
    % (MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_OPT)

if __name__ == "__main__":
    print(env())