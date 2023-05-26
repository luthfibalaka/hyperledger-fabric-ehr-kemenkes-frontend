from fastapi import FastAPI

import httpx

app = FastAPI()


@app.get("/all-ehr-data", summary="Return EHRs data (world state)")
async def all_ehr_data():
    res = httpx.get(
        "http://34.171.251.150:3000/api/assets",
        headers={"x-api-key": "4973b1ac-5e6b-4379-aa31-4a8ff80ba398"},
    )
    return {"all ehrs data": res.json()}

@app.get("/ehr-history/{ehr_id}", summary="Get certain EHR's history of change (ledger)")
async def ehr_history(ehr_id):
    res = httpx.get(
        f"http://34.171.251.150:3000/api/assets/{ehr_id}",
        headers={"x-api-key": "4973b1ac-5e6b-4379-aa31-4a8ff80ba398"},
    )
    return {"message": res.json()}
