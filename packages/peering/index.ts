import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectionMonitorTestArgs } from "./connectionMonitorTest";
export type ConnectionMonitorTest = import("./connectionMonitorTest").ConnectionMonitorTest;
export const ConnectionMonitorTest: typeof import("./connectionMonitorTest").ConnectionMonitorTest = null as any;
utilities.lazyLoad(exports, ["ConnectionMonitorTest"], () => require("./connectionMonitorTest"));

export { GetConnectionMonitorTestArgs, GetConnectionMonitorTestResult, GetConnectionMonitorTestOutputArgs } from "./getConnectionMonitorTest";
export const getConnectionMonitorTest: typeof import("./getConnectionMonitorTest").getConnectionMonitorTest = null as any;
export const getConnectionMonitorTestOutput: typeof import("./getConnectionMonitorTest").getConnectionMonitorTestOutput = null as any;
utilities.lazyLoad(exports, ["getConnectionMonitorTest","getConnectionMonitorTestOutput"], () => require("./getConnectionMonitorTest"));

export { GetPeerAsnArgs, GetPeerAsnResult, GetPeerAsnOutputArgs } from "./getPeerAsn";
export const getPeerAsn: typeof import("./getPeerAsn").getPeerAsn = null as any;
export const getPeerAsnOutput: typeof import("./getPeerAsn").getPeerAsnOutput = null as any;
utilities.lazyLoad(exports, ["getPeerAsn","getPeerAsnOutput"], () => require("./getPeerAsn"));

export { GetPeeringArgs, GetPeeringResult, GetPeeringOutputArgs } from "./getPeering";
export const getPeering: typeof import("./getPeering").getPeering = null as any;
export const getPeeringOutput: typeof import("./getPeering").getPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getPeering","getPeeringOutput"], () => require("./getPeering"));

export { GetPeeringServiceArgs, GetPeeringServiceResult, GetPeeringServiceOutputArgs } from "./getPeeringService";
export const getPeeringService: typeof import("./getPeeringService").getPeeringService = null as any;
export const getPeeringServiceOutput: typeof import("./getPeeringService").getPeeringServiceOutput = null as any;
utilities.lazyLoad(exports, ["getPeeringService","getPeeringServiceOutput"], () => require("./getPeeringService"));

export { GetPrefixArgs, GetPrefixResult, GetPrefixOutputArgs } from "./getPrefix";
export const getPrefix: typeof import("./getPrefix").getPrefix = null as any;
export const getPrefixOutput: typeof import("./getPrefix").getPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getPrefix","getPrefixOutput"], () => require("./getPrefix"));

export { GetRegisteredAsnArgs, GetRegisteredAsnResult, GetRegisteredAsnOutputArgs } from "./getRegisteredAsn";
export const getRegisteredAsn: typeof import("./getRegisteredAsn").getRegisteredAsn = null as any;
export const getRegisteredAsnOutput: typeof import("./getRegisteredAsn").getRegisteredAsnOutput = null as any;
utilities.lazyLoad(exports, ["getRegisteredAsn","getRegisteredAsnOutput"], () => require("./getRegisteredAsn"));

export { GetRegisteredPrefixArgs, GetRegisteredPrefixResult, GetRegisteredPrefixOutputArgs } from "./getRegisteredPrefix";
export const getRegisteredPrefix: typeof import("./getRegisteredPrefix").getRegisteredPrefix = null as any;
export const getRegisteredPrefixOutput: typeof import("./getRegisteredPrefix").getRegisteredPrefixOutput = null as any;
utilities.lazyLoad(exports, ["getRegisteredPrefix","getRegisteredPrefixOutput"], () => require("./getRegisteredPrefix"));

export { PeerAsnArgs } from "./peerAsn";
export type PeerAsn = import("./peerAsn").PeerAsn;
export const PeerAsn: typeof import("./peerAsn").PeerAsn = null as any;
utilities.lazyLoad(exports, ["PeerAsn"], () => require("./peerAsn"));

export { PeeringArgs } from "./peering";
export type Peering = import("./peering").Peering;
export const Peering: typeof import("./peering").Peering = null as any;
utilities.lazyLoad(exports, ["Peering"], () => require("./peering"));

export { PeeringServiceArgs } from "./peeringService";
export type PeeringService = import("./peeringService").PeeringService;
export const PeeringService: typeof import("./peeringService").PeeringService = null as any;
utilities.lazyLoad(exports, ["PeeringService"], () => require("./peeringService"));

export { PrefixArgs } from "./prefix";
export type Prefix = import("./prefix").Prefix;
export const Prefix: typeof import("./prefix").Prefix = null as any;
utilities.lazyLoad(exports, ["Prefix"], () => require("./prefix"));

export { RegisteredAsnArgs } from "./registeredAsn";
export type RegisteredAsn = import("./registeredAsn").RegisteredAsn;
export const RegisteredAsn: typeof import("./registeredAsn").RegisteredAsn = null as any;
utilities.lazyLoad(exports, ["RegisteredAsn"], () => require("./registeredAsn"));

export { RegisteredPrefixArgs } from "./registeredPrefix";
export type RegisteredPrefix = import("./registeredPrefix").RegisteredPrefix;
export const RegisteredPrefix: typeof import("./registeredPrefix").RegisteredPrefix = null as any;
utilities.lazyLoad(exports, ["RegisteredPrefix"], () => require("./registeredPrefix"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20210101 from "./v20210101";
import * as v20221001 from "./v20221001";

export {
    v20210101,
    v20221001,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:peering:ConnectionMonitorTest":
                return new ConnectionMonitorTest(name, <any>undefined, { urn })
            case "azure-native:peering:PeerAsn":
                return new PeerAsn(name, <any>undefined, { urn })
            case "azure-native:peering:Peering":
                return new Peering(name, <any>undefined, { urn })
            case "azure-native:peering:PeeringService":
                return new PeeringService(name, <any>undefined, { urn })
            case "azure-native:peering:Prefix":
                return new Prefix(name, <any>undefined, { urn })
            case "azure-native:peering:RegisteredAsn":
                return new RegisteredAsn(name, <any>undefined, { urn })
            case "azure-native:peering:RegisteredPrefix":
                return new RegisteredPrefix(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "peering", _module)
