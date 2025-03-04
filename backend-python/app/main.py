from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from app.presentation.routes import routers as routers

app = FastAPI()


@app.get("/", include_in_schema=False)
async def root():
    return RedirectResponse(url="/docs")


app.include_router(routers, prefix="/api")
