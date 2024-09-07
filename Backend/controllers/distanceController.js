
import Shop from "../models/Shop.js";

const getNearestShops = async (req, res)=>{
    try{    
        const {coordinates} = req.body;
        const data = await Shop.find({
            geometry: {
                $near: {
                        $geometry: { type: "Point",  coordinates },
                        $minDistance: 0,
                        $maxDistance: 1500
                    }
                }
        });
        res.status(200).json({message: "Locations fetched successfully", data: data});
    }catch(error){
        console.log("Cannot find the nearest Shops, Something went wrong", error);
        res.status(500).json({message: "Something went wrong, cannot fetch nearest shops"});
    }
}

export {getNearestShops};