from abc import ABC, abstractmethod
from enum import Enum
from typing import List, Optional
from pydantic import BaseModel


class HealthStatus(str, Enum):
    HEALTHY = "Healthy"
    DEGRADED = "Degraded"
    UNHEALTHY = "Unhealthy"


class HealthCheckResult(BaseModel):
    name: str
    description: str
    status: HealthStatus

    @classmethod
    def healthy(cls, name: str, description: str):
        return cls(status=HealthStatus.HEALTHY, name=name, description=description)

    @classmethod
    def degraded(cls, name: str, description: str):
        return cls(status=HealthStatus.DEGRADED, name=name, description=description)

    @classmethod
    def unhealthy(cls, name: str, description: str):
        return cls(status=HealthStatus.UNHEALTHY, name=name, description=description)


class HealthReport(BaseModel):
    status: HealthStatus
    entries: Optional[List[HealthCheckResult]] = None


class IHealthCheck(ABC):
    @abstractmethod
    def check(self) -> HealthCheckResult:
        pass
