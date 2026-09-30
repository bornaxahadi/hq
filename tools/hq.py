#!/usr/bin/env python3
"""Encrypt / decrypt the dashboard data file.

The password is never stored in this repo. Pass it with the HQ_PASSWORD env var.

  HQ_PASSWORD=... python3 tools/hq.py decrypt data.enc  > data.json
  HQ_PASSWORD=... python3 tools/hq.py encrypt data.json > data.enc

Format (JSON): {"v":1,"kdf":"PBKDF2-SHA256","iter":N,"salt":b64,"iv":b64,"ct":b64}
AES-256-GCM; matches the Web Crypto code in index.html.
"""
import base64, json, os, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes

ITER = 600_000


def _key(pw: str, salt: bytes, it: int) -> bytes:
    return PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=it).derive(pw.encode())


def encrypt(plain: bytes, pw: str) -> str:
    salt, iv = os.urandom(16), os.urandom(12)
    ct = AESGCM(_key(pw, salt, ITER)).encrypt(iv, plain, None)
    b = lambda x: base64.b64encode(x).decode()
    return json.dumps({"v": 1, "kdf": "PBKDF2-SHA256", "iter": ITER, "salt": b(salt), "iv": b(iv), "ct": b(ct)})


def decrypt(blob: str, pw: str) -> bytes:
    d = json.loads(blob)
    salt, iv, ct = (base64.b64decode(d[k]) for k in ("salt", "iv", "ct"))
    return AESGCM(_key(pw, salt, d["iter"])).decrypt(iv, ct, None)


if __name__ == "__main__":
    pw = os.environ.get("HQ_PASSWORD")
    if not pw or len(sys.argv) != 3 or sys.argv[1] not in ("encrypt", "decrypt"):
        sys.exit("usage: HQ_PASSWORD=... hq.py encrypt|decrypt FILE")
    data = open(sys.argv[2], "rb").read()
    if sys.argv[1] == "encrypt":
        json.loads(data)  # must be valid JSON
        sys.stdout.write(encrypt(data, pw))
    else:
        sys.stdout.write(decrypt(data.decode(), pw).decode())
