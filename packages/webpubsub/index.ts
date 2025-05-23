import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWebPubSubArgs, GetWebPubSubResult, GetWebPubSubOutputArgs } from "./getWebPubSub";
export const getWebPubSub: typeof import("./getWebPubSub").getWebPubSub = null as any;
export const getWebPubSubOutput: typeof import("./getWebPubSub").getWebPubSubOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSub","getWebPubSubOutput"], () => require("./getWebPubSub"));

export { GetWebPubSubCustomCertificateArgs, GetWebPubSubCustomCertificateResult, GetWebPubSubCustomCertificateOutputArgs } from "./getWebPubSubCustomCertificate";
export const getWebPubSubCustomCertificate: typeof import("./getWebPubSubCustomCertificate").getWebPubSubCustomCertificate = null as any;
export const getWebPubSubCustomCertificateOutput: typeof import("./getWebPubSubCustomCertificate").getWebPubSubCustomCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubCustomCertificate","getWebPubSubCustomCertificateOutput"], () => require("./getWebPubSubCustomCertificate"));

export { GetWebPubSubCustomDomainArgs, GetWebPubSubCustomDomainResult, GetWebPubSubCustomDomainOutputArgs } from "./getWebPubSubCustomDomain";
export const getWebPubSubCustomDomain: typeof import("./getWebPubSubCustomDomain").getWebPubSubCustomDomain = null as any;
export const getWebPubSubCustomDomainOutput: typeof import("./getWebPubSubCustomDomain").getWebPubSubCustomDomainOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubCustomDomain","getWebPubSubCustomDomainOutput"], () => require("./getWebPubSubCustomDomain"));

export { GetWebPubSubHubArgs, GetWebPubSubHubResult, GetWebPubSubHubOutputArgs } from "./getWebPubSubHub";
export const getWebPubSubHub: typeof import("./getWebPubSubHub").getWebPubSubHub = null as any;
export const getWebPubSubHubOutput: typeof import("./getWebPubSubHub").getWebPubSubHubOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubHub","getWebPubSubHubOutput"], () => require("./getWebPubSubHub"));

export { GetWebPubSubPrivateEndpointConnectionArgs, GetWebPubSubPrivateEndpointConnectionResult, GetWebPubSubPrivateEndpointConnectionOutputArgs } from "./getWebPubSubPrivateEndpointConnection";
export const getWebPubSubPrivateEndpointConnection: typeof import("./getWebPubSubPrivateEndpointConnection").getWebPubSubPrivateEndpointConnection = null as any;
export const getWebPubSubPrivateEndpointConnectionOutput: typeof import("./getWebPubSubPrivateEndpointConnection").getWebPubSubPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubPrivateEndpointConnection","getWebPubSubPrivateEndpointConnectionOutput"], () => require("./getWebPubSubPrivateEndpointConnection"));

export { GetWebPubSubReplicaArgs, GetWebPubSubReplicaResult, GetWebPubSubReplicaOutputArgs } from "./getWebPubSubReplica";
export const getWebPubSubReplica: typeof import("./getWebPubSubReplica").getWebPubSubReplica = null as any;
export const getWebPubSubReplicaOutput: typeof import("./getWebPubSubReplica").getWebPubSubReplicaOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubReplica","getWebPubSubReplicaOutput"], () => require("./getWebPubSubReplica"));

export { GetWebPubSubSharedPrivateLinkResourceArgs, GetWebPubSubSharedPrivateLinkResourceResult, GetWebPubSubSharedPrivateLinkResourceOutputArgs } from "./getWebPubSubSharedPrivateLinkResource";
export const getWebPubSubSharedPrivateLinkResource: typeof import("./getWebPubSubSharedPrivateLinkResource").getWebPubSubSharedPrivateLinkResource = null as any;
export const getWebPubSubSharedPrivateLinkResourceOutput: typeof import("./getWebPubSubSharedPrivateLinkResource").getWebPubSubSharedPrivateLinkResourceOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSubSharedPrivateLinkResource","getWebPubSubSharedPrivateLinkResourceOutput"], () => require("./getWebPubSubSharedPrivateLinkResource"));

