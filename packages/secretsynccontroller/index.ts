import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureKeyVaultSecretProviderClassArgs } from "./azureKeyVaultSecretProviderClass";
export type AzureKeyVaultSecretProviderClass = import("./azureKeyVaultSecretProviderClass").AzureKeyVaultSecretProviderClass;
export const AzureKeyVaultSecretProviderClass: typeof import("./azureKeyVaultSecretProviderClass").AzureKeyVaultSecretProviderClass = null as any;
utilities.lazyLoad(exports, ["AzureKeyVaultSecretProviderClass"], () => require("./azureKeyVaultSecretProviderClass"));

export { GetAzureKeyVaultSecretProviderClassArgs, GetAzureKeyVaultSecretProviderClassResult, GetAzureKeyVaultSecretProviderClassOutputArgs } from "./getAzureKeyVaultSecretProviderClass";
export const getAzureKeyVaultSecretProviderClass: typeof import("./getAzureKeyVaultSecretProviderClass").getAzureKeyVaultSecretProviderClass = null as any;
export const getAzureKeyVaultSecretProviderClassOutput: typeof import("./getAzureKeyVaultSecretProviderClass").getAzureKeyVaultSecretProviderClassOutput = null as any;
utilities.lazyLoad(exports, ["getAzureKeyVaultSecretProviderClass","getAzureKeyVaultSecretProviderClassOutput"], () => require("./getAzureKeyVaultSecretProviderClass"));

export { GetSecretSyncArgs, GetSecretSyncResult, GetSecretSyncOutputArgs } from "./getSecretSync";
export const getSecretSync: typeof import("./getSecretSync").getSecretSync = null as any;
export const getSecretSyncOutput: typeof import("./getSecretSync").getSecretSyncOutput = null as any;
utilities.lazyLoad(exports, ["getSecretSync","getSecretSyncOutput"], () => require("./getSecretSync"));

export { SecretSyncArgs } from "./secretSync";
export type SecretSync = import("./secretSync").SecretSync;
export const SecretSync: typeof import("./secretSync").SecretSync = null as any;
utilities.lazyLoad(exports, ["SecretSync"], () => require("./secretSync"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:secretsynccontroller:AzureKeyVaultSecretProviderClass":
                return new AzureKeyVaultSecretProviderClass(name, <any>undefined, { urn })
            case "azure-native:secretsynccontroller:SecretSync":
                return new SecretSync(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "secretsynccontroller", _module)