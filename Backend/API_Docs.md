
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
- JSON Data
    - current coordinates and keywords like below
    ```javascript
        {
            "coordinates": [22.28980539346936, 73.36314416711656],
            "keyword": "books"
        }
    ```

### Response 
```javascript
{
    "message": "Products fetched successfully",
    "success": true,
    "data": [
        {
            "_id": "66ddd9afaf4c87f386cc7b01",
            "name": "Story Books",
            "price": 1299,
            "shop_id": "66dc4d22e54ef90efc394556",
            "description": "Set of story books with different stories",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815215122?alt=media&token=e6f42798-c1db-4d5d-b2ee-863efbd33533",
            "__v": 0,
            "distance": "2.92",
            "shopName": "Apollo Stores"
        },
        {
            "_id": "66ddd9e6af4c87f386cc7b04",
            "name": "Books",
            "price": 1560,
            "shop_id": "66dc4d48e54ef90efc394559",
            "description": "Multiple books for kids",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815269695?alt=media&token=4d9594ed-361a-4b48-b1bd-854074c9b7b3",
            "__v": 0,
            "distance": "0.80",
            "shopName": "Tandor Stores"
        }
    ]
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
            "owner_id": "66dc9620bafd140e16935761",
            "shopName": "Golden Valley Stores",
            "shop_id": "66dd786b6badb7e84a17739d",
            "distance": "3.26",
            "duration": "6.13"
        },
        {
            "owner_id": "66dc9620bafd140e16935761",
            "shopName": "Prime Retailers",
            "shop_id": "66dd78b56badb7e84a1773a3",
            "distance": "2.22",
            "duration": "6.15"
        },
        {
            "owner_id": "66dc9620bafd140e16935761",
            "shopName": "SSVP Stores",
            "shop_id": "66dd78936badb7e84a1773a0",
            "distance": "5.99",
            "duration": "9.88"
        },
        {
            "owner_id": "66dc4105b7fb081c26da0410",
            "shopName": "Tandor Stores",
            "shop_id": "66dc4d48e54ef90efc394559",
            "distance": "6.36",
            "duration": "10.12"
        },
        {
            "owner_id": "66dc9620bafd140e16935761",
            "shopName": "dangerous shop",
            "shop_id": "66dd732b2b662210f0461eac",
            "distance": "5.67",
            "duration": "8.91"
        }
    ]
}
```


## Add Order 
### Mehtod `POST` 
### URL `http://localhost:5000/api/v1/add/order`
### Required Details
JSON Data
- User ID 
- Array of Products, something like below
```javascript
{
    "user_id": "66e474a0bd0653b02f6925fc",
    "products": [
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

### Response 
- 
```javascript
{
    "message": "Order details stored successfully",
    "success": true
}
```

## Get Orders
### Mehtod `GET` 
### URL `http://localhost:5000/api/v1/get/orders/:user_id`
### Required Details
Path Params Data
- User id is path parameter, like below
```javascript
{
    http://localhost:5000/api/v1/get/orders/66e474a0bd0653b02f6925fc
}
```

### Response 
- 
```javascript
{
    "message": "Orders fetched successfully",
    "success": true,
    "data": [
        {
            "_id": "66e527e046b982f30a5b12d1",
            "user_id": "66e474a0bd0653b02f6925fc",
            "product": {
                "_id": "66ddd9e6af4c87f386cc7b04",
                "name": "Books",
                "price": 1560,
                "shop_id": "66dc4d48e54ef90efc394559",
                "description": "Multiple books for kids",
                "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815269695?alt=media&token=4d9594ed-361a-4b48-b1bd-854074c9b7b3",
                "__v": 0
            },
            "createdAt": "2024-09-14T06:06:24.424Z",
            "updatedAt": "2024-09-14T06:06:24.424Z",
            "__v": 0
        },
        {
            "_id": "66e527e046b982f30a5b12d2",
            "user_id": "66e474a0bd0653b02f6925fc",
            "product": {
                "_id": "66ddda2aaf4c87f386cc7b07",
                "name": "Tshirt",
                "price": 699,
                "shop_id": "66dc4d48e54ef90efc394559",
                "description": "Black Polo Tshirt with comfortable fit",
                "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725815337772?alt=media&token=d5a9dc2e-3d62-4ab6-b77f-adf2cda89b11",
                "__v": 0
            },
            "createdAt": "2024-09-14T06:06:24.424Z",
            "updatedAt": "2024-09-14T06:06:24.424Z",
            "__v": 0
        },
        {
            "_id": "66e527e046b982f30a5b12d0",
            "user_id": "66e474a0bd0653b02f6925fc",
            "product": {
                "_id": "66dda3e8d4763fe8e80bafb7",
                "name": "Earphones",
                "price": 1200,
                "shop_id": "66dc4d48e54ef90efc394559",
                "description": "well reliable wireless earphones",
                "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725801447732?alt=media&token=c772b28f-2f16-4566-af6c-a24f992c6f32",
                "__v": 0
            },
            "createdAt": "2024-09-14T06:06:24.423Z",
            "updatedAt": "2024-09-14T06:06:24.423Z",
            "__v": 0
        }
    ]
}
```

