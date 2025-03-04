from unittest.mock import Mock

import pytest

from app.core.health import HealthReport, HealthStatus
from app.presentation.routers.health_router import get_liveness, get_readiness
from tests.test_helpers import parse_json_response


@pytest.mark.asyncio
async def test_get_liveness_when_healthy_report_should_return_ok(mocker):
    # Arrange
    mock_health_service: Mock = mocker.Mock()
    mock_health_service.check_liveness.return_value = HealthReport(
        status=HealthStatus.HEALTHY
    )

    # Act
    response = await get_liveness(service=mock_health_service)
    content = parse_json_response(response, HealthReport)

    # Assert
    assert response.status_code == 200
    assert content == mock_health_service.check_liveness.return_value

    mock_health_service.check_liveness.assert_called_once()


@pytest.mark.asyncio
async def test_get_liveness_when_unhealthy_report_should_return_service_unavailable(
    mocker,
):
    # Arrange
    mock_health_service: Mock = mocker.Mock()
    mock_health_service.check_liveness.return_value = HealthReport(
        status=HealthStatus.UNHEALTHY
    )

    # Act
    response = await get_liveness(service=mock_health_service)
    content = parse_json_response(response, HealthReport)

    # Assert
    assert response.status_code == 503
    assert content == mock_health_service.check_liveness.return_value

    mock_health_service.check_liveness.assert_called_once()


@pytest.mark.asyncio
async def test_get_readiness_when_healthy_report_should_return_ok(mocker):
    # Arrange
    mock_health_service: Mock = mocker.Mock()
    mock_health_service.check_readiness.return_value = HealthReport(
        status=HealthStatus.HEALTHY
    )

    # Act
    response = await get_readiness(service=mock_health_service)
    content = parse_json_response(response, HealthReport)

    # Assert
    assert response.status_code == 200
    assert content == mock_health_service.check_readiness.return_value

    mock_health_service.check_readiness.assert_called_once()


@pytest.mark.asyncio
async def test_get_readiness_when_unhealthy_report_should_return_service_unavailable(
    mocker,
):
    # Arrange
    mock_health_service: Mock = mocker.Mock()
    mock_health_service.check_readiness.return_value = HealthReport(
        status=HealthStatus.UNHEALTHY
    )

    # Act
    response = await get_readiness(service=mock_health_service)
    content = parse_json_response(response, HealthReport)

    # Assert
    assert response.status_code == 503
    assert content == mock_health_service.check_readiness.return_value

    mock_health_service.check_readiness.assert_called_once()
