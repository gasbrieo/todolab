import pytest
from fastapi import status
from fastapi.testclient import TestClient
from app.main import app


@pytest.mark.asyncio
async def test_liveness_should_return_ok():
    client = TestClient(app)

    response = client.get("/api/health/liveness")
    assert response.status_code == status.HTTP_200_OK


@pytest.mark.asyncio
async def test_readiness_should_return_service_unavailable():
    client = TestClient(app)

    response = client.get("/api/health/readiness")
    assert response.status_code == status.HTTP_503_SERVICE_UNAVAILABLE
