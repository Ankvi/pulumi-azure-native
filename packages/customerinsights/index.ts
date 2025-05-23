import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { ConnectorMappingArgs } from "./connectorMapping";
export type ConnectorMapping = import("./connectorMapping").ConnectorMapping;
export const ConnectorMapping: typeof import("./connectorMapping").ConnectorMapping = null as any;
utilities.lazyLoad(exports, ["ConnectorMapping"], () => require("./connectorMapping"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetConnectorMappingArgs, GetConnectorMappingResult, GetConnectorMappingOutputArgs } from "./getConnectorMapping";
export const getConnectorMapping: typeof import("./getConnectorMapping").getConnectorMapping = null as any;
export const getConnectorMappingOutput: typeof import("./getConnectorMapping").getConnectorMappingOutput = null as any;
utilities.lazyLoad(exports, ["getConnectorMapping","getConnectorMappingOutput"], () => require("./getConnectorMapping"));

export { GetHubArgs, GetHubResult, GetHubOutputArgs } from "./getHub";
export const getHub: typeof import("./getHub").getHub = null as any;
export const getHubOutput: typeof import("./getHub").getHubOutput = null as any;
utilities.lazyLoad(exports, ["getHub","getHubOutput"], () => require("./getHub"));

export { GetImageUploadUrlForDataArgs, GetImageUploadUrlForDataResult, GetImageUploadUrlForDataOutputArgs } from "./getImageUploadUrlForData";
export const getImageUploadUrlForData: typeof import("./getImageUploadUrlForData").getImageUploadUrlForData = null as any;
export const getImageUploadUrlForDataOutput: typeof import("./getImageUploadUrlForData").getImageUploadUrlForDataOutput = null as any;
utilities.lazyLoad(exports, ["getImageUploadUrlForData","getImageUploadUrlForDataOutput"], () => require("./getImageUploadUrlForData"));

export { GetImageUploadUrlForEntityTypeArgs, GetImageUploadUrlForEntityTypeResult, GetImageUploadUrlForEntityTypeOutputArgs } from "./getImageUploadUrlForEntityType";
export const getImageUploadUrlForEntityType: typeof import("./getImageUploadUrlForEntityType").getImageUploadUrlForEntityType = null as any;
export const getImageUploadUrlForEntityTypeOutput: typeof import("./getImageUploadUrlForEntityType").getImageUploadUrlForEntityTypeOutput = null as any;
utilities.lazyLoad(exports, ["getImageUploadUrlForEntityType","getImageUploadUrlForEntityTypeOutput"], () => require("./getImageUploadUrlForEntityType"));

export { GetKpiArgs, GetKpiResult, GetKpiOutputArgs } from "./getKpi";
export const getKpi: typeof import("./getKpi").getKpi = null as any;
export const getKpiOutput: typeof import("./getKpi").getKpiOutput = null as any;
utilities.lazyLoad(exports, ["getKpi","getKpiOutput"], () => require("./getKpi"));

export { GetLinkArgs, GetLinkResult, GetLinkOutputArgs } from "./getLink";
export const getLink: typeof import("./getLink").getLink = null as any;
export const getLinkOutput: typeof import("./getLink").getLinkOutput = null as any;
utilities.lazyLoad(exports, ["getLink","getLinkOutput"], () => require("./getLink"));

export { GetPredictionArgs, GetPredictionResult, GetPredictionOutputArgs } from "./getPrediction";
export const getPrediction: typeof import("./getPrediction").getPrediction = null as any;
export const getPredictionOutput: typeof import("./getPrediction").getPredictionOutput = null as any;
utilities.lazyLoad(exports, ["getPrediction","getPredictionOutput"], () => require("./getPrediction"));

export { GetPredictionModelStatusArgs, GetPredictionModelStatusResult, GetPredictionModelStatusOutputArgs } from "./getPredictionModelStatus";
export const getPredictionModelStatus: typeof import("./getPredictionModelStatus").getPredictionModelStatus = null as any;
export const getPredictionModelStatusOutput: typeof import("./getPredictionModelStatus").getPredictionModelStatusOutput = null as any;
utilities.lazyLoad(exports, ["getPredictionModelStatus","getPredictionModelStatusOutput"], () => require("./getPredictionModelStatus"));

export { GetPredictionTrainingResultsArgs, GetPredictionTrainingResultsResult, GetPredictionTrainingResultsOutputArgs } from "./getPredictionTrainingResults";
export const getPredictionTrainingResults: typeof import("./getPredictionTrainingResults").getPredictionTrainingResults = null as any;
export const getPredictionTrainingResultsOutput: typeof import("./getPredictionTrainingResults").getPredictionTrainingResultsOutput = null as any;
utilities.lazyLoad(exports, ["getPredictionTrainingResults","getPredictionTrainingResultsOutput"], () => require("./getPredictionTrainingResults"));

export { GetProfileArgs, GetProfileResult, GetProfileOutputArgs } from "./getProfile";
export const getProfile: typeof import("./getProfile").getProfile = null as any;
export const getProfileOutput: typeof import("./getProfile").getProfileOutput = null as any;
utilities.lazyLoad(exports, ["getProfile","getProfileOutput"], () => require("./getProfile"));

export { GetRelationshipArgs, GetRelationshipResult, GetRelationshipOutputArgs } from "./getRelationship";
export const getRelationship: typeof import("./getRelationship").getRelationship = null as any;
export const getRelationshipOutput: typeof import("./getRelationship").getRelationshipOutput = null as any;
utilities.lazyLoad(exports, ["getRelationship","getRelationshipOutput"], () => require("./getRelationship"));

export { GetRelationshipLinkArgs, GetRelationshipLinkResult, GetRelationshipLinkOutputArgs } from "./getRelationshipLink";
export const getRelationshipLink: typeof import("./getRelationshipLink").getRelationshipLink = null as any;
export const getRelationshipLinkOutput: typeof import("./getRelationshipLink").getRelationshipLinkOutput = null as any;
utilities.lazyLoad(exports, ["getRelationshipLink","getRelationshipLinkOutput"], () => require("./getRelationshipLink"));

export { GetRoleAssignmentArgs, GetRoleAssignmentResult, GetRoleAssignmentOutputArgs } from "./getRoleAssignment";
export const getRoleAssignment: typeof import("./getRoleAssignment").getRoleAssignment = null as any;
export const getRoleAssignmentOutput: typeof import("./getRoleAssignment").getRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getRoleAssignment","getRoleAssignmentOutput"], () => require("./getRoleAssignment"));

export { GetViewArgs, GetViewResult, GetViewOutputArgs } from "./getView";
export const getView: typeof import("./getView").getView = null as any;
export const getViewOutput: typeof import("./getView").getViewOutput = null as any;
utilities.lazyLoad(exports, ["getView","getViewOutput"], () => require("./getView"));

export { HubArgs } from "./hub";
export type Hub = import("./hub").Hub;
export const Hub: typeof import("./hub").Hub = null as any;
utilities.lazyLoad(exports, ["Hub"], () => require("./hub"));

export { KpiArgs } from "./kpi";
export type Kpi = import("./kpi").Kpi;
export const Kpi: typeof import("./kpi").Kpi = null as any;
utilities.lazyLoad(exports, ["Kpi"], () => require("./kpi"));

export { LinkArgs } from "./link";
export type Link = import("./link").Link;
export const Link: typeof import("./link").Link = null as any;
utilities.lazyLoad(exports, ["Link"], () => require("./link"));

export { PredictionArgs } from "./prediction";
export type Prediction = import("./prediction").Prediction;
export const Prediction: typeof import("./prediction").Prediction = null as any;
utilities.lazyLoad(exports, ["Prediction"], () => require("./prediction"));

export { ProfileArgs } from "./profile";
export type Profile = import("./profile").Profile;
export const Profile: typeof import("./profile").Profile = null as any;
utilities.lazyLoad(exports, ["Profile"], () => require("./profile"));

export { RelationshipArgs } from "./relationship";
export type Relationship = import("./relationship").Relationship;
export const Relationship: typeof import("./relationship").Relationship = null as any;
utilities.lazyLoad(exports, ["Relationship"], () => require("./relationship"));

export { RelationshipLinkArgs } from "./relationshipLink";
export type RelationshipLink = import("./relationshipLink").RelationshipLink;
export const RelationshipLink: typeof import("./relationshipLink").RelationshipLink = null as any;
utilities.lazyLoad(exports, ["RelationshipLink"], () => require("./relationshipLink"));

export { RoleAssignmentArgs } from "./roleAssignment";
export type RoleAssignment = import("./roleAssignment").RoleAssignment;
export const RoleAssignment: typeof import("./roleAssignment").RoleAssignment = null as any;
utilities.lazyLoad(exports, ["RoleAssignment"], () => require("./roleAssignment"));

export { ViewArgs } from "./view";
export type View = import("./view").View;
export const View: typeof import("./view").View = null as any;
utilities.lazyLoad(exports, ["View"], () => require("./view"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:customerinsights:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:customerinsights:ConnectorMapping":
                return new ConnectorMapping(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Hub":
                return new Hub(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Kpi":
                return new Kpi(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Link":
                return new Link(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Prediction":
                return new Prediction(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-native:customerinsights:Relationship":
                return new Relationship(name, <any>undefined, { urn })
            case "azure-native:customerinsights:RelationshipLink":
                return new RelationshipLink(name, <any>undefined, { urn })
            case "azure-native:customerinsights:RoleAssignment":
                return new RoleAssignment(name, <any>undefined, { urn })
            case "azure-native:customerinsights:View":
                return new View(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "customerinsights", _module)