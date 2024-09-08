
## Add Shops
### Mehtod `POST` 
### URL `http://localhost:5000/api/v1/add/shop`

### Required Details
Form Data
- Image of the shop (1), `name='image' type='file'`
- Name of the shop, `name='shopName' type='text'`
- Coordinates, `name='coordinates' type='text'`
- owner_id, `name='owner_id' type='text'`

### Response 
```javascript
{
    "message": "Shop Registered Successfully",
    "success": true,
    "data": {
        "shopName": "dangerous shop",
        "owner_id": "66dc9620bafd140e16935761",
        "type": "Feature",
        "properties": {
            "description": "dangerous shop",
            "icon": "https://apis.mapmyindia.com/map_v3/1.png"
        },
        "geometry": {
            "coordinates": [
                22.29284936071684,
                73.2816371489794
            ],
            "type": "Point"
        },
        "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/images%2F1725788970469?alt=media&token=00513a6c-3a43-4809-a5af-9d914e2f4f59",
        "_id": "66dd732b2b662210f0461eac",
        "createdAt": "2024-09-08T09:49:31.604Z",
        "__v": 0
    }
}
```

## Get Nearest Shops from Users current Location
### Mehtod `GET` 
### URL `http://localhost:5000/api/v1/get/nearestShops`
### Required Details
JSON Data
- Current user coordinates like below
```javascript
{
    "coordinates": [22.2798972, 73.320748]
}
```

### Response 
- Distances are in KM (Kilo Meters)
- Durations are in units of Minutes
```javascript
{
    "message": "Locations fetched successfully",
    "data": [
        {
            "owner_id": "66dc4105b7fb081c26da0410",
            "shopName": "CV Raman Stores",
            "distance": "0.18",
            "duration": "0.70"
        },
        {
            "owner_id": "66dc4105b7fb081c26da0410",
            "shopName": "Tandor Stores",
            "distance": "3.29",
            "duration": "5.37"
        },
        {
            "owner_id": "66dc4105b7fb081c26da0410",
            "shopName": "Apollo Stores",
            "distance": "2.37",
            "duration": "4.50"
        }
    ]
}
```

