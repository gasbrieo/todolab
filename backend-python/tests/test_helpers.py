import json
from typing import TypeVar

from fastapi.responses import JSONResponse
from pydantic import BaseModel

T = TypeVar("T", bound=BaseModel)


def parse_json_response(response: JSONResponse, model: type[T]) -> T:
    return model.model_validate(json.loads(response.body.decode()))
