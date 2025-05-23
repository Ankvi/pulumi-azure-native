import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArtifactSourceArgs } from "./artifactSource";
export type ArtifactSource = import("./artifactSource").ArtifactSource;
export const ArtifactSource: typeof import("./artifactSource").ArtifactSource = null as any;
utilities.lazyLoad(exports, ["ArtifactSource"], () => require("./artifactSource"));

export { CustomImageArgs } from "./customImage";
export type CustomImage = import("./customImage").CustomImage;
export const CustomImage: typeof import("./customImage").CustomImage = null as any;
utilities.lazyLoad(exports, ["CustomImage"], () => require("./customImage"));

export { DiskArgs } from "./disk";
export type Disk = import("./disk").Disk;
export const Disk: typeof import("./disk").Disk = null as any;
utilities.lazyLoad(exports, ["Disk"], () => require("./disk"));

export { EnvironmentArgs } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { FormulaArgs } from "./formula";
export type Formula = import("./formula").Formula;
export const Formula: typeof import("./formula").Formula = null as any;
utilities.lazyLoad(exports, ["Formula"], () => require("./formula"));

export { GetArtifactSourceArgs, GetArtifactSourceResult, GetArtifactSourceOutputArgs } from "./getArtifactSource";
export const getArtifactSource: typeof import("./getArtifactSource").getArtifactSource = null as any;
export const getArtifactSourceOutput: typeof import("./getArtifactSource").getArtifactSourceOutput = null as any;
utilities.lazyLoad(exports, ["getArtifactSource","getArtifactSourceOutput"], () => require("./getArtifactSource"));

export { GetCustomImageArgs, GetCustomImageResult, GetCustomImageOutputArgs } from "./getCustomImage";
export const getCustomImage: typeof import("./getCustomImage").getCustomImage = null as any;
export const getCustomImageOutput: typeof import("./getCustomImage").getCustomImageOutput = null as any;
utilities.lazyLoad(exports, ["getCustomImage","getCustomImageOutput"], () => require("./getCustomImage"));

export { GetDiskArgs, GetDiskResult, GetDiskOutputArgs } from "./getDisk";
export const getDisk: typeof import("./getDisk").getDisk = null as any;
export const getDiskOutput: typeof import("./getDisk").getDiskOutput = null as any;
utilities.lazyLoad(exports, ["getDisk","getDiskOutput"], () => require("./getDisk"));

export { GetEnvironmentArgs, GetEnvironmentResult, GetEnvironmentOutputArgs } from "./getEnvironment";
export const getEnvironment: typeof import("./getEnvironment").getEnvironment = null as any;
export const getEnvironmentOutput: typeof import("./getEnvironment").getEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironment","getEnvironmentOutput"], () => require("./getEnvironment"));

export { GetFormulaArgs, GetFormulaResult, GetFormulaOutputArgs } from "./getFormula";
export const getFormula: typeof import("./getFormula").getFormula = null as any;
export const getFormulaOutput: typeof import("./getFormula").getFormulaOutput = null as any;
utilities.lazyLoad(exports, ["getFormula","getFormulaOutput"], () => require("./getFormula"));

export { GetGlobalScheduleArgs, GetGlobalScheduleResult, GetGlobalScheduleOutputArgs } from "./getGlobalSchedule";
export const getGlobalSchedule: typeof import("./getGlobalSchedule").getGlobalSchedule = null as any;
export const getGlobalScheduleOutput: typeof import("./getGlobalSchedule").getGlobalScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getGlobalSchedule","getGlobalScheduleOutput"], () => require("./getGlobalSchedule"));

export { GetLabArgs, GetLabResult, GetLabOutputArgs } from "./getLab";
export const getLab: typeof import("./getLab").getLab = null as any;
export const getLabOutput: typeof import("./getLab").getLabOutput = null as any;
utilities.lazyLoad(exports, ["getLab","getLabOutput"], () => require("./getLab"));

