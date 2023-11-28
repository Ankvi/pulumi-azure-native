import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSpringbootserverArgs, GetSpringbootserverResult, GetSpringbootserverOutputArgs } from "./getSpringbootserver";
export const getSpringbootserver: typeof import("./getSpringbootserver").getSpringbootserver = null as any;
export const getSpringbootserverOutput: typeof import("./getSpringbootserver").getSpringbootserverOutput = null as any;
utilities.lazyLoad(exports, ["getSpringbootserver","getSpringbootserverOutput"], () => require("./getSpringbootserver"));

export { GetSpringbootsiteArgs, GetSpringbootsiteResult, GetSpringbootsiteOutputArgs } from "./getSpringbootsite";
export const getSpringbootsite: typeof import("./getSpringbootsite").getSpringbootsite = null as any;
export const getSpringbootsiteOutput: typeof import("./getSpringbootsite").getSpringbootsiteOutput = null as any;
utilities.lazyLoad(exports, ["getSpringbootsite","getSpringbootsiteOutput"], () => require("./getSpringbootsite"));

export { SpringbootserverArgs } from "./springbootserver";
export type Springbootserver = import("./springbootserver").Springbootserver;
export const Springbootserver: typeof import("./springbootserver").Springbootserver = null as any;
utilities.lazyLoad(exports, ["Springbootserver"], () => require("./springbootserver"));

export { SpringbootsiteArgs } from "./springbootsite";
export type Springbootsite = import("./springbootsite").Springbootsite;
export const Springbootsite: typeof import("./springbootsite").Springbootsite = null as any;
utilities.lazyLoad(exports, ["Springbootsite"], () => require("./springbootsite"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:offazurespringboot/v20230101preview:Springbootserver":
                return new Springbootserver(name, <any>undefined, { urn })
            case "azure-native:offazurespringboot/v20230101preview:Springbootsite":
                return new Springbootsite(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "offazurespringboot/v20230101preview", _module)