## Get Shops owned by the Owner
### Mehtod `GET` 
### URL `http://localhost:5000/api/v1/get/shops/:owner_id`
### Required Details
Path Params Data
- Owner ID is path parameter, like below
```javascript
{
    http://localhost:5000/api/v1/get/shops/66dc4105b7fb081c26da0410
}
```

### Response 
- 
```javascript
{
    "message": "Shops associated to owner fetched successfully",
    "success": true,
    "data": [
        {
            "properties": {
                "description": "Golden Valley Stores",
                "icon": "https://apis.mapmyindia.com/map_v3/1.png"
            },
            "geometry": {
                "coordinates": [
                    22.281187818475377,
                    73.30624492834998
                ],
                "type": "Point"
            },
            "_id": "66dd786b6badb7e84a17739d",
            "shopName": "Golden Valley Stores",
            "owner_id": "66dc9620bafd140e16935761",
            "type": "Feature",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/images%2F1725790308646?alt=media&token=9f116186-e2e5-4e87-b986-196dc8b0502b",
            "createdAt": "2024-09-08T10:11:55.069Z",
            "__v": 0
        },
        {
            "properties": {
                "description": "SSVP Stores",
                "icon": "https://apis.mapmyindia.com/map_v3/1.png"
            },
            "geometry": {
                "coordinates": [
                    22.291998303962824,
                    73.29227953784118
                ],
                "type": "Point"
            },
            "_id": "66dd78936badb7e84a1773a0",
            "shopName": "SSVP Stores",
            "owner_id": "66dc9620bafd140e16935761",
            "type": "Feature",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/images%2F1725790354481?alt=media&token=f96d9a47-22df-476e-be0d-4ef0962aacb2",
            "createdAt": "2024-09-08T10:12:35.856Z",
            "__v": 0
        },
        {
            "properties": {
                "description": "Prime Retailers",
                "icon": "https://apis.mapmyindia.com/map_v3/1.png"
            },
            "geometry": {
                "coordinates": [
                    22.299435936858135,
                    73.30253217758128
                ],
                "type": "Point"
            },
            "_id": "66dd78b56badb7e84a1773a3",
            "shopName": "Prime Retailers",
            "owner_id": "66dc9620bafd140e16935761",
            "type": "Feature",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/images%2F1725790388146?alt=media&token=5db712db-0003-489d-9485-4bf42464f1cd",
            "createdAt": "2024-09-08T10:13:09.478Z",
            "__v": 0
        },
        {
            "properties": {
                "description": "Prime Retailers",
                "icon": "https://apis.mapmyindia.com/map_v3/1.png"
            },
            "geometry": {
                "coordinates": [
                    22.299435936858135,
                    73.30253217758128
                ],
                "type": "Point"
            },
            "_id": "66e015941634f88be902a9fe",
            "shopName": "Prime Retailers",
            "owner_id": "66dc9620bafd140e16935761",
            "type": "Feature",
            "image_url": "https://firebasestorage.googleapis.com/v0/b/e-commerce-af37e.appspot.com/o/shops_images%2F1725961618891?alt=media&token=16cab12f-1b7f-4069-9730-8b23d4f8f48f",
            "createdAt": "2024-09-10T09:47:00.316Z",
            "__v": 0
        }
    ]
}
```