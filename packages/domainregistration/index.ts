import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DomainArgs } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { DomainOwnershipIdentifierArgs } from "./domainOwnershipIdentifier";
export type DomainOwnershipIdentifier = import("./domainOwnershipIdentifier").DomainOwnershipIdentifier;
export const DomainOwnershipIdentifier: typeof import("./domainOwnershipIdentifier").DomainOwnershipIdentifier = null as any;
utilities.lazyLoad(exports, ["DomainOwnershipIdentifier"], () => require("./domainOwnershipIdentifier"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetDomainOwnershipIdentifierArgs, GetDomainOwnershipIdentifierResult, GetDomainOwnershipIdentifierOutputArgs } from "./getDomainOwnershipIdentifier";
export const getDomainOwnershipIdentifier: typeof import("./getDomainOwnershipIdentifier").getDomainOwnershipIdentifier = null as any;
export const getDomainOwnershipIdentifierOutput: typeof import("./getDomainOwnershipIdentifier").getDomainOwnershipIdentifierOutput = null as any;
utilities.lazyLoad(exports, ["getDomainOwnershipIdentifier","getDomainOwnershipIdentifierOutput"], () => require("./getDomainOwnershipIdentifier"));

export { ListDomainRecommendationsArgs, ListDomainRecommendationsResult, ListDomainRecommendationsOutputArgs } from "./listDomainRecommendations";
export const listDomainRecommendations: typeof import("./listDomainRecommendations").listDomainRecommendations = null as any;
export const listDomainRecommendationsOutput: typeof import("./listDomainRecommendations").listDomainRecommendationsOutput = null as any;
utilities.lazyLoad(exports, ["listDomainRecommendations","listDomainRecommendationsOutput"], () => require("./listDomainRecommendations"));

export { ListTopLevelDomainAgreementsArgs, ListTopLevelDomainAgreementsResult, ListTopLevelDomainAgreementsOutputArgs } from "./listTopLevelDomainAgreements";
export const listTopLevelDomainAgreements: typeof import("./listTopLevelDomainAgreements").listTopLevelDomainAgreements = null as any;
export const listTopLevelDomainAgreementsOutput: typeof import("./listTopLevelDomainAgreements").listTopLevelDomainAgreementsOutput = null as any;
utilities.lazyLoad(exports, ["listTopLevelDomainAgreements","listTopLevelDomainAgreementsOutput"], () => require("./listTopLevelDomainAgreements"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20201001 from "./v20201001";
import * as v20201201 from "./v20201201";
import * as v20210101 from "./v20210101";
import * as v20210115 from "./v20210115";
import * as v20210201 from "./v20210201";
import * as v20210301 from "./v20210301";
import * as v20220301 from "./v20220301";
import * as v20220901 from "./v20220901";

export {
    v20201001,
    v20201201,
    v20210101,
    v20210115,
    v20210201,
    v20210301,
    v20220301,
    v20220901,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:domainregistration:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-native:domainregistration:DomainOwnershipIdentifier":
                return new DomainOwnershipIdentifier(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "domainregistration", _module)
