from app.core.health import HealthReport, HealthStatus, IHealthCheck


class HealthService:
    def __init__(self, checks: list[IHealthCheck]):
        self.checks = checks

    def check_liveness(self) -> HealthReport:
        return HealthReport(status=HealthStatus.HEALTHY)

    def check_readiness(self) -> HealthReport:
        overall_status = HealthStatus.HEALTHY
        entries = []

        for checker in self.checks:
            result = checker.check()
            entries.append(result)
            if result.status == HealthStatus.UNHEALTHY:
                overall_status = HealthStatus.UNHEALTHY

        return HealthReport(status=overall_status, entries=entries)