export { ListWebPubSubKeysArgs, ListWebPubSubKeysResult, ListWebPubSubKeysOutputArgs } from "./listWebPubSubKeys";
export const listWebPubSubKeys: typeof import("./listWebPubSubKeys").listWebPubSubKeys = null as any;
export const listWebPubSubKeysOutput: typeof import("./listWebPubSubKeys").listWebPubSubKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWebPubSubKeys","listWebPubSubKeysOutput"], () => require("./listWebPubSubKeys"));

export { WebPubSubArgs } from "./webPubSub";
export type WebPubSub = import("./webPubSub").WebPubSub;
export const WebPubSub: typeof import("./webPubSub").WebPubSub = null as any;
utilities.lazyLoad(exports, ["WebPubSub"], () => require("./webPubSub"));

export { WebPubSubCustomCertificateArgs } from "./webPubSubCustomCertificate";
export type WebPubSubCustomCertificate = import("./webPubSubCustomCertificate").WebPubSubCustomCertificate;
export const WebPubSubCustomCertificate: typeof import("./webPubSubCustomCertificate").WebPubSubCustomCertificate = null as any;
utilities.lazyLoad(exports, ["WebPubSubCustomCertificate"], () => require("./webPubSubCustomCertificate"));

export { WebPubSubCustomDomainArgs } from "./webPubSubCustomDomain";
export type WebPubSubCustomDomain = import("./webPubSubCustomDomain").WebPubSubCustomDomain;
export const WebPubSubCustomDomain: typeof import("./webPubSubCustomDomain").WebPubSubCustomDomain = null as any;
utilities.lazyLoad(exports, ["WebPubSubCustomDomain"], () => require("./webPubSubCustomDomain"));

export { WebPubSubHubArgs } from "./webPubSubHub";
export type WebPubSubHub = import("./webPubSubHub").WebPubSubHub;
export const WebPubSubHub: typeof import("./webPubSubHub").WebPubSubHub = null as any;
utilities.lazyLoad(exports, ["WebPubSubHub"], () => require("./webPubSubHub"));

export { WebPubSubPrivateEndpointConnectionArgs } from "./webPubSubPrivateEndpointConnection";
export type WebPubSubPrivateEndpointConnection = import("./webPubSubPrivateEndpointConnection").WebPubSubPrivateEndpointConnection;
export const WebPubSubPrivateEndpointConnection: typeof import("./webPubSubPrivateEndpointConnection").WebPubSubPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["WebPubSubPrivateEndpointConnection"], () => require("./webPubSubPrivateEndpointConnection"));

export { WebPubSubReplicaArgs } from "./webPubSubReplica";
export type WebPubSubReplica = import("./webPubSubReplica").WebPubSubReplica;
export const WebPubSubReplica: typeof import("./webPubSubReplica").WebPubSubReplica = null as any;
utilities.lazyLoad(exports, ["WebPubSubReplica"], () => require("./webPubSubReplica"));

export { WebPubSubSharedPrivateLinkResourceArgs } from "./webPubSubSharedPrivateLinkResource";
export type WebPubSubSharedPrivateLinkResource = import("./webPubSubSharedPrivateLinkResource").WebPubSubSharedPrivateLinkResource;
export const WebPubSubSharedPrivateLinkResource: typeof import("./webPubSubSharedPrivateLinkResource").WebPubSubSharedPrivateLinkResource = null as any;
utilities.lazyLoad(exports, ["WebPubSubSharedPrivateLinkResource"], () => require("./webPubSubSharedPrivateLinkResource"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:webpubsub:WebPubSub":
                return new WebPubSub(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubCustomCertificate":
                return new WebPubSubCustomCertificate(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubCustomDomain":
                return new WebPubSubCustomDomain(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubHub":
                return new WebPubSubHub(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubPrivateEndpointConnection":
                return new WebPubSubPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubReplica":
                return new WebPubSubReplica(name, <any>undefined, { urn })
            case "azure-native:webpubsub:WebPubSubSharedPrivateLinkResource":
                return new WebPubSubSharedPrivateLinkResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "webpubsub", _module)