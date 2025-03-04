import pytest
from fastapi import status


@pytest.mark.asyncio
async def test_readiness_should_return_service_unavailable(client):
    # Act
    response = client.get("/api/health/readiness")

    # Assert
    assert response.status_code == status.HTTP_503_SERVICE_UNAVAILABLE
