import engagementRings from "./engagementRings";
import chains from "./chains";
import cuffBracelets from "./cuffsBracelets";
import earings from "./earings";
import pendants from "./pendants";
import rings from "./rings";

export const getProducts = () => {
    const products = [...chains, ...cuffBracelets, ...pendants, ...rings, ...earings, ...engagementRings]
    return products.map((product, i) => ({
        ...product,
        id: i
    })) 
}

export default getProducts