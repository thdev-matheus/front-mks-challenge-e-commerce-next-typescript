import axios from "axios";

export const api = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 7000,
  headers: {
    "X-Parse-Application-Id": "CypLAzLOM37wHJWf9cgadXtqQ3btAH1TqmtWXfQt",
    "X-Parse-REST-API-Key": "NZOHelPacL7o8XbN6UvWkiTIXaxuXC7pRSTUbfx1",
    "Content-Type": "application/json",
  },
});
