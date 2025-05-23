import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { ConnectorDryrunArgs } from "./connectorDryrun";
export type ConnectorDryrun = import("./connectorDryrun").ConnectorDryrun;
export const ConnectorDryrun: typeof import("./connectorDryrun").ConnectorDryrun = null as any;
utilities.lazyLoad(exports, ["ConnectorDryrun"], () => require("./connectorDryrun"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetConnectorDryrunArgs, GetConnectorDryrunResult, GetConnectorDryrunOutputArgs } from "./getConnectorDryrun";
export const getConnectorDryrun: typeof import("./getConnectorDryrun").getConnectorDryrun = null as any;
export const getConnectorDryrunOutput: typeof import("./getConnectorDryrun").getConnectorDryrunOutput = null as any;
utilities.lazyLoad(exports, ["getConnectorDryrun","getConnectorDryrunOutput"], () => require("./getConnectorDryrun"));

export { GetLinkerArgs, GetLinkerResult, GetLinkerOutputArgs } from "./getLinker";
export const getLinker: typeof import("./getLinker").getLinker = null as any;
export const getLinkerOutput: typeof import("./getLinker").getLinkerOutput = null as any;
utilities.lazyLoad(exports, ["getLinker","getLinkerOutput"], () => require("./getLinker"));

export { GetLinkerDryrunArgs, GetLinkerDryrunResult, GetLinkerDryrunOutputArgs } from "./getLinkerDryrun";
export const getLinkerDryrun: typeof import("./getLinkerDryrun").getLinkerDryrun = null as any;
export const getLinkerDryrunOutput: typeof import("./getLinkerDryrun").getLinkerDryrunOutput = null as any;
utilities.lazyLoad(exports, ["getLinkerDryrun","getLinkerDryrunOutput"], () => require("./getLinkerDryrun"));

export { LinkerArgs } from "./linker";
export type Linker = import("./linker").Linker;
export const Linker: typeof import("./linker").Linker = null as any;
utilities.lazyLoad(exports, ["Linker"], () => require("./linker"));

export { LinkerDryrunArgs } from "./linkerDryrun";
export type LinkerDryrun = import("./linkerDryrun").LinkerDryrun;
export const LinkerDryrun: typeof import("./linkerDryrun").LinkerDryrun = null as any;
utilities.lazyLoad(exports, ["LinkerDryrun"], () => require("./linkerDryrun"));

export { ListLinkerConfigurationsArgs, ListLinkerConfigurationsResult, ListLinkerConfigurationsOutputArgs } from "./listLinkerConfigurations";
export const listLinkerConfigurations: typeof import("./listLinkerConfigurations").listLinkerConfigurations = null as any;
export const listLinkerConfigurationsOutput: typeof import("./listLinkerConfigurations").listLinkerConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listLinkerConfigurations","listLinkerConfigurationsOutput"], () => require("./listLinkerConfigurations"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicelinker:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:servicelinker:ConnectorDryrun":
                return new ConnectorDryrun(name, <any>undefined, { urn })
            case "azure-native:servicelinker:Linker":
                return new Linker(name, <any>undefined, { urn })
            case "azure-native:servicelinker:LinkerDryrun":
                return new LinkerDryrun(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicelinker", _module)