from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse

from app.core.health import HealthReport
from app.infrastructure.health.health_service import (
    HealthService,
    HealthStatus,
)
from app.presentation.dependencies import get_health_service

router = APIRouter(
    prefix="/health",
    tags=["health"],
)


@router.get(
    "/liveness",
    summary="Liveness probe",
    description="Checks if the API process is running.",
    responses={
        status.HTTP_200_OK: {"description": "API is running.", "model": HealthReport},
        status.HTTP_503_SERVICE_UNAVAILABLE: {
            "description": "Service Unavailable.",
            "model": HealthReport,
        },
    },
)
async def get_liveness(
    service: HealthService = Depends(get_health_service),
) -> JSONResponse:
    health_report = service.check_liveness()

    if health_report.status == HealthStatus.HEALTHY:
        return JSONResponse(
            content=health_report.model_dump(), status_code=status.HTTP_200_OK
        )

    return JSONResponse(
        content=health_report.model_dump(),
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
    )


@router.get(
    "/readiness",
    summary="Readiness probe",
    description="Checks if the API and its dependencies are ready.",
    responses={
        status.HTTP_200_OK: {
            "description": "API and dependencies are healthy.",
            "model": HealthReport,
        },
        status.HTTP_503_SERVICE_UNAVAILABLE: {
            "description": "One or more dependencies are unhealthy.",
            "model": HealthReport,
        },
    },
)
async def get_readiness(
    service: HealthService = Depends(get_health_service),
) -> JSONResponse:
    health_report = service.check_readiness()

    if health_report.status == HealthStatus.HEALTHY:
        return JSONResponse(
            content=health_report.model_dump(), status_code=status.HTTP_200_OK
        )

    return JSONResponse(
        content=health_report.model_dump(),
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
    )
