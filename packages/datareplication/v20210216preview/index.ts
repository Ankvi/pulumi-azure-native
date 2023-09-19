import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DraArgs } from "./dra";
export type Dra = import("./dra").Dra;
export const Dra: typeof import("./dra").Dra = null as any;
utilities.lazyLoad(exports, ["Dra"], () => require("./dra"));

export { FabricArgs } from "./fabric";
export type Fabric = import("./fabric").Fabric;
export const Fabric: typeof import("./fabric").Fabric = null as any;
utilities.lazyLoad(exports, ["Fabric"], () => require("./fabric"));

export { GetDraArgs, GetDraResult, GetDraOutputArgs } from "./getDra";
export const getDra: typeof import("./getDra").getDra = null as any;
export const getDraOutput: typeof import("./getDra").getDraOutput = null as any;
utilities.lazyLoad(exports, ["getDra","getDraOutput"], () => require("./getDra"));

export { GetFabricArgs, GetFabricResult, GetFabricOutputArgs } from "./getFabric";
export const getFabric: typeof import("./getFabric").getFabric = null as any;
export const getFabricOutput: typeof import("./getFabric").getFabricOutput = null as any;
utilities.lazyLoad(exports, ["getFabric","getFabricOutput"], () => require("./getFabric"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetProtectedItemArgs, GetProtectedItemResult, GetProtectedItemOutputArgs } from "./getProtectedItem";
export const getProtectedItem: typeof import("./getProtectedItem").getProtectedItem = null as any;
export const getProtectedItemOutput: typeof import("./getProtectedItem").getProtectedItemOutput = null as any;
utilities.lazyLoad(exports, ["getProtectedItem","getProtectedItemOutput"], () => require("./getProtectedItem"));

export { GetReplicationExtensionArgs, GetReplicationExtensionResult, GetReplicationExtensionOutputArgs } from "./getReplicationExtension";
export const getReplicationExtension: typeof import("./getReplicationExtension").getReplicationExtension = null as any;
export const getReplicationExtensionOutput: typeof import("./getReplicationExtension").getReplicationExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getReplicationExtension","getReplicationExtensionOutput"], () => require("./getReplicationExtension"));

export { GetVaultArgs, GetVaultResult, GetVaultOutputArgs } from "./getVault";
export const getVault: typeof import("./getVault").getVault = null as any;
export const getVaultOutput: typeof import("./getVault").getVaultOutput = null as any;
utilities.lazyLoad(exports, ["getVault","getVaultOutput"], () => require("./getVault"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { ProtectedItemArgs } from "./protectedItem";
export type ProtectedItem = import("./protectedItem").ProtectedItem;
export const ProtectedItem: typeof import("./protectedItem").ProtectedItem = null as any;
utilities.lazyLoad(exports, ["ProtectedItem"], () => require("./protectedItem"));

export { ReplicationExtensionArgs } from "./replicationExtension";
export type ReplicationExtension = import("./replicationExtension").ReplicationExtension;
export const ReplicationExtension: typeof import("./replicationExtension").ReplicationExtension = null as any;
utilities.lazyLoad(exports, ["ReplicationExtension"], () => require("./replicationExtension"));

export { VaultArgs } from "./vault";
export type Vault = import("./vault").Vault;
export const Vault: typeof import("./vault").Vault = null as any;
utilities.lazyLoad(exports, ["Vault"], () => require("./vault"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datareplication/v20210216preview:Dra":
                return new Dra(name, <any>undefined, { urn })
            case "azure-native:datareplication/v20210216preview:Fabric":
                return new Fabric(name, <any>undefined, { urn })
            case "azure-native:datareplication/v20210216preview:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:datareplication/v20210216preview:ProtectedItem":
                return new ProtectedItem(name, <any>undefined, { urn })
            case "azure-native:datareplication/v20210216preview:ReplicationExtension":
                return new ReplicationExtension(name, <any>undefined, { urn })
            case "azure-native:datareplication/v20210216preview:Vault":
                return new Vault(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datareplication/v20210216preview", _module)
