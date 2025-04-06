import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DomainServiceArgs } from "./domainService";
export type DomainService = import("./domainService").DomainService;
export const DomainService: typeof import("./domainService").DomainService = null as any;
utilities.lazyLoad(exports, ["DomainService"], () => require("./domainService"));

export { GetDomainServiceArgs, GetDomainServiceResult, GetDomainServiceOutputArgs } from "./getDomainService";
export const getDomainService: typeof import("./getDomainService").getDomainService = null as any;
export const getDomainServiceOutput: typeof import("./getDomainService").getDomainServiceOutput = null as any;
utilities.lazyLoad(exports, ["getDomainService","getDomainServiceOutput"], () => require("./getDomainService"));

export { GetOuContainerArgs, GetOuContainerResult, GetOuContainerOutputArgs } from "./getOuContainer";
export const getOuContainer: typeof import("./getOuContainer").getOuContainer = null as any;
export const getOuContainerOutput: typeof import("./getOuContainer").getOuContainerOutput = null as any;
utilities.lazyLoad(exports, ["getOuContainer","getOuContainerOutput"], () => require("./getOuContainer"));

export { OuContainerArgs } from "./ouContainer";
export type OuContainer = import("./ouContainer").OuContainer;
export const OuContainer: typeof import("./ouContainer").OuContainer = null as any;
utilities.lazyLoad(exports, ["OuContainer"], () => require("./ouContainer"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:aad:DomainService":
                return new DomainService(name, <any>undefined, { urn })
            case "azure-native:aad:OuContainer":
                return new OuContainer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "aad", _module)