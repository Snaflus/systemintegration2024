from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

class Spacecraft(BaseModel):
    id: int
    name: str

spacecrafts = [
    Spacecraft(id=0, name="Voyager"),
    Spacecraft(id=1, name="Apollo"),
    Spacecraft(id=2, name="Hubble"),
    Spacecraft(id=3, name="ISS"),
]
router = APIRouter()

@router.get("/api/spacecraft", tags=["spacecrafts"], response_model=list[Spacecraft])
async def _():
    return spacecrafts

@router.get("/api/spacecraft/{id}", tags=["spacecrafts"], response_model=Spacecraft)
async def _(id: int):
    for spacecraft in spacecrafts:
        if spacecraft.id == id:
            return spacecraft
    raise HTTPException(status_code=404, detail="Spacecraft not found")

@router.post("/api/spacecraft", tags=["spacecrafts"], response_model=Spacecraft)
async def _(spacecraft: Spacecraft):
    spacecrafts.append(spacecraft)
    return spacecraft