import axiosClient from "src/configs/axios";
export default async function handler( req, res ) {
    try {
        const settings = await axiosClient.post( "/settings/update", req.body );
        res.status( 200 ).json( settings );
    } catch ( err ) {
        res.status( 500 ).send( { error: 'failed to fetch data' } );
    }
}