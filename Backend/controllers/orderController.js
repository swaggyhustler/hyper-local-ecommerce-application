import Order from "../models/Order";

const getOrders = async (req, res)=>{
    const {user_id} = req.params;
    try{
        const order = await Order.aggregate([
    {
        $lookup: {
            from: "Users",
            localField: "user_id",
            foreignField: "_id",
            as: "customerDetails"
        }
    },
    { $project: { customerDetails: 1, _id: 0 } },  // Include only the output array
    { $match: { customerDetails: { $ne: [] } } }   // Filter out empty arrays
    ]);

        
    }catch(error){
        console.log("Error fetching orders")
    }
}