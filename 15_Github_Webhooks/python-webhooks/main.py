from fastapi import FastAPI, Request, Response

import json

app = FastAPI()

@app.post("/githubwebhookjson")
# Vigtigt at specifere typen
async def github_webhook(request: Request):
    data = await request.body()

    # uden json load, er data en binary string, og ikke en dict som efter json.loads()
    print(json.loads(data))
    return


@app.post("/githubwebhookform")
async def github_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded":
        form_data = await request.form()
        payload = form_data('payload')
        print(form_data)
        response.status_code = 200
    else:
        response.status_code = 400

