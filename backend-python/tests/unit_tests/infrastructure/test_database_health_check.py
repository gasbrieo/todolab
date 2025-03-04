from app.core.health import HealthStatus
from app.infrastructure.health.checks.database_health_check import DatabaseHealthCheck


class TestDatabaseHealthCheck:
    def test_check_should_return_healthy(self):
        # Act
        result = DatabaseHealthCheck().check()

        # Assert
        assert result.status == HealthStatus.HEALTHY
        assert result.name == "Database"
        assert result.description == "Database is responsive."
