# REST API with Express JS and Prisma ORM

#### Learn API system with Express JS and Prisma ORM

## Endpoint from this Data

### Data ini terdiri dari 2 tabel database, yaitu tabel Sampel dan table Sensor

## For Sample Table

### GET /sample

```bash
curl -X GET http://localhost:3000/sample
```

### Response for the data

```json
{
  "data": [
    {
      "id": 2,
      "avg_volt": 3.6,
      "concentration": 0.97,
      "timestamps": "2025-02-11T18:31:39.341Z"
    },
    {
      "id": 3,
      "avg_volt": 3.98,
      "concentration": 0.97,
      "timestamps": "2025-02-11T18:31:39.865Z"
    },
    {
      "id": 4,
      "avg_volt": 4.34,
      "concentration": 0.81,
      "timestamps": "2025-02-11T18:31:40.230Z"
    },
    {
      "id": 5,
      "avg_volt": 3.32,
      "concentration": 0.77,
      "timestamps": "2025-02-11T18:31:40.605Z"
    },
    .....
  ],
  "status": "success"
}
```

### POST /sample

```bash
curl -X POST http://localhost:3000/sample -H 'Content-Type: application/json' -d '{"avg_volt": data, "concentration": data}'
```

### Response for the data

```json
{
  "status": "success"
}
```

### DELETE /sample

```bash
curl -X DELETE http://localhost:3000/sample/id
```

### Response API

```json
{
  "message": "Sample deleted successfully",
  "status": "success"
}
```

## For Sensor Data Table

### GET /sensor

```bash
curl -X GET http://localhost:3000/sensor
```

### Response API

```json
{
    ....
    {
            "id": 6,
            "volt": 4.61,
            "sample_id": 2,
            "timestamps": "2025-02-11T18:31:39.341Z"
        },
        {
            "id": 7,
            "volt": 4.11,
            "sample_id": 2,
            "timestamps": "2025-02-11T18:31:39.341Z"
        },
        {
            "id": 8,
            "volt": 3.55,
            "sample_id": 2,
            "timestamps": "2025-02-11T18:31:39.341Z"
        },
        {
            "id": 9,
            "volt": 3.96,
            "sample_id": 3,
            "timestamps": "2025-02-11T18:31:39.865Z"
        },
        {
            "id": 10,
            "volt": 4.33,
            "sample_id": 3,
            "timestamps": "2025-02-11T18:31:39.865Z"
        },
        {
            "id": 11,
            "volt": 3.77,
            "sample_id": 3,
            "timestamps": "2025-02-11T18:31:39.865Z"
        },
        {
            "id": 12,
            "volt": 4.2,
            "sample_id": 4,
            "timestamps": "2025-02-11T18:31:40.230Z"
        },
        {
            "id": 13,
            "volt": 2.48,
            "sample_id": 4,
            "timestamps": "2025-02-11T18:31:40.230Z"
        },
        {
            "id": 14,
            "volt": 3.01,
            "sample_id": 4,
            "timestamps": "2025-02-11T18:31:40.230Z"
        },
        .....
}
```
