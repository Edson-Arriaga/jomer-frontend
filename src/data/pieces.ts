import engagementRings from "./engagementRings";
import chains from "./chains";
import cuffBracelets from "./cuffBracelets";
import earings from "./earings";
import pendants from "./pendants";
import rings from "./rings";

const pieces = [...chains, ...cuffBracelets, ...pendants, ...rings, ...earings, ...engagementRings].map((piece, i) => ({
    ...piece,
    id: i
}))

export default pieces