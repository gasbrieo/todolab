import json
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Type, TypeVar

T = TypeVar("T", bound=BaseModel)


def parse_json_response(response: JSONResponse, model: Type[T]) -> T:
    return model.model_validate(json.loads(response.body.decode()))
