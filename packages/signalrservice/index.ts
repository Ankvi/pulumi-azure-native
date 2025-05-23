import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSignalRArgs, GetSignalRResult, GetSignalROutputArgs } from "./getSignalR";
export const getSignalR: typeof import("./getSignalR").getSignalR = null as any;
export const getSignalROutput: typeof import("./getSignalR").getSignalROutput = null as any;
utilities.lazyLoad(exports, ["getSignalR","getSignalROutput"], () => require("./getSignalR"));

export { GetSignalRCustomCertificateArgs, GetSignalRCustomCertificateResult, GetSignalRCustomCertificateOutputArgs } from "./getSignalRCustomCertificate";
export const getSignalRCustomCertificate: typeof import("./getSignalRCustomCertificate").getSignalRCustomCertificate = null as any;
export const getSignalRCustomCertificateOutput: typeof import("./getSignalRCustomCertificate").getSignalRCustomCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getSignalRCustomCertificate","getSignalRCustomCertificateOutput"], () => require("./getSignalRCustomCertificate"));

export { GetSignalRCustomDomainArgs, GetSignalRCustomDomainResult, GetSignalRCustomDomainOutputArgs } from "./getSignalRCustomDomain";
export const getSignalRCustomDomain: typeof import("./getSignalRCustomDomain").getSignalRCustomDomain = null as any;
export const getSignalRCustomDomainOutput: typeof import("./getSignalRCustomDomain").getSignalRCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getSignalRCustomDomain","getSignalRCustomDomainOutput"], () => require("./getSignalRCustomDomain"));

export { GetSignalRPrivateEndpointConnectionArgs, GetSignalRPrivateEndpointConnectionResult, GetSignalRPrivateEndpointConnectionOutputArgs } from "./getSignalRPrivateEndpointConnection";
export const getSignalRPrivateEndpointConnection: typeof import("./getSignalRPrivateEndpointConnection").getSignalRPrivateEndpointConnection = null as any;
export const getSignalRPrivateEndpointConnectionOutput: typeof import("./getSignalRPrivateEndpointConnection").getSignalRPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getSignalRPrivateEndpointConnection","getSignalRPrivateEndpointConnectionOutput"], () => require("./getSignalRPrivateEndpointConnection"));

export { GetSignalRReplicaArgs, GetSignalRReplicaResult, GetSignalRReplicaOutputArgs } from "./getSignalRReplica";
export const getSignalRReplica: typeof import("./getSignalRReplica").getSignalRReplica = null as any;
export const getSignalRReplicaOutput: typeof import("./getSignalRReplica").getSignalRReplicaOutput = null as any;
utilities.lazyLoad(exports, ["getSignalRReplica","getSignalRReplicaOutput"], () => require("./getSignalRReplica"));

export { GetSignalRSharedPrivateLinkResourceArgs, GetSignalRSharedPrivateLinkResourceResult, GetSignalRSharedPrivateLinkResourceOutputArgs } from "./getSignalRSharedPrivateLinkResource";
export const getSignalRSharedPrivateLinkResource: typeof import("./getSignalRSharedPrivateLinkResource").getSignalRSharedPrivateLinkResource = null as any;
export const getSignalRSharedPrivateLinkResourceOutput: typeof import("./getSignalRSharedPrivateLinkResource").getSignalRSharedPrivateLinkResourceOutput = null as any;
utilities.lazyLoad(exports, ["getSignalRSharedPrivateLinkResource","getSignalRSharedPrivateLinkResourceOutput"], () => require("./getSignalRSharedPrivateLinkResource"));

export { ListSignalRKeysArgs, ListSignalRKeysResult, ListSignalRKeysOutputArgs } from "./listSignalRKeys";
export const listSignalRKeys: typeof import("./listSignalRKeys").listSignalRKeys = null as any;
export const listSignalRKeysOutput: typeof import("./listSignalRKeys").listSignalRKeysOutput = null as any;
utilities.lazyLoad(exports, ["listSignalRKeys","listSignalRKeysOutput"], () => require("./listSignalRKeys"));

export { SignalRArgs } from "./signalR";
export type SignalR = import("./signalR").SignalR;
export const SignalR: typeof import("./signalR").SignalR = null as any;
utilities.lazyLoad(exports, ["SignalR"], () => require("./signalR"));

export { SignalRCustomCertificateArgs } from "./signalRCustomCertificate";
export type SignalRCustomCertificate = import("./signalRCustomCertificate").SignalRCustomCertificate;
export const SignalRCustomCertificate: typeof import("./signalRCustomCertificate").SignalRCustomCertificate = null as any;
utilities.lazyLoad(exports, ["SignalRCustomCertificate"], () => require("./signalRCustomCertificate"));

export { SignalRCustomDomainArgs } from "./signalRCustomDomain";
export type SignalRCustomDomain = import("./signalRCustomDomain").SignalRCustomDomain;
export const SignalRCustomDomain: typeof import("./signalRCustomDomain").SignalRCustomDomain = null as any;
utilities.lazyLoad(exports, ["SignalRCustomDomain"], () => require("./signalRCustomDomain"));

export { SignalRPrivateEndpointConnectionArgs } from "./signalRPrivateEndpointConnection";
export type SignalRPrivateEndpointConnection = import("./signalRPrivateEndpointConnection").SignalRPrivateEndpointConnection;
export const SignalRPrivateEndpointConnection: typeof import("./signalRPrivateEndpointConnection").SignalRPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["SignalRPrivateEndpointConnection"], () => require("./signalRPrivateEndpointConnection"));

export { SignalRReplicaArgs } from "./signalRReplica";
export type SignalRReplica = import("./signalRReplica").SignalRReplica;
export const SignalRReplica: typeof import("./signalRReplica").SignalRReplica = null as any;
utilities.lazyLoad(exports, ["SignalRReplica"], () => require("./signalRReplica"));

export { SignalRSharedPrivateLinkResourceArgs } from "./signalRSharedPrivateLinkResource";
export type SignalRSharedPrivateLinkResource = import("./signalRSharedPrivateLinkResource").SignalRSharedPrivateLinkResource;
export const SignalRSharedPrivateLinkResource: typeof import("./signalRSharedPrivateLinkResource").SignalRSharedPrivateLinkResource = null as any;
utilities.lazyLoad(exports, ["SignalRSharedPrivateLinkResource"], () => require("./signalRSharedPrivateLinkResource"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:signalrservice:SignalR":
                return new SignalR(name, <any>undefined, { urn })
            case "azure-native:signalrservice:SignalRCustomCertificate":
                return new SignalRCustomCertificate(name, <any>undefined, { urn })
            case "azure-native:signalrservice:SignalRCustomDomain":
                return new SignalRCustomDomain(name, <any>undefined, { urn })
            case "azure-native:signalrservice:SignalRPrivateEndpointConnection":
                return new SignalRPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:signalrservice:SignalRReplica":
                return new SignalRReplica(name, <any>undefined, { urn })
            case "azure-native:signalrservice:SignalRSharedPrivateLinkResource":
                return new SignalRSharedPrivateLinkResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "signalrservice", _module)