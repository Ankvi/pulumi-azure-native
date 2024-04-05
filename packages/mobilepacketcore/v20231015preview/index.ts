import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AmfDeploymentArgs } from "./amfDeployment";
export type AmfDeployment = import("./amfDeployment").AmfDeployment;
export const AmfDeployment: typeof import("./amfDeployment").AmfDeployment = null as any;
utilities.lazyLoad(exports, ["AmfDeployment"], () => require("./amfDeployment"));

export { ClusterServiceArgs } from "./clusterService";
export type ClusterService = import("./clusterService").ClusterService;
export const ClusterService: typeof import("./clusterService").ClusterService = null as any;
utilities.lazyLoad(exports, ["ClusterService"], () => require("./clusterService"));

export { GetAmfDeploymentArgs, GetAmfDeploymentResult, GetAmfDeploymentOutputArgs } from "./getAmfDeployment";
export const getAmfDeployment: typeof import("./getAmfDeployment").getAmfDeployment = null as any;
export const getAmfDeploymentOutput: typeof import("./getAmfDeployment").getAmfDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getAmfDeployment","getAmfDeploymentOutput"], () => require("./getAmfDeployment"));

export { GetClusterServiceArgs, GetClusterServiceResult, GetClusterServiceOutputArgs } from "./getClusterService";
export const getClusterService: typeof import("./getClusterService").getClusterService = null as any;
export const getClusterServiceOutput: typeof import("./getClusterService").getClusterServiceOutput = null as any;
utilities.lazyLoad(exports, ["getClusterService","getClusterServiceOutput"], () => require("./getClusterService"));

export { GetNrfDeploymentArgs, GetNrfDeploymentResult, GetNrfDeploymentOutputArgs } from "./getNrfDeployment";
export const getNrfDeployment: typeof import("./getNrfDeployment").getNrfDeployment = null as any;
export const getNrfDeploymentOutput: typeof import("./getNrfDeployment").getNrfDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getNrfDeployment","getNrfDeploymentOutput"], () => require("./getNrfDeployment"));

export { GetNssfDeploymentArgs, GetNssfDeploymentResult, GetNssfDeploymentOutputArgs } from "./getNssfDeployment";
export const getNssfDeployment: typeof import("./getNssfDeployment").getNssfDeployment = null as any;
export const getNssfDeploymentOutput: typeof import("./getNssfDeployment").getNssfDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getNssfDeployment","getNssfDeploymentOutput"], () => require("./getNssfDeployment"));

export { GetObservabilityServiceArgs, GetObservabilityServiceResult, GetObservabilityServiceOutputArgs } from "./getObservabilityService";
export const getObservabilityService: typeof import("./getObservabilityService").getObservabilityService = null as any;
export const getObservabilityServiceOutput: typeof import("./getObservabilityService").getObservabilityServiceOutput = null as any;
utilities.lazyLoad(exports, ["getObservabilityService","getObservabilityServiceOutput"], () => require("./getObservabilityService"));

export { GetSmfDeploymentArgs, GetSmfDeploymentResult, GetSmfDeploymentOutputArgs } from "./getSmfDeployment";
export const getSmfDeployment: typeof import("./getSmfDeployment").getSmfDeployment = null as any;
export const getSmfDeploymentOutput: typeof import("./getSmfDeployment").getSmfDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getSmfDeployment","getSmfDeploymentOutput"], () => require("./getSmfDeployment"));

export { GetUpfDeploymentArgs, GetUpfDeploymentResult, GetUpfDeploymentOutputArgs } from "./getUpfDeployment";
export const getUpfDeployment: typeof import("./getUpfDeployment").getUpfDeployment = null as any;
export const getUpfDeploymentOutput: typeof import("./getUpfDeployment").getUpfDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getUpfDeployment","getUpfDeploymentOutput"], () => require("./getUpfDeployment"));

export { NrfDeploymentArgs } from "./nrfDeployment";
export type NrfDeployment = import("./nrfDeployment").NrfDeployment;
export const NrfDeployment: typeof import("./nrfDeployment").NrfDeployment = null as any;
utilities.lazyLoad(exports, ["NrfDeployment"], () => require("./nrfDeployment"));

export { NssfDeploymentArgs } from "./nssfDeployment";
export type NssfDeployment = import("./nssfDeployment").NssfDeployment;
export const NssfDeployment: typeof import("./nssfDeployment").NssfDeployment = null as any;
utilities.lazyLoad(exports, ["NssfDeployment"], () => require("./nssfDeployment"));

export { ObservabilityServiceArgs } from "./observabilityService";
export type ObservabilityService = import("./observabilityService").ObservabilityService;
export const ObservabilityService: typeof import("./observabilityService").ObservabilityService = null as any;
utilities.lazyLoad(exports, ["ObservabilityService"], () => require("./observabilityService"));

export { SmfDeploymentArgs } from "./smfDeployment";
export type SmfDeployment = import("./smfDeployment").SmfDeployment;
export const SmfDeployment: typeof import("./smfDeployment").SmfDeployment = null as any;
utilities.lazyLoad(exports, ["SmfDeployment"], () => require("./smfDeployment"));

export { UpfDeploymentArgs } from "./upfDeployment";
export type UpfDeployment = import("./upfDeployment").UpfDeployment;
export const UpfDeployment: typeof import("./upfDeployment").UpfDeployment = null as any;
utilities.lazyLoad(exports, ["UpfDeployment"], () => require("./upfDeployment"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mobilepacketcore/v20231015preview:AmfDeployment":
                return new AmfDeployment(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:ClusterService":
                return new ClusterService(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:NrfDeployment":
                return new NrfDeployment(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:NssfDeployment":
                return new NssfDeployment(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:ObservabilityService":
                return new ObservabilityService(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:SmfDeployment":
                return new SmfDeployment(name, <any>undefined, { urn })
            case "azure-native:mobilepacketcore/v20231015preview:UpfDeployment":
                return new UpfDeployment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mobilepacketcore/v20231015preview", _module)