from fastapi import FastAPI,Depends, HTTPException
from src.controllers.demo import controller_demo
from src.controllers.websocket import websocket_endpoint
from starlette.websockets import WebSocket
from src.middlewares.keycloak import checkSessionKeycloak
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["Content-Type", "Authorization"],
)
 
# Rota pública
@app.get("/")
async def get_demo():
   return controller_demo()

@app.get("/safe")
async def safe(user: dict = Depends(checkSessionKeycloak)):
   return controller_demo()

@app.websocket("/ws")
async def websocket_(websocket: WebSocket):
   websocket_endpoint()
