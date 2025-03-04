from fastapi import APIRouter

from app.presentation.endpoints.health import (
    router as health_router,
)

routers = APIRouter()
router_list = [health_router]

for router in router_list:
    routers.include_router(router)
