import axiosClient from "@configs/axios";

/**
 * API get products list
 * @param {object} req Request
 * @param {object} res Respone
 * @param {boolean} is_search Get By Search. Default: false
 * @param {string} keyword Keyword for search when is_search: true.  Default: ''
 * @param {string / array} categories Get By Categories. Default: ''
 * @param {boolean} is_paging Paging for products. Default: false
 * @param {int} limit number for query products. Default: 10
 * @param {string} order Order products. Default: DESC
 * @param {string} order_by field for order. Default: id
 * @returns {object} products Product list
 * products: { id, name, slug, description, image, gellery, attributes, categories, created, modified }
 * products.gellery: { id, image }
 * products.attributes: { id, name, slug, type, options }
 * products.categories: { id, name, slug }
 */

export default async function handler( req, res ) {
    try {
        const products = await axiosClient.get( "/products", {
            params: {
                ...req.query
            }
        } );
        res.status( 200 ).json( products );
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}