export { GetNotificationChannelArgs, GetNotificationChannelResult, GetNotificationChannelOutputArgs } from "./getNotificationChannel";
export const getNotificationChannel: typeof import("./getNotificationChannel").getNotificationChannel = null as any;
export const getNotificationChannelOutput: typeof import("./getNotificationChannel").getNotificationChannelOutput = null as any;
utilities.lazyLoad(exports, ["getNotificationChannel","getNotificationChannelOutput"], () => require("./getNotificationChannel"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetScheduleArgs, GetScheduleResult, GetScheduleOutputArgs } from "./getSchedule";
export const getSchedule: typeof import("./getSchedule").getSchedule = null as any;
export const getScheduleOutput: typeof import("./getSchedule").getScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getSchedule","getScheduleOutput"], () => require("./getSchedule"));

export { GetSecretArgs, GetSecretResult, GetSecretOutputArgs } from "./getSecret";
export const getSecret: typeof import("./getSecret").getSecret = null as any;
export const getSecretOutput: typeof import("./getSecret").getSecretOutput = null as any;
utilities.lazyLoad(exports, ["getSecret","getSecretOutput"], () => require("./getSecret"));

export { GetServiceFabricArgs, GetServiceFabricResult, GetServiceFabricOutputArgs } from "./getServiceFabric";
export const getServiceFabric: typeof import("./getServiceFabric").getServiceFabric = null as any;
export const getServiceFabricOutput: typeof import("./getServiceFabric").getServiceFabricOutput = null as any;
utilities.lazyLoad(exports, ["getServiceFabric","getServiceFabricOutput"], () => require("./getServiceFabric"));

export { GetServiceFabricScheduleArgs, GetServiceFabricScheduleResult, GetServiceFabricScheduleOutputArgs } from "./getServiceFabricSchedule";
export const getServiceFabricSchedule: typeof import("./getServiceFabricSchedule").getServiceFabricSchedule = null as any;
export const getServiceFabricScheduleOutput: typeof import("./getServiceFabricSchedule").getServiceFabricScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getServiceFabricSchedule","getServiceFabricScheduleOutput"], () => require("./getServiceFabricSchedule"));

export { GetServiceRunnerArgs, GetServiceRunnerResult, GetServiceRunnerOutputArgs } from "./getServiceRunner";
export const getServiceRunner: typeof import("./getServiceRunner").getServiceRunner = null as any;
export const getServiceRunnerOutput: typeof import("./getServiceRunner").getServiceRunnerOutput = null as any;
utilities.lazyLoad(exports, ["getServiceRunner","getServiceRunnerOutput"], () => require("./getServiceRunner"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

export { GetVirtualMachineRdpFileContentsArgs, GetVirtualMachineRdpFileContentsResult, GetVirtualMachineRdpFileContentsOutputArgs } from "./getVirtualMachineRdpFileContents";
export const getVirtualMachineRdpFileContents: typeof import("./getVirtualMachineRdpFileContents").getVirtualMachineRdpFileContents = null as any;
export const getVirtualMachineRdpFileContentsOutput: typeof import("./getVirtualMachineRdpFileContents").getVirtualMachineRdpFileContentsOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineRdpFileContents","getVirtualMachineRdpFileContentsOutput"], () => require("./getVirtualMachineRdpFileContents"));

export { GetVirtualMachineScheduleArgs, GetVirtualMachineScheduleResult, GetVirtualMachineScheduleOutputArgs } from "./getVirtualMachineSchedule";
export const getVirtualMachineSchedule: typeof import("./getVirtualMachineSchedule").getVirtualMachineSchedule = null as any;
export const getVirtualMachineScheduleOutput: typeof import("./getVirtualMachineSchedule").getVirtualMachineScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineSchedule","getVirtualMachineScheduleOutput"], () => require("./getVirtualMachineSchedule"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GlobalScheduleArgs } from "./globalSchedule";
export type GlobalSchedule = import("./globalSchedule").GlobalSchedule;
export const GlobalSchedule: typeof import("./globalSchedule").GlobalSchedule = null as any;
utilities.lazyLoad(exports, ["GlobalSchedule"], () => require("./globalSchedule"));

export { LabArgs } from "./lab";
export type Lab = import("./lab").Lab;
export const Lab: typeof import("./lab").Lab = null as any;
utilities.lazyLoad(exports, ["Lab"], () => require("./lab"));

export { ListLabVhdsArgs, ListLabVhdsResult, ListLabVhdsOutputArgs } from "./listLabVhds";
export const listLabVhds: typeof import("./listLabVhds").listLabVhds = null as any;
export const listLabVhdsOutput: typeof import("./listLabVhds").listLabVhdsOutput = null as any;
utilities.lazyLoad(exports, ["listLabVhds","listLabVhdsOutput"], () => require("./listLabVhds"));

export { ListScheduleApplicableArgs, ListScheduleApplicableResult, ListScheduleApplicableOutputArgs } from "./listScheduleApplicable";
export const listScheduleApplicable: typeof import("./listScheduleApplicable").listScheduleApplicable = null as any;
export const listScheduleApplicableOutput: typeof import("./listScheduleApplicable").listScheduleApplicableOutput = null as any;
utilities.lazyLoad(exports, ["listScheduleApplicable","listScheduleApplicableOutput"], () => require("./listScheduleApplicable"));

export { ListServiceFabricApplicableSchedulesArgs, ListServiceFabricApplicableSchedulesResult, ListServiceFabricApplicableSchedulesOutputArgs } from "./listServiceFabricApplicableSchedules";
export const listServiceFabricApplicableSchedules: typeof import("./listServiceFabricApplicableSchedules").listServiceFabricApplicableSchedules = null as any;
export const listServiceFabricApplicableSchedulesOutput: typeof import("./listServiceFabricApplicableSchedules").listServiceFabricApplicableSchedulesOutput = null as any;
utilities.lazyLoad(exports, ["listServiceFabricApplicableSchedules","listServiceFabricApplicableSchedulesOutput"], () => require("./listServiceFabricApplicableSchedules"));

export { ListVirtualMachineApplicableSchedulesArgs, ListVirtualMachineApplicableSchedulesResult, ListVirtualMachineApplicableSchedulesOutputArgs } from "./listVirtualMachineApplicableSchedules";
export const listVirtualMachineApplicableSchedules: typeof import("./listVirtualMachineApplicableSchedules").listVirtualMachineApplicableSchedules = null as any;
export const listVirtualMachineApplicableSchedulesOutput: typeof import("./listVirtualMachineApplicableSchedules").listVirtualMachineApplicableSchedulesOutput = null as any;
utilities.lazyLoad(exports, ["listVirtualMachineApplicableSchedules","listVirtualMachineApplicableSchedulesOutput"], () => require("./listVirtualMachineApplicableSchedules"));

export { NotificationChannelArgs } from "./notificationChannel";
export type NotificationChannel = import("./notificationChannel").NotificationChannel;
export const NotificationChannel: typeof import("./notificationChannel").NotificationChannel = null as any;
utilities.lazyLoad(exports, ["NotificationChannel"], () => require("./notificationChannel"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { ScheduleArgs } from "./schedule";
export type Schedule = import("./schedule").Schedule;
export const Schedule: typeof import("./schedule").Schedule = null as any;
utilities.lazyLoad(exports, ["Schedule"], () => require("./schedule"));

export { SecretArgs } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));

export { ServiceFabricArgs } from "./serviceFabric";
export type ServiceFabric = import("./serviceFabric").ServiceFabric;
export const ServiceFabric: typeof import("./serviceFabric").ServiceFabric = null as any;
utilities.lazyLoad(exports, ["ServiceFabric"], () => require("./serviceFabric"));

export { ServiceFabricScheduleArgs } from "./serviceFabricSchedule";
export type ServiceFabricSchedule = import("./serviceFabricSchedule").ServiceFabricSchedule;
export const ServiceFabricSchedule: typeof import("./serviceFabricSchedule").ServiceFabricSchedule = null as any;
utilities.lazyLoad(exports, ["ServiceFabricSchedule"], () => require("./serviceFabricSchedule"));

export { ServiceRunnerArgs } from "./serviceRunner";
export type ServiceRunner = import("./serviceRunner").ServiceRunner;
export const ServiceRunner: typeof import("./serviceRunner").ServiceRunner = null as any;
utilities.lazyLoad(exports, ["ServiceRunner"], () => require("./serviceRunner"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

export { VirtualMachineScheduleArgs } from "./virtualMachineSchedule";
export type VirtualMachineSchedule = import("./virtualMachineSchedule").VirtualMachineSchedule;
export const VirtualMachineSchedule: typeof import("./virtualMachineSchedule").VirtualMachineSchedule = null as any;
utilities.lazyLoad(exports, ["VirtualMachineSchedule"], () => require("./virtualMachineSchedule"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:devtestlab:ArtifactSource":
                return new ArtifactSource(name, <any>undefined, { urn })
            case "azure-native:devtestlab:CustomImage":
                return new CustomImage(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Disk":
                return new Disk(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Formula":
                return new Formula(name, <any>undefined, { urn })
            case "azure-native:devtestlab:GlobalSchedule":
                return new GlobalSchedule(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Lab":
                return new Lab(name, <any>undefined, { urn })
            case "azure-native:devtestlab:NotificationChannel":
                return new NotificationChannel(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Schedule":
                return new Schedule(name, <any>undefined, { urn })
            case "azure-native:devtestlab:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "azure-native:devtestlab:ServiceFabric":
                return new ServiceFabric(name, <any>undefined, { urn })
            case "azure-native:devtestlab:ServiceFabricSchedule":
                return new ServiceFabricSchedule(name, <any>undefined, { urn })
            case "azure-native:devtestlab:ServiceRunner":
                return new ServiceRunner(name, <any>undefined, { urn })
            case "azure-native:devtestlab:User":
                return new User(name, <any>undefined, { urn })
            case "azure-native:devtestlab:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:devtestlab:VirtualMachineSchedule":
                return new VirtualMachineSchedule(name, <any>undefined, { urn })
            case "azure-native:devtestlab:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "devtestlab", _module)