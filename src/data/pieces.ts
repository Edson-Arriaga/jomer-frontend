import engagementRings from "./engagementRings";
import chains from "./chains";
import cuffBracelets from "./cuffBracelets";
import earings from "./earings";
import pendants from "./pendants";
import rings from "./rings";

export const getPieces = () => {
    const products = [...chains, ...cuffBracelets, ...pendants, ...rings, ...earings, ...engagementRings]
    return products.map((product, i) => ({
        ...product,
        id: i
    })) 
}

export default getPieces