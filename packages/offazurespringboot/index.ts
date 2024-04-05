import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSpringbootappArgs, GetSpringbootappResult, GetSpringbootappOutputArgs } from "./getSpringbootapp";
export const getSpringbootapp: typeof import("./getSpringbootapp").getSpringbootapp = null as any;
export const getSpringbootappOutput: typeof import("./getSpringbootapp").getSpringbootappOutput = null as any;
utilities.lazyLoad(exports, ["getSpringbootapp","getSpringbootappOutput"], () => require("./getSpringbootapp"));

export { GetSpringbootserverArgs, GetSpringbootserverResult, GetSpringbootserverOutputArgs } from "./getSpringbootserver";
export const getSpringbootserver: typeof import("./getSpringbootserver").getSpringbootserver = null as any;
export const getSpringbootserverOutput: typeof import("./getSpringbootserver").getSpringbootserverOutput = null as any;
utilities.lazyLoad(exports, ["getSpringbootserver","getSpringbootserverOutput"], () => require("./getSpringbootserver"));

export { GetSpringbootsiteArgs, GetSpringbootsiteResult, GetSpringbootsiteOutputArgs } from "./getSpringbootsite";
export const getSpringbootsite: typeof import("./getSpringbootsite").getSpringbootsite = null as any;
export const getSpringbootsiteOutput: typeof import("./getSpringbootsite").getSpringbootsiteOutput = null as any;
utilities.lazyLoad(exports, ["getSpringbootsite","getSpringbootsiteOutput"], () => require("./getSpringbootsite"));

export { SpringbootappArgs } from "./springbootapp";
export type Springbootapp = import("./springbootapp").Springbootapp;
export const Springbootapp: typeof import("./springbootapp").Springbootapp = null as any;
utilities.lazyLoad(exports, ["Springbootapp"], () => require("./springbootapp"));

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
            case "azure-native:offazurespringboot:Springbootapp":
                return new Springbootapp(name, <any>undefined, { urn })
            case "azure-native:offazurespringboot:Springbootserver":
                return new Springbootserver(name, <any>undefined, { urn })
            case "azure-native:offazurespringboot:Springbootsite":
                return new Springbootsite(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "offazurespringboot", _module)