from fastapi import FastAPI

import httpx

app = FastAPI()


@app.get("/all-ehr-data", summary="Return EHRs data (world state)")
async def all_ehr_data():
    res = httpx.get(
        "http://34.136.191.235:3000/api/assets",
        headers={"x-api-key": "0e7800c7-9632-49a5-8170-151b010e4655"},
    )
    return {"all ehrs data": res.json()}

@app.get("/ehr-history/{ehr_id}", summary="Get certain EHR's history of change (ledger)")
async def ehr_history(ehr_id):
    res = httpx.get(
        f"http://34.136.191.235:3000/api/assets/{ehr_id}",
        headers={"x-api-key": "0e7800c7-9632-49a5-8170-151b010e4655"},
    )
    return {"message": res.json()}
