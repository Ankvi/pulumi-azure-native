import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AttestationProviderArgs } from "./attestationProvider";
export type AttestationProvider = import("./attestationProvider").AttestationProvider;
export const AttestationProvider: typeof import("./attestationProvider").AttestationProvider = null as any;
utilities.lazyLoad(exports, ["AttestationProvider"], () => require("./attestationProvider"));

export { GetAttestationProviderArgs, GetAttestationProviderResult, GetAttestationProviderOutputArgs } from "./getAttestationProvider";
export const getAttestationProvider: typeof import("./getAttestationProvider").getAttestationProvider = null as any;
export const getAttestationProviderOutput: typeof import("./getAttestationProvider").getAttestationProviderOutput = null as any;
utilities.lazyLoad(exports, ["getAttestationProvider","getAttestationProviderOutput"], () => require("./getAttestationProvider"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:attestation:AttestationProvider":
                return new AttestationProvider(name, <any>undefined, { urn })
            case "azure-native:attestation:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "attestation", _module)