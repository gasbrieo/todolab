from app.core.health import HealthStatus
from app.infrastructure.health.checks.keycloak_health_check import KeycloakHealthCheck


class TestKeycloakHealthCheck:
    def test_check_should_return_unhealthy(self):
        # Act
        result = KeycloakHealthCheck().check()

        # Assert
        assert result.status == HealthStatus.UNHEALTHY
        assert result.name == "Keycloak"
        assert result.description == "Keycloak is unavailable."
