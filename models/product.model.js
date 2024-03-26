const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Plese enter the name"],
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true
    }
    );

    const Product = mongoose.model("Product", ProductSchema);

    module.exports = Product;