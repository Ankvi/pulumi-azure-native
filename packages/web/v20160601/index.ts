import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectionArgs } from "./connection";
export type Connection = import("./connection").Connection;
export const Connection: typeof import("./connection").Connection = null as any;
utilities.lazyLoad(exports, ["Connection"], () => require("./connection"));

export { ConnectionGatewayArgs } from "./connectionGateway";
export type ConnectionGateway = import("./connectionGateway").ConnectionGateway;
export const ConnectionGateway: typeof import("./connectionGateway").ConnectionGateway = null as any;
utilities.lazyLoad(exports, ["ConnectionGateway"], () => require("./connectionGateway"));

export { CustomApiArgs } from "./customApi";
export type CustomApi = import("./customApi").CustomApi;
export const CustomApi: typeof import("./customApi").CustomApi = null as any;
utilities.lazyLoad(exports, ["CustomApi"], () => require("./customApi"));

export { GetConnectionArgs, GetConnectionResult, GetConnectionOutputArgs } from "./getConnection";
export const getConnection: typeof import("./getConnection").getConnection = null as any;
export const getConnectionOutput: typeof import("./getConnection").getConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getConnection","getConnectionOutput"], () => require("./getConnection"));

export { GetConnectionGatewayArgs, GetConnectionGatewayResult, GetConnectionGatewayOutputArgs } from "./getConnectionGateway";
export const getConnectionGateway: typeof import("./getConnectionGateway").getConnectionGateway = null as any;
export const getConnectionGatewayOutput: typeof import("./getConnectionGateway").getConnectionGatewayOutput = null as any;
utilities.lazyLoad(exports, ["getConnectionGateway","getConnectionGatewayOutput"], () => require("./getConnectionGateway"));

export { GetCustomApiArgs, GetCustomApiResult, GetCustomApiOutputArgs } from "./getCustomApi";
export const getCustomApi: typeof import("./getCustomApi").getCustomApi = null as any;
export const getCustomApiOutput: typeof import("./getCustomApi").getCustomApiOutput = null as any;
utilities.lazyLoad(exports, ["getCustomApi","getCustomApiOutput"], () => require("./getCustomApi"));

export { ListConnectionConsentLinksArgs, ListConnectionConsentLinksResult, ListConnectionConsentLinksOutputArgs } from "./listConnectionConsentLinks";
export const listConnectionConsentLinks: typeof import("./listConnectionConsentLinks").listConnectionConsentLinks = null as any;
export const listConnectionConsentLinksOutput: typeof import("./listConnectionConsentLinks").listConnectionConsentLinksOutput = null as any;
utilities.lazyLoad(exports, ["listConnectionConsentLinks","listConnectionConsentLinksOutput"], () => require("./listConnectionConsentLinks"));

export { ListCustomApiWsdlInterfacesArgs, ListCustomApiWsdlInterfacesResult, ListCustomApiWsdlInterfacesOutputArgs } from "./listCustomApiWsdlInterfaces";
export const listCustomApiWsdlInterfaces: typeof import("./listCustomApiWsdlInterfaces").listCustomApiWsdlInterfaces = null as any;
export const listCustomApiWsdlInterfacesOutput: typeof import("./listCustomApiWsdlInterfaces").listCustomApiWsdlInterfacesOutput = null as any;
utilities.lazyLoad(exports, ["listCustomApiWsdlInterfaces","listCustomApiWsdlInterfacesOutput"], () => require("./listCustomApiWsdlInterfaces"));


// Export enums:
export * from "../types/enums/v20160601";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20160601:Connection":
                return new Connection(name, <any>undefined, { urn })
            case "azure-native:web/v20160601:ConnectionGateway":
                return new ConnectionGateway(name, <any>undefined, { urn })
            case "azure-native:web/v20160601:CustomApi":
                return new CustomApi(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20160601", _module)
