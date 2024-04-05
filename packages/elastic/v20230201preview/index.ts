import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOrganizationApiKeyArgs, GetOrganizationApiKeyResult, GetOrganizationApiKeyOutputArgs } from "./getOrganizationApiKey";
export const getOrganizationApiKey: typeof import("./getOrganizationApiKey").getOrganizationApiKey = null as any;
export const getOrganizationApiKeyOutput: typeof import("./getOrganizationApiKey").getOrganizationApiKeyOutput = null as any;
utilities.lazyLoad(exports, ["getOrganizationApiKey","getOrganizationApiKeyOutput"], () => require("./getOrganizationApiKey"));