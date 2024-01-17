import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BlockchainMemberArgs } from "./blockchainMember";
export type BlockchainMember = import("./blockchainMember").BlockchainMember;
export const BlockchainMember: typeof import("./blockchainMember").BlockchainMember = null as any;
utilities.lazyLoad(exports, ["BlockchainMember"], () => require("./blockchainMember"));

export { GetBlockchainMemberArgs, GetBlockchainMemberResult, GetBlockchainMemberOutputArgs } from "./getBlockchainMember";
export const getBlockchainMember: typeof import("./getBlockchainMember").getBlockchainMember = null as any;
export const getBlockchainMemberOutput: typeof import("./getBlockchainMember").getBlockchainMemberOutput = null as any;
utilities.lazyLoad(exports, ["getBlockchainMember","getBlockchainMemberOutput"], () => require("./getBlockchainMember"));

export { GetTransactionNodeArgs, GetTransactionNodeResult, GetTransactionNodeOutputArgs } from "./getTransactionNode";
export const getTransactionNode: typeof import("./getTransactionNode").getTransactionNode = null as any;
export const getTransactionNodeOutput: typeof import("./getTransactionNode").getTransactionNodeOutput = null as any;
utilities.lazyLoad(exports, ["getTransactionNode","getTransactionNodeOutput"], () => require("./getTransactionNode"));

export { ListBlockchainMemberApiKeysArgs, ListBlockchainMemberApiKeysResult, ListBlockchainMemberApiKeysOutputArgs } from "./listBlockchainMemberApiKeys";
export const listBlockchainMemberApiKeys: typeof import("./listBlockchainMemberApiKeys").listBlockchainMemberApiKeys = null as any;
export const listBlockchainMemberApiKeysOutput: typeof import("./listBlockchainMemberApiKeys").listBlockchainMemberApiKeysOutput = null as any;
utilities.lazyLoad(exports, ["listBlockchainMemberApiKeys","listBlockchainMemberApiKeysOutput"], () => require("./listBlockchainMemberApiKeys"));

export { ListLocationConsortiumsArgs, ListLocationConsortiumsResult, ListLocationConsortiumsOutputArgs } from "./listLocationConsortiums";
export const listLocationConsortiums: typeof import("./listLocationConsortiums").listLocationConsortiums = null as any;
export const listLocationConsortiumsOutput: typeof import("./listLocationConsortiums").listLocationConsortiumsOutput = null as any;
utilities.lazyLoad(exports, ["listLocationConsortiums","listLocationConsortiumsOutput"], () => require("./listLocationConsortiums"));

export { ListTransactionNodeApiKeysArgs, ListTransactionNodeApiKeysResult, ListTransactionNodeApiKeysOutputArgs } from "./listTransactionNodeApiKeys";
export const listTransactionNodeApiKeys: typeof import("./listTransactionNodeApiKeys").listTransactionNodeApiKeys = null as any;
export const listTransactionNodeApiKeysOutput: typeof import("./listTransactionNodeApiKeys").listTransactionNodeApiKeysOutput = null as any;
utilities.lazyLoad(exports, ["listTransactionNodeApiKeys","listTransactionNodeApiKeysOutput"], () => require("./listTransactionNodeApiKeys"));

export { TransactionNodeArgs } from "./transactionNode";
export type TransactionNode = import("./transactionNode").TransactionNode;
export const TransactionNode: typeof import("./transactionNode").TransactionNode = null as any;
utilities.lazyLoad(exports, ["TransactionNode"], () => require("./transactionNode"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:blockchain:BlockchainMember":
                return new BlockchainMember(name, <any>undefined, { urn })
            case "azure-native:blockchain:TransactionNode":
                return new TransactionNode(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "blockchain", _module)