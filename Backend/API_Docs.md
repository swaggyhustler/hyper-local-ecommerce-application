
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
## Get Products
### Mehtod `GET` 
### URL `http://localhost:5000/api/v1/products/:shopID`

### Required Details
- Shop ID in Path Parameters of URL required
### Response 
```javascript
{
    "message": "Products related to shop fetched successfully",
    "success": true,
    "data": [
        {
            "_id": "66dda3e8d4763fe8e80bafb7",
            "name": "Earphones",
            "price": 1200,
            "shop_id": "66dc4d48e54ef90efc394559",
            "description": "well reliable wireless earphones",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725801447732?alt=media&token=c772b28f-2f16-4566-af6c-a24f992c6f32",
            "__v": 0
        },
        {
            "_id": "66ddd9e6af4c87f386cc7b04",
            "name": "Books",
            "price": 1560,
            "shop_id": "66dc4d48e54ef90efc394559",
            "description": "Multiple books for kids",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815269695?alt=media&token=4d9594ed-361a-4b48-b1bd-854074c9b7b3",
            "__v": 0
        },
        {
            "_id": "66ddda2aaf4c87f386cc7b07",
            "name": "Tshirt",
            "price": 699,
            "shop_id": "66dc4d48e54ef90efc394559",
            "description": "Black Polo Tshirt with comfortable fit",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815337772?alt=media&token=d5a9dc2e-3d62-4ab6-b77f-adf2cda89b11",
            "__v": 0
        }
    ]
}
```

## Search Product
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

