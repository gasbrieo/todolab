from app.infrastructure.health.checks.database_health_check import DatabaseHealthCheck
from app.infrastructure.health.checks.keycloak_health_check import KeycloakHealthCheck
from app.infrastructure.health.health_service import HealthService


def get_health_service() -> HealthService:
    checks = [DatabaseHealthCheck(), KeycloakHealthCheck()]
    return HealthService(checks=checks)
