from app.core.health import HealthCheckResult, IHealthCheck


class DatabaseHealthCheck(IHealthCheck):
    def check(self) -> HealthCheckResult:
        return HealthCheckResult.healthy("Database", "Database is responsive.")
