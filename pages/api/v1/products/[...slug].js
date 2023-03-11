
/**
 * API get product detail
 * @param {object} req Request
 * @param {object} res Respone
 * @param {boolean} slug Get By Product.
 * @param {string / array} fields Display all field. Default: '' or false
 * @returns {object} product Product Info
 * fields: { id, name, slug, description, image, gellery, attributes, meta_field, created, modified }
 * products.gellery: { id, image }
 * products.attributes: { id, name, slug, type, options }
 * products.meta_field: { defind_field }
 */

export default async function handler( req, res ) {
    try {
        if ( req.query[ 'slug' ].length > 0 ) {
            const product = await axiosClient.get( "/product/" + req.query[ 'slug' ][ 0 ], {
                params: {
                    ...req.query
                }
            } );
            res.status( 200 ).json( product );            
        } else {
            res.status( 200 ).json( {} );            
        }
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}