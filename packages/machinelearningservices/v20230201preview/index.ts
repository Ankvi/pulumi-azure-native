import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetFeaturesetVersionFeatureArgs, GetFeaturesetVersionFeatureResult, GetFeaturesetVersionFeatureOutputArgs } from "./getFeaturesetVersionFeature";
export const getFeaturesetVersionFeature: typeof import("./getFeaturesetVersionFeature").getFeaturesetVersionFeature = null as any;
export const getFeaturesetVersionFeatureOutput: typeof import("./getFeaturesetVersionFeature").getFeaturesetVersionFeatureOutput = null as any;
utilities.lazyLoad(exports, ["getFeaturesetVersionFeature","getFeaturesetVersionFeatureOutput"], () => require("./getFeaturesetVersionFeature"));

export { ListFeaturesetVersionFeaturesArgs, ListFeaturesetVersionFeaturesResult, ListFeaturesetVersionFeaturesOutputArgs } from "./listFeaturesetVersionFeatures";
export const listFeaturesetVersionFeatures: typeof import("./listFeaturesetVersionFeatures").listFeaturesetVersionFeatures = null as any;
export const listFeaturesetVersionFeaturesOutput: typeof import("./listFeaturesetVersionFeatures").listFeaturesetVersionFeaturesOutput = null as any;
utilities.lazyLoad(exports, ["listFeaturesetVersionFeatures","listFeaturesetVersionFeaturesOutput"], () => require("./listFeaturesetVersionFeatures"));