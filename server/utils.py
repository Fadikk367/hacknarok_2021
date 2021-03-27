from pathlib import Path
from dotenv import load_dotenv
import os

base = Path(__file__).parent
ENV_PATH = str((base / ".env").resolve())


def env():
    load_dotenv(ENV_PATH)

    MONGO_USER = os.getenv('MONGO_USER')
    MONGO_PASS = os.getenv('MONGO_PASS')
    MONGO_HOST = os.getenv('MONGO_HOST')
    MONGO_OPT = os.getenv('MONGO_OPT')

    return \
    'mongodb+srv://%s:%s@%s/%s/consulti' \
    % (MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_OPT)

if __name__ == "__main__":
    print(env())