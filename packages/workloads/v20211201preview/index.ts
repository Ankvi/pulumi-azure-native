import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPhpWorkloadArgs, GetPhpWorkloadResult, GetPhpWorkloadOutputArgs } from "./getPhpWorkload";
export const getPhpWorkload: typeof import("./getPhpWorkload").getPhpWorkload = null as any;
export const getPhpWorkloadOutput: typeof import("./getPhpWorkload").getPhpWorkloadOutput = null as any;
utilities.lazyLoad(exports, ["getPhpWorkload","getPhpWorkloadOutput"], () => require("./getPhpWorkload"));

export { GetSAPApplicationServerInstanceArgs, GetSAPApplicationServerInstanceResult, GetSAPApplicationServerInstanceOutputArgs } from "./getSAPApplicationServerInstance";
export const getSAPApplicationServerInstance: typeof import("./getSAPApplicationServerInstance").getSAPApplicationServerInstance = null as any;
export const getSAPApplicationServerInstanceOutput: typeof import("./getSAPApplicationServerInstance").getSAPApplicationServerInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getSAPApplicationServerInstance","getSAPApplicationServerInstanceOutput"], () => require("./getSAPApplicationServerInstance"));

export { GetSAPAvailabilityZoneDetailsArgs, GetSAPAvailabilityZoneDetailsResult, GetSAPAvailabilityZoneDetailsOutputArgs } from "./getSAPAvailabilityZoneDetails";
export const getSAPAvailabilityZoneDetails: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetails = null as any;
export const getSAPAvailabilityZoneDetailsOutput: typeof import("./getSAPAvailabilityZoneDetails").getSAPAvailabilityZoneDetailsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPAvailabilityZoneDetails","getSAPAvailabilityZoneDetailsOutput"], () => require("./getSAPAvailabilityZoneDetails"));

export { GetSAPDiskConfigurationsArgs, GetSAPDiskConfigurationsResult, GetSAPDiskConfigurationsOutputArgs } from "./getSAPDiskConfigurations";
export const getSAPDiskConfigurations: typeof import("./getSAPDiskConfigurations").getSAPDiskConfigurations = null as any;
export const getSAPDiskConfigurationsOutput: typeof import("./getSAPDiskConfigurations").getSAPDiskConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPDiskConfigurations","getSAPDiskConfigurationsOutput"], () => require("./getSAPDiskConfigurations"));

export { GetSAPSizingRecommendationsArgs, GetSAPSizingRecommendationsResult, GetSAPSizingRecommendationsOutputArgs } from "./getSAPSizingRecommendations";
export const getSAPSizingRecommendations: typeof import("./getSAPSizingRecommendations").getSAPSizingRecommendations = null as any;
export const getSAPSizingRecommendationsOutput: typeof import("./getSAPSizingRecommendations").getSAPSizingRecommendationsOutput = null as any;
utilities.lazyLoad(exports, ["getSAPSizingRecommendations","getSAPSizingRecommendationsOutput"], () => require("./getSAPSizingRecommendations"));

export { GetSAPSupportedSkuArgs, GetSAPSupportedSkuResult, GetSAPSupportedSkuOutputArgs } from "./getSAPSupportedSku";
export const getSAPSupportedSku: typeof import("./getSAPSupportedSku").getSAPSupportedSku = null as any;
export const getSAPSupportedSkuOutput: typeof import("./getSAPSupportedSku").getSAPSupportedSkuOutput = null as any;
utilities.lazyLoad(exports, ["getSAPSupportedSku","getSAPSupportedSkuOutput"], () => require("./getSAPSupportedSku"));

export { GetWordpressInstanceArgs, GetWordpressInstanceResult, GetWordpressInstanceOutputArgs } from "./getWordpressInstance";
export const getWordpressInstance: typeof import("./getWordpressInstance").getWordpressInstance = null as any;
export const getWordpressInstanceOutput: typeof import("./getWordpressInstance").getWordpressInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getWordpressInstance","getWordpressInstanceOutput"], () => require("./getWordpressInstance"));

export { PhpWorkloadArgs } from "./phpWorkload";
export type PhpWorkload = import("./phpWorkload").PhpWorkload;
export const PhpWorkload: typeof import("./phpWorkload").PhpWorkload = null as any;
utilities.lazyLoad(exports, ["PhpWorkload"], () => require("./phpWorkload"));

export { SAPApplicationServerInstanceArgs } from "./sapapplicationServerInstance";
export type SAPApplicationServerInstance = import("./sapapplicationServerInstance").SAPApplicationServerInstance;
export const SAPApplicationServerInstance: typeof import("./sapapplicationServerInstance").SAPApplicationServerInstance = null as any;
utilities.lazyLoad(exports, ["SAPApplicationServerInstance"], () => require("./sapapplicationServerInstance"));

export { WordpressInstanceArgs } from "./wordpressInstance";
export type WordpressInstance = import("./wordpressInstance").WordpressInstance;
export const WordpressInstance: typeof import("./wordpressInstance").WordpressInstance = null as any;
utilities.lazyLoad(exports, ["WordpressInstance"], () => require("./wordpressInstance"));


// Export enums:
export * from "../types/enums/v20211201preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:workloads/v20211201preview:PhpWorkload":
                return new PhpWorkload(name, <any>undefined, { urn })
            case "azure-native:workloads/v20211201preview:SAPApplicationServerInstance":
                return new SAPApplicationServerInstance(name, <any>undefined, { urn })
            case "azure-native:workloads/v20211201preview:WordpressInstance":
                return new WordpressInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "workloads/v20211201preview", _module)
