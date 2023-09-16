import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BuildStepArgs } from "./buildStep";
export type BuildStep = import("./buildStep").BuildStep;
export const BuildStep: typeof import("./buildStep").BuildStep = null as any;
utilities.lazyLoad(exports, ["BuildStep"], () => require("./buildStep"));

export { BuildTaskArgs } from "./buildTask";
export type BuildTask = import("./buildTask").BuildTask;
export const BuildTask: typeof import("./buildTask").BuildTask = null as any;
utilities.lazyLoad(exports, ["BuildTask"], () => require("./buildTask"));

export { GetBuildLogLinkArgs, GetBuildLogLinkResult, GetBuildLogLinkOutputArgs } from "./getBuildLogLink";
export const getBuildLogLink: typeof import("./getBuildLogLink").getBuildLogLink = null as any;
export const getBuildLogLinkOutput: typeof import("./getBuildLogLink").getBuildLogLinkOutput = null as any;
utilities.lazyLoad(exports, ["getBuildLogLink","getBuildLogLinkOutput"], () => require("./getBuildLogLink"));

export { GetBuildStepArgs, GetBuildStepResult, GetBuildStepOutputArgs } from "./getBuildStep";
export const getBuildStep: typeof import("./getBuildStep").getBuildStep = null as any;
export const getBuildStepOutput: typeof import("./getBuildStep").getBuildStepOutput = null as any;
utilities.lazyLoad(exports, ["getBuildStep","getBuildStepOutput"], () => require("./getBuildStep"));

export { GetBuildTaskArgs, GetBuildTaskResult, GetBuildTaskOutputArgs } from "./getBuildTask";
export const getBuildTask: typeof import("./getBuildTask").getBuildTask = null as any;
export const getBuildTaskOutput: typeof import("./getBuildTask").getBuildTaskOutput = null as any;
utilities.lazyLoad(exports, ["getBuildTask","getBuildTaskOutput"], () => require("./getBuildTask"));

export { GetRegistryBuildSourceUploadUrlArgs, GetRegistryBuildSourceUploadUrlResult, GetRegistryBuildSourceUploadUrlOutputArgs } from "./getRegistryBuildSourceUploadUrl";
export const getRegistryBuildSourceUploadUrl: typeof import("./getRegistryBuildSourceUploadUrl").getRegistryBuildSourceUploadUrl = null as any;
export const getRegistryBuildSourceUploadUrlOutput: typeof import("./getRegistryBuildSourceUploadUrl").getRegistryBuildSourceUploadUrlOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryBuildSourceUploadUrl","getRegistryBuildSourceUploadUrlOutput"], () => require("./getRegistryBuildSourceUploadUrl"));

export { ListBuildStepBuildArgumentsArgs, ListBuildStepBuildArgumentsResult, ListBuildStepBuildArgumentsOutputArgs } from "./listBuildStepBuildArguments";
export const listBuildStepBuildArguments: typeof import("./listBuildStepBuildArguments").listBuildStepBuildArguments = null as any;
export const listBuildStepBuildArgumentsOutput: typeof import("./listBuildStepBuildArguments").listBuildStepBuildArgumentsOutput = null as any;
utilities.lazyLoad(exports, ["listBuildStepBuildArguments","listBuildStepBuildArgumentsOutput"], () => require("./listBuildStepBuildArguments"));

export { ListBuildTaskSourceRepositoryPropertiesArgs, ListBuildTaskSourceRepositoryPropertiesResult, ListBuildTaskSourceRepositoryPropertiesOutputArgs } from "./listBuildTaskSourceRepositoryProperties";
export const listBuildTaskSourceRepositoryProperties: typeof import("./listBuildTaskSourceRepositoryProperties").listBuildTaskSourceRepositoryProperties = null as any;
export const listBuildTaskSourceRepositoryPropertiesOutput: typeof import("./listBuildTaskSourceRepositoryProperties").listBuildTaskSourceRepositoryPropertiesOutput = null as any;
utilities.lazyLoad(exports, ["listBuildTaskSourceRepositoryProperties","listBuildTaskSourceRepositoryPropertiesOutput"], () => require("./listBuildTaskSourceRepositoryProperties"));


// Export enums:
export * from "../types/enums/v20180201preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20180201preview:BuildStep":
                return new BuildStep(name, <any>undefined, { urn })
            case "azure-native:containerregistry/v20180201preview:BuildTask":
                return new BuildTask(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20180201preview", _module)
