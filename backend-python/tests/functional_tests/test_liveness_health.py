import pytest
from fastapi import status


@pytest.mark.asyncio
async def test_liveness_should_return_ok(client):
    # Act
    response = client.get("/api/health/liveness")

    # Assert
    assert response.status_code == status.HTTP_200_OK
