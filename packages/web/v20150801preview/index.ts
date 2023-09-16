import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectionArgs } from "./connection";
export type Connection = import("./connection").Connection;
export const Connection: typeof import("./connection").Connection = null as any;
utilities.lazyLoad(exports, ["Connection"], () => require("./connection"));

export { GetConnectionArgs, GetConnectionResult, GetConnectionOutputArgs } from "./getConnection";
export const getConnection: typeof import("./getConnection").getConnection = null as any;
export const getConnectionOutput: typeof import("./getConnection").getConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getConnection","getConnectionOutput"], () => require("./getConnection"));

export { ListConnectionConsentLinksArgs, ListConnectionConsentLinksResult, ListConnectionConsentLinksOutputArgs } from "./listConnectionConsentLinks";
export const listConnectionConsentLinks: typeof import("./listConnectionConsentLinks").listConnectionConsentLinks = null as any;
export const listConnectionConsentLinksOutput: typeof import("./listConnectionConsentLinks").listConnectionConsentLinksOutput = null as any;
utilities.lazyLoad(exports, ["listConnectionConsentLinks","listConnectionConsentLinksOutput"], () => require("./listConnectionConsentLinks"));

export { ListConnectionKeysArgs, ListConnectionKeysResult, ListConnectionKeysOutputArgs } from "./listConnectionKeys";
export const listConnectionKeys: typeof import("./listConnectionKeys").listConnectionKeys = null as any;
export const listConnectionKeysOutput: typeof import("./listConnectionKeys").listConnectionKeysOutput = null as any;
utilities.lazyLoad(exports, ["listConnectionKeys","listConnectionKeysOutput"], () => require("./listConnectionKeys"));


// Export enums:
export * from "../types/enums/v20150801preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:web/v20150801preview:Connection":
                return new Connection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "web/v20150801preview", _module)
