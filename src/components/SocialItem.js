import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Link from 'next/link';

const SocialItem = ( { icon, color, url } ) => {
    return (
        <Link href={ url } className="social-item"><FeatherIcon icon={ icon } fill={ color } /></Link>
    );
};

export default SocialItem;