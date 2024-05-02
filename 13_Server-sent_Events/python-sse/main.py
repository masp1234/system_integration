from datetime import datetime
from fastapi import FastAPI, Request

# som event stream i javascript med begge headers
from fastapi.responses import StreamingResponse

from fastapi.templating import Jinja2Templates
import asyncio

app = FastAPI()

templates = Jinja2Templates(directory="templates")

@app.get("/")
def serve_root_page(request: Request):
    return templates.TemplateResponse("index.html", { "request": request})

@app.get("/sse")
def sse():
    return StreamingResponse(date_generator(), media_type="text/event-stream")

@app.get("/test")
def event():
    return StreamingResponse(event_generator(), media_type="text/event-stream")

async def date_generator():
    while True:
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        yield f"data: {now}\n\n"
        await asyncio.sleep(1)

async def event_generator():
    while True:
        yield 'data: hello\n\n'
        await asyncio.sleep(1)
        
        