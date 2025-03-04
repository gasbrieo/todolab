from unittest.mock import Mock

from app.core.health import HealthCheckResult, HealthStatus
from app.infrastructure.health.health_service import (
    HealthService,
)


class TestHealthService:
    def test_check_liveness_should_return_healthy(self):
        # Arrange
        service = HealthService(checks=[])

        # Act
        result = service.check_liveness()

        # Assert
        assert result.status == HealthStatus.HEALTHY
        assert result.entries is None

    def test_check_readiness_should_return_healthy_when_all_checks_pass(self, mocker):
        # Arrange
        mock_healthy_check: Mock = mocker.Mock()
        mock_healthy_check.check.return_value = HealthCheckResult(
            status=HealthStatus.HEALTHY,
            name="Healthy Name",
            description="Healthy Description",
        )

        service = HealthService(checks=[mock_healthy_check])

        # Act
        result = service.check_readiness()

        # Assert
        assert result.status == HealthStatus.HEALTHY
        assert len(result.entries) == 1
        assert result.entries[0] == mock_healthy_check.check.return_value

        mock_healthy_check.check.assert_called_once()

    def test_check_readiness_should_return_unhealthy_when_a_check_fails(self, mocker):
        # Arrange
        mock_healthy_check: Mock = mocker.Mock()
        mock_healthy_check.check.return_value = HealthCheckResult(
            status=HealthStatus.HEALTHY,
            name="Healthy Name",
            description="Healthy Description",
        )

        mock_unhealthy_check: Mock = mocker.Mock()
        mock_unhealthy_check.check.return_value = HealthCheckResult(
            status=HealthStatus.UNHEALTHY,
            name="Unhealthy Name",
            description="Unhealthy Description",
        )

        service = HealthService(
            checks=[
                mock_healthy_check,
                mock_unhealthy_check,
            ]
        )

        # Act
        result = service.check_readiness()

        # Assert
        assert result.status == HealthStatus.UNHEALTHY
        assert len(result.entries) == 2
        assert result.entries[0] == mock_healthy_check.check.return_value
        assert result.entries[1] == mock_unhealthy_check.check.return_value

        mock_healthy_check.check.assert_called_once()
        mock_unhealthy_check.check.assert_called_once()
