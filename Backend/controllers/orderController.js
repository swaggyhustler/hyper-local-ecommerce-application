import Order from "../models/Order.js";

const getOrders = async (req, res)=>{
    const {user_id} = req.params;
    try{
    //     const order = await Order.aggregate([
    // {
    //     $lookup: {
    //         from: "Users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "customerDetails"
    //     }
    // },
    // { $project: { customerDetails: 1, _id: 0 } },  // Include only the output array
    // { $match: { customerDetails: { $ne: [] } } }   // Filter out empty arrays
    // ]);
    // const orders = await Order.find({user_id});
    const orders = await Order.find({user_id}).sort({ updatedAt: -1 });

    //  await orders.update({}, { $rename: { "_id": 'order_id' } });

    res.status(200).json({message: "Orders fetched successfully", success: true, data: orders});
        
    }catch(error){
        console.log("Error fetching orders")
    }
}

const addOrder = async (req, res)=>{
    const {user_id, products} = req.body;
    try{
        if(!user_id || !products){
            return res.status(402).json({message: "Please provide details", success: false});
        }
        // const newOrder = new Order({
        //     user_id,
        //     products
        // });
        products.forEach(async (item)=>{
            const newOrder = new Order({
                user_id,
                product: item
            });
            await newOrder.save();
        });
        res.status(201).json({message: "Order details stored successfully", success: true});
    }catch(error){
        return res.status(500).json({message: "Cannot add Order Details", success: false});
    }
}

export {addOrder, getOrders};