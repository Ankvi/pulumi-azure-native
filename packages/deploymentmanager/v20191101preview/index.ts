import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArtifactSourceArgs } from "./artifactSource";
export type ArtifactSource = import("./artifactSource").ArtifactSource;
export const ArtifactSource: typeof import("./artifactSource").ArtifactSource = null as any;
utilities.lazyLoad(exports, ["ArtifactSource"], () => require("./artifactSource"));

export { GetArtifactSourceArgs, GetArtifactSourceResult, GetArtifactSourceOutputArgs } from "./getArtifactSource";
export const getArtifactSource: typeof import("./getArtifactSource").getArtifactSource = null as any;
export const getArtifactSourceOutput: typeof import("./getArtifactSource").getArtifactSourceOutput = null as any;
utilities.lazyLoad(exports, ["getArtifactSource","getArtifactSourceOutput"], () => require("./getArtifactSource"));

export { GetRolloutArgs, GetRolloutResult, GetRolloutOutputArgs } from "./getRollout";
export const getRollout: typeof import("./getRollout").getRollout = null as any;
export const getRolloutOutput: typeof import("./getRollout").getRolloutOutput = null as any;
utilities.lazyLoad(exports, ["getRollout","getRolloutOutput"], () => require("./getRollout"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetServiceTopologyArgs, GetServiceTopologyResult, GetServiceTopologyOutputArgs } from "./getServiceTopology";
export const getServiceTopology: typeof import("./getServiceTopology").getServiceTopology = null as any;
export const getServiceTopologyOutput: typeof import("./getServiceTopology").getServiceTopologyOutput = null as any;
utilities.lazyLoad(exports, ["getServiceTopology","getServiceTopologyOutput"], () => require("./getServiceTopology"));

export { GetServiceUnitArgs, GetServiceUnitResult, GetServiceUnitOutputArgs } from "./getServiceUnit";
export const getServiceUnit: typeof import("./getServiceUnit").getServiceUnit = null as any;
export const getServiceUnitOutput: typeof import("./getServiceUnit").getServiceUnitOutput = null as any;
utilities.lazyLoad(exports, ["getServiceUnit","getServiceUnitOutput"], () => require("./getServiceUnit"));

export { GetStepArgs, GetStepResult, GetStepOutputArgs } from "./getStep";
export const getStep: typeof import("./getStep").getStep = null as any;
export const getStepOutput: typeof import("./getStep").getStepOutput = null as any;
utilities.lazyLoad(exports, ["getStep","getStepOutput"], () => require("./getStep"));

export { RolloutArgs } from "./rollout";
export type Rollout = import("./rollout").Rollout;
export const Rollout: typeof import("./rollout").Rollout = null as any;
utilities.lazyLoad(exports, ["Rollout"], () => require("./rollout"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { ServiceTopologyArgs } from "./serviceTopology";
export type ServiceTopology = import("./serviceTopology").ServiceTopology;
export const ServiceTopology: typeof import("./serviceTopology").ServiceTopology = null as any;
utilities.lazyLoad(exports, ["ServiceTopology"], () => require("./serviceTopology"));

export { ServiceUnitArgs } from "./serviceUnit";
export type ServiceUnit = import("./serviceUnit").ServiceUnit;
export const ServiceUnit: typeof import("./serviceUnit").ServiceUnit = null as any;
utilities.lazyLoad(exports, ["ServiceUnit"], () => require("./serviceUnit"));

export { StepArgs } from "./step";
export type Step = import("./step").Step;
export const Step: typeof import("./step").Step = null as any;
utilities.lazyLoad(exports, ["Step"], () => require("./step"));


// Export enums:
export * from "../types/enums/v20191101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:deploymentmanager/v20191101preview:ArtifactSource":
                return new ArtifactSource(name, <any>undefined, { urn })
            case "azure-native:deploymentmanager/v20191101preview:Rollout":
                return new Rollout(name, <any>undefined, { urn })
            case "azure-native:deploymentmanager/v20191101preview:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:deploymentmanager/v20191101preview:ServiceTopology":
                return new ServiceTopology(name, <any>undefined, { urn })
            case "azure-native:deploymentmanager/v20191101preview:ServiceUnit":
                return new ServiceUnit(name, <any>undefined, { urn })
            case "azure-native:deploymentmanager/v20191101preview:Step":
                return new Step(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "deploymentmanager/v20191101preview", _module)
