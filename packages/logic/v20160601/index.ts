import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgreementArgs } from "./agreement";
export type Agreement = import("./agreement").Agreement;
export const Agreement: typeof import("./agreement").Agreement = null as any;
utilities.lazyLoad(exports, ["Agreement"], () => require("./agreement"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { GetAgreementArgs, GetAgreementResult, GetAgreementOutputArgs } from "./getAgreement";
export const getAgreement: typeof import("./getAgreement").getAgreement = null as any;
export const getAgreementOutput: typeof import("./getAgreement").getAgreementOutput = null as any;
utilities.lazyLoad(exports, ["getAgreement","getAgreementOutput"], () => require("./getAgreement"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetMapArgs, GetMapResult, GetMapOutputArgs } from "./getMap";
export const getMap: typeof import("./getMap").getMap = null as any;
export const getMapOutput: typeof import("./getMap").getMapOutput = null as any;
utilities.lazyLoad(exports, ["getMap","getMapOutput"], () => require("./getMap"));

export { GetPartnerArgs, GetPartnerResult, GetPartnerOutputArgs } from "./getPartner";
export const getPartner: typeof import("./getPartner").getPartner = null as any;
export const getPartnerOutput: typeof import("./getPartner").getPartnerOutput = null as any;
utilities.lazyLoad(exports, ["getPartner","getPartnerOutput"], () => require("./getPartner"));

export { GetRosettaNetProcessConfigurationArgs, GetRosettaNetProcessConfigurationResult, GetRosettaNetProcessConfigurationOutputArgs } from "./getRosettaNetProcessConfiguration";
export const getRosettaNetProcessConfiguration: typeof import("./getRosettaNetProcessConfiguration").getRosettaNetProcessConfiguration = null as any;
export const getRosettaNetProcessConfigurationOutput: typeof import("./getRosettaNetProcessConfiguration").getRosettaNetProcessConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getRosettaNetProcessConfiguration","getRosettaNetProcessConfigurationOutput"], () => require("./getRosettaNetProcessConfiguration"));

export { GetSchemaArgs, GetSchemaResult, GetSchemaOutputArgs } from "./getSchema";
export const getSchema: typeof import("./getSchema").getSchema = null as any;
export const getSchemaOutput: typeof import("./getSchema").getSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getSchema","getSchemaOutput"], () => require("./getSchema"));

export { GetSessionArgs, GetSessionResult, GetSessionOutputArgs } from "./getSession";
export const getSession: typeof import("./getSession").getSession = null as any;
export const getSessionOutput: typeof import("./getSession").getSessionOutput = null as any;
utilities.lazyLoad(exports, ["getSession","getSessionOutput"], () => require("./getSession"));

export { GetWorkflowArgs, GetWorkflowResult, GetWorkflowOutputArgs } from "./getWorkflow";
export const getWorkflow: typeof import("./getWorkflow").getWorkflow = null as any;
export const getWorkflowOutput: typeof import("./getWorkflow").getWorkflowOutput = null as any;
utilities.lazyLoad(exports, ["getWorkflow","getWorkflowOutput"], () => require("./getWorkflow"));

export { ListWorkflowCallbackUrlArgs, ListWorkflowCallbackUrlResult, ListWorkflowCallbackUrlOutputArgs } from "./listWorkflowCallbackUrl";
export const listWorkflowCallbackUrl: typeof import("./listWorkflowCallbackUrl").listWorkflowCallbackUrl = null as any;
export const listWorkflowCallbackUrlOutput: typeof import("./listWorkflowCallbackUrl").listWorkflowCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowCallbackUrl","listWorkflowCallbackUrlOutput"], () => require("./listWorkflowCallbackUrl"));

export { ListWorkflowRunActionExpressionTracesArgs, ListWorkflowRunActionExpressionTracesResult, ListWorkflowRunActionExpressionTracesOutputArgs } from "./listWorkflowRunActionExpressionTraces";
export const listWorkflowRunActionExpressionTraces: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTraces = null as any;
export const listWorkflowRunActionExpressionTracesOutput: typeof import("./listWorkflowRunActionExpressionTraces").listWorkflowRunActionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionExpressionTraces","listWorkflowRunActionExpressionTracesOutput"], () => require("./listWorkflowRunActionExpressionTraces"));

export { ListWorkflowRunActionRepetitionExpressionTracesArgs, ListWorkflowRunActionRepetitionExpressionTracesResult, ListWorkflowRunActionRepetitionExpressionTracesOutputArgs } from "./listWorkflowRunActionRepetitionExpressionTraces";
export const listWorkflowRunActionRepetitionExpressionTraces: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTraces = null as any;
export const listWorkflowRunActionRepetitionExpressionTracesOutput: typeof import("./listWorkflowRunActionRepetitionExpressionTraces").listWorkflowRunActionRepetitionExpressionTracesOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowRunActionRepetitionExpressionTraces","listWorkflowRunActionRepetitionExpressionTracesOutput"], () => require("./listWorkflowRunActionRepetitionExpressionTraces"));

export { ListWorkflowTriggerCallbackUrlArgs, ListWorkflowTriggerCallbackUrlResult, ListWorkflowTriggerCallbackUrlOutputArgs } from "./listWorkflowTriggerCallbackUrl";
export const listWorkflowTriggerCallbackUrl: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrl = null as any;
export const listWorkflowTriggerCallbackUrlOutput: typeof import("./listWorkflowTriggerCallbackUrl").listWorkflowTriggerCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowTriggerCallbackUrl","listWorkflowTriggerCallbackUrlOutput"], () => require("./listWorkflowTriggerCallbackUrl"));

export { ListWorkflowVersionCallbackUrlArgs, ListWorkflowVersionCallbackUrlResult, ListWorkflowVersionCallbackUrlOutputArgs } from "./listWorkflowVersionCallbackUrl";
export const listWorkflowVersionCallbackUrl: typeof import("./listWorkflowVersionCallbackUrl").listWorkflowVersionCallbackUrl = null as any;
export const listWorkflowVersionCallbackUrlOutput: typeof import("./listWorkflowVersionCallbackUrl").listWorkflowVersionCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listWorkflowVersionCallbackUrl","listWorkflowVersionCallbackUrlOutput"], () => require("./listWorkflowVersionCallbackUrl"));

export { MapArgs } from "./map";
export type Map = import("./map").Map;
export const Map: typeof import("./map").Map = null as any;
utilities.lazyLoad(exports, ["Map"], () => require("./map"));

export { PartnerArgs } from "./partner";
export type Partner = import("./partner").Partner;
export const Partner: typeof import("./partner").Partner = null as any;
utilities.lazyLoad(exports, ["Partner"], () => require("./partner"));

export { RosettaNetProcessConfigurationArgs } from "./rosettaNetProcessConfiguration";
export type RosettaNetProcessConfiguration = import("./rosettaNetProcessConfiguration").RosettaNetProcessConfiguration;
export const RosettaNetProcessConfiguration: typeof import("./rosettaNetProcessConfiguration").RosettaNetProcessConfiguration = null as any;
utilities.lazyLoad(exports, ["RosettaNetProcessConfiguration"], () => require("./rosettaNetProcessConfiguration"));

export { SchemaArgs } from "./schema";
export type Schema = import("./schema").Schema;
export const Schema: typeof import("./schema").Schema = null as any;
utilities.lazyLoad(exports, ["Schema"], () => require("./schema"));

export { SessionArgs } from "./session";
export type Session = import("./session").Session;
export const Session: typeof import("./session").Session = null as any;
utilities.lazyLoad(exports, ["Session"], () => require("./session"));

export { WorkflowArgs } from "./workflow";
export type Workflow = import("./workflow").Workflow;
export const Workflow: typeof import("./workflow").Workflow = null as any;
utilities.lazyLoad(exports, ["Workflow"], () => require("./workflow"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:logic/v20160601:Agreement":
                return new Agreement(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Map":
                return new Map(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Partner":
                return new Partner(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:RosettaNetProcessConfiguration":
                return new RosettaNetProcessConfiguration(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Schema":
                return new Schema(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Session":
                return new Session(name, <any>undefined, { urn })
            case "azure-native:logic/v20160601:Workflow":
                return new Workflow(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "logic/v20160601", _module)
