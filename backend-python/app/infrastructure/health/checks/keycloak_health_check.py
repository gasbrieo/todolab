from app.core.health import HealthCheckResult, IHealthCheck


class KeycloakHealthCheck(IHealthCheck):
    def check(self) -> HealthCheckResult:
        return HealthCheckResult.unhealthy("Keycloak", "Keycloak is unavailable.")
