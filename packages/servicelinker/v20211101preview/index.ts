import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLinkerArgs, GetLinkerResult, GetLinkerOutputArgs } from "./getLinker";
export const getLinker: typeof import("./getLinker").getLinker = null as any;
export const getLinkerOutput: typeof import("./getLinker").getLinkerOutput = null as any;
utilities.lazyLoad(exports, ["getLinker","getLinkerOutput"], () => require("./getLinker"));

export { LinkerArgs } from "./linker";
export type Linker = import("./linker").Linker;
export const Linker: typeof import("./linker").Linker = null as any;
utilities.lazyLoad(exports, ["Linker"], () => require("./linker"));

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
            case "azure-native:servicelinker/v20211101preview:Linker":
                return new Linker(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicelinker/v20211101preview", _module)
