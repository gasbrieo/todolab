from typing import List

from app.core.health import HealthCheckResult, HealthReport, HealthStatus, IHealthCheck


class HealthService:
    def __init__(self, checkers: List[IHealthCheck]):
        self.checkers = checkers

    def check_liveness(self) -> HealthReport:
        return HealthReport(status=HealthStatus.HEALTHY)

    def check_readiness(self) -> HealthReport:
        overall_status = HealthStatus.HEALTHY
        entries = []

        for checker in self.checkers:
            result = checker.check()
            entries.append(result)
            if result.status == HealthStatus.UNHEALTHY:
                overall_status = HealthStatus.UNHEALTHY

        return HealthReport(status=overall_status, entries=entries)


class DatabaseHealthCheck(IHealthCheck):
    def check(self) -> HealthCheckResult:
        return HealthCheckResult.healthy("Database", "Database is responsive.")


class KeycloakHealthCheck(IHealthCheck):
    def check(self) -> HealthCheckResult:
        return HealthCheckResult.unhealthy("Keycloak", "Keycloak is unavailable.")
