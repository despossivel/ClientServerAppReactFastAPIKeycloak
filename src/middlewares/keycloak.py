import logging
from src.config.keycloak_config import keycloak_config  
from fastapi import FastAPI, Depends, HTTPException, status
from keycloak import KeycloakOpenID

def get_keycloak_openid():
    return KeycloakOpenID(server_url=keycloak_config["auth-server-url"],
                          client_id=keycloak_config["client_id"],
                          realm_name=keycloak_config["realm_name"],
                          client_secret_key=keycloak_config["client_secret_key"])

async def checkSessionKeycloak(keycloak_openid: KeycloakOpenID = Depends(get_keycloak_openid)):
    try:
        token = keycloak_openid.token(keycloak_config["client_user"], keycloak_config["client_secret"])

        KEYCLOAK_PUBLIC_KEY = (
            "-----BEGIN PUBLIC KEY-----\n"
            + keycloak_openid.public_key()
            + "\n-----END PUBLIC KEY-----"
        )
        return keycloak_openid.decode_token(
            token['access_token'],
            key=KEYCLOAK_PUBLIC_KEY,
            options={"verify_signature": True, "verify_aud": False, "exp": True},
        )
    except Exception as e:
        logging.error(e)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
