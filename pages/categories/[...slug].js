import Banner from "@components/Banner";
import { Box } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter();
    const { slug } = router.query;
    const maxWidth = breakpoints.values.lg;
    return (
        <Box>
            <Banner
                image="/banner-product.jpg"
                title={ slug[ 0 ].toUpperCase() }
                description="From Chocolate Cakes, to Fruity Cakes, to cheesecakes  and so many more, there is a cake for any celebration and occassion. Why not personalise a special birthday message on your chosen cake to make the celebration extra special."
                isBannerProduct
                maxWidth={ maxWidth }
            />
        </Box>
    );
};
Category.layout = "Front";
export default Category;