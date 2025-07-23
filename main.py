from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

# fastapi 인스턴스 생성
app = FastAPI()

# static 파일
app.mount("/static/", StaticFiles(directory="static"), name="static")

# templates 파일
templates = Jinja2Templates(directory="templates")

# main page
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# metting page
@app.get("/meet", response_class=HTMLResponse)
async def meet_root(request: Request, day: int):
    return templates.TemplateResponse("meet.html",{"request": request, "day": day})