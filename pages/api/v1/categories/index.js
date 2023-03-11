import axiosClient from "@configs/axios";

export default async function handler( req, res ) {
    try {
        const categories = await axiosClient.get( "/categories", {
            params: {
                ...req.query
            }
        } );
        res.status( 200 ).json( categories );
    } catch ( err ) {
        res.status( 500 ).send( { error: err } );
    }
}