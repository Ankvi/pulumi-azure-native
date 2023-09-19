import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
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


// Export enums:
export * from "./types/enums";
