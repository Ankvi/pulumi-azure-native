import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPeerAsnArgs, GetPeerAsnResult, GetPeerAsnOutputArgs } from "./getPeerAsn";
export const getPeerAsn: typeof import("./getPeerAsn").getPeerAsn = null as any;
export const getPeerAsnOutput: typeof import("./getPeerAsn").getPeerAsnOutput = null as any;
utilities.lazyLoad(exports, ["getPeerAsn","getPeerAsnOutput"], () => require("./getPeerAsn"));

export { PeerAsnArgs } from "./peerAsn";
export type PeerAsn = import("./peerAsn").PeerAsn;
export const PeerAsn: typeof import("./peerAsn").PeerAsn = null as any;
utilities.lazyLoad(exports, ["PeerAsn"], () => require("./peerAsn"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:peering/v20210101:PeerAsn":
                return new PeerAsn(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "peering/v20210101", _module)