## Get Nearest Shops from Users current Location
### Mehtod `GET` 
### URL `http://localhost:5000/api/v1/get/nearestShops`
### Response 
- Distances are in KM (Kilo Meters)
- Durations are in units of Minutes
```javascript
{
    "message": "Locations fetched successfully",
    "data": [
        {
            "shopName": "Current Location",
            "distance": "0.00",
            "duration": "0.00"
        },
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