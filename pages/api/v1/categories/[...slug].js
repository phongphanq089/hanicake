
/**
 * API get category detail
 * @param {object} req Request
 * @param {object} res Respone
 * @param {boolean} slug Get By Category.
 * @param {string / array} fields Display all field. Default: '' or false
 * @returns {object} category Category Info
 * fields: { id, name, slug, description, image, meta_field, created, modified }
 * category.meta_field: { defind_field }
 */

export default async function handler( req, res ) {
    try {
        if ( req.query[ 'slug' ].length > 0 ) {
            const category = await axiosClient.get( "/category/" + req.query[ 'slug' ][ 0 ], {
                params: {
                    ...req.query
                }
            } );
            res.status( 200 ).json( category );
        } else {
            res.status( 200 ).json( {} );            
        }
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}