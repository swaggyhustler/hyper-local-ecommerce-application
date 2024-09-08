import Shop from "../models/Shop.js";
import axios from "axios";
import { generateToken } from "../utils/mapplsToken.js";

const getNearestShops = async (req, res)=>{
    try{    
        const {coordinates} = req.body;

        const data = await Shop.find({
            geometry: {
                $near: {
                        $geometry: { type: "Point",  coordinates },
                        $minDistance: 0,
                        $maxDistance: 5000
                    }
                }
        });

        data.unshift({
            properties:{description: 'Current Location'},
            geometry:{coordinates: coordinates}
        });

        const destinations = data.map((item)=>{
            return (
                `${item.geometry.coordinates[1]},${item.geometry.coordinates[0]};`
            )
        });

        let query = "";
        let i=destinations.length-1;

        destinations.forEach((item, index)=>{
            if(index==i)
                query+=item.substring(0,item.length-2);
            else
                query+=item;    
                
        });

        const token = await generateToken();        
        const result = await axios.get(`https://apis.mappls.com/advancedmaps/v1/${token}/distance_matrix/biking/${query}`);
        data.shift();
        const finalData = data.map((item, index)=>{
            return {
                'owner_id': item.owner_id,
                'shopName': item.properties.description,
                'shop_id': item._id,
                'distance': (result.data.results.distances[0][index]/1000).toFixed(2),
                'duration': (result.data.results.durations[0][index]/60).toFixed(2),
            }
        });
        res.status(200).json({message: "Locations fetched successfully", data: finalData});
    }catch(error){
        console.log("Cannot find the nearest Shops, Something went wrong", error);
        res.status(500).json({message: "Something went wrong, cannot fetch nearest shops"});
    }
}

export {getNearestShops};
