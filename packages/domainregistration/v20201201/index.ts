import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListDomainRecommendationsArgs, ListDomainRecommendationsResult, ListDomainRecommendationsOutputArgs } from "./listDomainRecommendations";
export const listDomainRecommendations: typeof import("./listDomainRecommendations").listDomainRecommendations = null as any;
export const listDomainRecommendationsOutput: typeof import("./listDomainRecommendations").listDomainRecommendationsOutput = null as any;
utilities.lazyLoad(exports, ["listDomainRecommendations","listDomainRecommendationsOutput"], () => require("./listDomainRecommendations"));

export { ListTopLevelDomainAgreementsArgs, ListTopLevelDomainAgreementsResult, ListTopLevelDomainAgreementsOutputArgs } from "./listTopLevelDomainAgreements";
export const listTopLevelDomainAgreements: typeof import("./listTopLevelDomainAgreements").listTopLevelDomainAgreements = null as any;
export const listTopLevelDomainAgreementsOutput: typeof import("./listTopLevelDomainAgreements").listTopLevelDomainAgreementsOutput = null as any;
utilities.lazyLoad(exports, ["listTopLevelDomainAgreements","listTopLevelDomainAgreementsOutput"], () => require("./listTopLevelDomainAgreements"));

