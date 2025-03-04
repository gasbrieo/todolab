from pytest import raises

from app.core.health import HealthCheckResult, HealthReport, HealthStatus, IHealthCheck


class TestHealthCheckResult:
    def test_healthy_should_create_healthy_healthcheckresult(self):
        # Arrange
        name = "Database"
        description = "Database is healthy."

        # Act
        result = HealthCheckResult.healthy(name, description)

        # Assert
        assert result.status == HealthStatus.HEALTHY
        assert result.name == name
        assert result.description == description

    def test_degraded_should_create_degraded_healthcheckresult(self):
        # Arrange
        name = "Database"
        description = "Database is degraded."

        # Act
        result = HealthCheckResult.degraded(name, description)

        # Assert
        assert result.status == HealthStatus.DEGRADED
        assert result.name == name
        assert result.description == description

    def test_unhealthy_should_create_unhealthy_healthcheckresult(self):
        # Arrange
        name = "Database"
        description = "Database is unhealthy."

        # Act
        result = HealthCheckResult.unhealthy(name, description)

        # Assert
        assert result.status == HealthStatus.UNHEALTHY
        assert result.name == name
        assert result.description == description


class TestHealthReport:
    def test_init_with_entries_should_set_properties_properly(self):
        # Arrange
        status = HealthStatus.HEALTHY
        healthy_result = HealthCheckResult.healthy("Database", "Database is healthy.")
        degraded_result = HealthCheckResult.degraded(
            "Database", "Database is degraded."
        )

        # Act
        report = HealthReport(status=status, entries=[healthy_result, degraded_result])

        # Assert
        assert report.status == status
        assert len(report.entries) == 2
        assert report.entries[0] == healthy_result
        assert report.entries[1] == degraded_result

    def test_init_without_entries_should_set_properties_properly(self):
        # Arrange
        status = HealthStatus.HEALTHY

        # Act
        report = HealthReport(status=status)

        # Assert
        assert report.status == status
        assert report.entries is None


class TestIHealthCheck:
    def test_check_should_raise_not_implementend_error(self):
        # Arrange
        class BrokenHealthCheck(IHealthCheck):
            def check(self) -> HealthCheckResult:
                return super().check()

        # Act
        broken = BrokenHealthCheck()

        # Assert
        with raises(NotImplementedError):
            broken.check()
