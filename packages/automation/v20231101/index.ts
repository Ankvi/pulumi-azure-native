import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AutomationAccountArgs } from "./automationAccount";
export type AutomationAccount = import("./automationAccount").AutomationAccount;
export const AutomationAccount: typeof import("./automationAccount").AutomationAccount = null as any;
utilities.lazyLoad(exports, ["AutomationAccount"], () => require("./automationAccount"));

export { CertificateArgs } from "./certificate";
export type Certificate = import("./certificate").Certificate;
export const Certificate: typeof import("./certificate").Certificate = null as any;
utilities.lazyLoad(exports, ["Certificate"], () => require("./certificate"));

export { ConnectionArgs } from "./connection";
export type Connection = import("./connection").Connection;
export const Connection: typeof import("./connection").Connection = null as any;
utilities.lazyLoad(exports, ["Connection"], () => require("./connection"));

export { ConnectionTypeArgs } from "./connectionType";
export type ConnectionType = import("./connectionType").ConnectionType;
export const ConnectionType: typeof import("./connectionType").ConnectionType = null as any;
utilities.lazyLoad(exports, ["ConnectionType"], () => require("./connectionType"));

export { CredentialArgs } from "./credential";
export type Credential = import("./credential").Credential;
export const Credential: typeof import("./credential").Credential = null as any;
utilities.lazyLoad(exports, ["Credential"], () => require("./credential"));

export { DscConfigurationArgs } from "./dscConfiguration";
export type DscConfiguration = import("./dscConfiguration").DscConfiguration;
export const DscConfiguration: typeof import("./dscConfiguration").DscConfiguration = null as any;
utilities.lazyLoad(exports, ["DscConfiguration"], () => require("./dscConfiguration"));

export { DscNodeConfigurationArgs } from "./dscNodeConfiguration";
export type DscNodeConfiguration = import("./dscNodeConfiguration").DscNodeConfiguration;
export const DscNodeConfiguration: typeof import("./dscNodeConfiguration").DscNodeConfiguration = null as any;
utilities.lazyLoad(exports, ["DscNodeConfiguration"], () => require("./dscNodeConfiguration"));

export { GetAutomationAccountArgs, GetAutomationAccountResult, GetAutomationAccountOutputArgs } from "./getAutomationAccount";
export const getAutomationAccount: typeof import("./getAutomationAccount").getAutomationAccount = null as any;
export const getAutomationAccountOutput: typeof import("./getAutomationAccount").getAutomationAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAutomationAccount","getAutomationAccountOutput"], () => require("./getAutomationAccount"));

export { GetCertificateArgs, GetCertificateResult, GetCertificateOutputArgs } from "./getCertificate";
export const getCertificate: typeof import("./getCertificate").getCertificate = null as any;
export const getCertificateOutput: typeof import("./getCertificate").getCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCertificate","getCertificateOutput"], () => require("./getCertificate"));

export { GetConnectionArgs, GetConnectionResult, GetConnectionOutputArgs } from "./getConnection";
export const getConnection: typeof import("./getConnection").getConnection = null as any;
export const getConnectionOutput: typeof import("./getConnection").getConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getConnection","getConnectionOutput"], () => require("./getConnection"));

export { GetConnectionTypeArgs, GetConnectionTypeResult, GetConnectionTypeOutputArgs } from "./getConnectionType";
export const getConnectionType: typeof import("./getConnectionType").getConnectionType = null as any;
export const getConnectionTypeOutput: typeof import("./getConnectionType").getConnectionTypeOutput = null as any;
utilities.lazyLoad(exports, ["getConnectionType","getConnectionTypeOutput"], () => require("./getConnectionType"));

export { GetCredentialArgs, GetCredentialResult, GetCredentialOutputArgs } from "./getCredential";
export const getCredential: typeof import("./getCredential").getCredential = null as any;
export const getCredentialOutput: typeof import("./getCredential").getCredentialOutput = null as any;
utilities.lazyLoad(exports, ["getCredential","getCredentialOutput"], () => require("./getCredential"));

export { GetDscConfigurationArgs, GetDscConfigurationResult, GetDscConfigurationOutputArgs } from "./getDscConfiguration";
export const getDscConfiguration: typeof import("./getDscConfiguration").getDscConfiguration = null as any;
export const getDscConfigurationOutput: typeof import("./getDscConfiguration").getDscConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getDscConfiguration","getDscConfigurationOutput"], () => require("./getDscConfiguration"));

export { GetDscNodeConfigurationArgs, GetDscNodeConfigurationResult, GetDscNodeConfigurationOutputArgs } from "./getDscNodeConfiguration";
export const getDscNodeConfiguration: typeof import("./getDscNodeConfiguration").getDscNodeConfiguration = null as any;
export const getDscNodeConfigurationOutput: typeof import("./getDscNodeConfiguration").getDscNodeConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getDscNodeConfiguration","getDscNodeConfigurationOutput"], () => require("./getDscNodeConfiguration"));

export { GetHybridRunbookWorkerArgs, GetHybridRunbookWorkerResult, GetHybridRunbookWorkerOutputArgs } from "./getHybridRunbookWorker";
export const getHybridRunbookWorker: typeof import("./getHybridRunbookWorker").getHybridRunbookWorker = null as any;
export const getHybridRunbookWorkerOutput: typeof import("./getHybridRunbookWorker").getHybridRunbookWorkerOutput = null as any;
utilities.lazyLoad(exports, ["getHybridRunbookWorker","getHybridRunbookWorkerOutput"], () => require("./getHybridRunbookWorker"));

export { GetHybridRunbookWorkerGroupArgs, GetHybridRunbookWorkerGroupResult, GetHybridRunbookWorkerGroupOutputArgs } from "./getHybridRunbookWorkerGroup";
export const getHybridRunbookWorkerGroup: typeof import("./getHybridRunbookWorkerGroup").getHybridRunbookWorkerGroup = null as any;
export const getHybridRunbookWorkerGroupOutput: typeof import("./getHybridRunbookWorkerGroup").getHybridRunbookWorkerGroupOutput = null as any;
utilities.lazyLoad(exports, ["getHybridRunbookWorkerGroup","getHybridRunbookWorkerGroupOutput"], () => require("./getHybridRunbookWorkerGroup"));

export { GetJobScheduleArgs, GetJobScheduleResult, GetJobScheduleOutputArgs } from "./getJobSchedule";
export const getJobSchedule: typeof import("./getJobSchedule").getJobSchedule = null as any;
export const getJobScheduleOutput: typeof import("./getJobSchedule").getJobScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getJobSchedule","getJobScheduleOutput"], () => require("./getJobSchedule"));

export { GetModuleArgs, GetModuleResult, GetModuleOutputArgs } from "./getModule";
export const getModule: typeof import("./getModule").getModule = null as any;
export const getModuleOutput: typeof import("./getModule").getModuleOutput = null as any;
utilities.lazyLoad(exports, ["getModule","getModuleOutput"], () => require("./getModule"));

export { GetPowerShell72ModuleArgs, GetPowerShell72ModuleResult, GetPowerShell72ModuleOutputArgs } from "./getPowerShell72Module";
export const getPowerShell72Module: typeof import("./getPowerShell72Module").getPowerShell72Module = null as any;
export const getPowerShell72ModuleOutput: typeof import("./getPowerShell72Module").getPowerShell72ModuleOutput = null as any;
utilities.lazyLoad(exports, ["getPowerShell72Module","getPowerShell72ModuleOutput"], () => require("./getPowerShell72Module"));

export { GetPython2PackageArgs, GetPython2PackageResult, GetPython2PackageOutputArgs } from "./getPython2Package";
export const getPython2Package: typeof import("./getPython2Package").getPython2Package = null as any;
export const getPython2PackageOutput: typeof import("./getPython2Package").getPython2PackageOutput = null as any;
utilities.lazyLoad(exports, ["getPython2Package","getPython2PackageOutput"], () => require("./getPython2Package"));

export { GetPython3PackageArgs, GetPython3PackageResult, GetPython3PackageOutputArgs } from "./getPython3Package";
export const getPython3Package: typeof import("./getPython3Package").getPython3Package = null as any;
export const getPython3PackageOutput: typeof import("./getPython3Package").getPython3PackageOutput = null as any;
utilities.lazyLoad(exports, ["getPython3Package","getPython3PackageOutput"], () => require("./getPython3Package"));

export { GetRunbookArgs, GetRunbookResult, GetRunbookOutputArgs } from "./getRunbook";
export const getRunbook: typeof import("./getRunbook").getRunbook = null as any;
export const getRunbookOutput: typeof import("./getRunbook").getRunbookOutput = null as any;
utilities.lazyLoad(exports, ["getRunbook","getRunbookOutput"], () => require("./getRunbook"));

export { GetScheduleArgs, GetScheduleResult, GetScheduleOutputArgs } from "./getSchedule";
export const getSchedule: typeof import("./getSchedule").getSchedule = null as any;
export const getScheduleOutput: typeof import("./getSchedule").getScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getSchedule","getScheduleOutput"], () => require("./getSchedule"));

export { GetSourceControlArgs, GetSourceControlResult, GetSourceControlOutputArgs } from "./getSourceControl";
export const getSourceControl: typeof import("./getSourceControl").getSourceControl = null as any;
export const getSourceControlOutput: typeof import("./getSourceControl").getSourceControlOutput = null as any;
utilities.lazyLoad(exports, ["getSourceControl","getSourceControlOutput"], () => require("./getSourceControl"));

export { GetVariableArgs, GetVariableResult, GetVariableOutputArgs } from "./getVariable";
export const getVariable: typeof import("./getVariable").getVariable = null as any;
export const getVariableOutput: typeof import("./getVariable").getVariableOutput = null as any;
utilities.lazyLoad(exports, ["getVariable","getVariableOutput"], () => require("./getVariable"));

export { HybridRunbookWorkerArgs } from "./hybridRunbookWorker";
export type HybridRunbookWorker = import("./hybridRunbookWorker").HybridRunbookWorker;
export const HybridRunbookWorker: typeof import("./hybridRunbookWorker").HybridRunbookWorker = null as any;
utilities.lazyLoad(exports, ["HybridRunbookWorker"], () => require("./hybridRunbookWorker"));

export { HybridRunbookWorkerGroupArgs } from "./hybridRunbookWorkerGroup";
export type HybridRunbookWorkerGroup = import("./hybridRunbookWorkerGroup").HybridRunbookWorkerGroup;
export const HybridRunbookWorkerGroup: typeof import("./hybridRunbookWorkerGroup").HybridRunbookWorkerGroup = null as any;
utilities.lazyLoad(exports, ["HybridRunbookWorkerGroup"], () => require("./hybridRunbookWorkerGroup"));

export { JobScheduleArgs } from "./jobSchedule";
export type JobSchedule = import("./jobSchedule").JobSchedule;
export const JobSchedule: typeof import("./jobSchedule").JobSchedule = null as any;
utilities.lazyLoad(exports, ["JobSchedule"], () => require("./jobSchedule"));

export { ListKeyByAutomationAccountArgs, ListKeyByAutomationAccountResult, ListKeyByAutomationAccountOutputArgs } from "./listKeyByAutomationAccount";
export const listKeyByAutomationAccount: typeof import("./listKeyByAutomationAccount").listKeyByAutomationAccount = null as any;
export const listKeyByAutomationAccountOutput: typeof import("./listKeyByAutomationAccount").listKeyByAutomationAccountOutput = null as any;
utilities.lazyLoad(exports, ["listKeyByAutomationAccount","listKeyByAutomationAccountOutput"], () => require("./listKeyByAutomationAccount"));

export { ModuleArgs } from "./module";
export type Module = import("./module").Module;
export const Module: typeof import("./module").Module = null as any;
utilities.lazyLoad(exports, ["Module"], () => require("./module"));

export { PowerShell72ModuleArgs } from "./powerShell72Module";
export type PowerShell72Module = import("./powerShell72Module").PowerShell72Module;
export const PowerShell72Module: typeof import("./powerShell72Module").PowerShell72Module = null as any;
utilities.lazyLoad(exports, ["PowerShell72Module"], () => require("./powerShell72Module"));

export { Python2PackageArgs } from "./python2Package";
export type Python2Package = import("./python2Package").Python2Package;
export const Python2Package: typeof import("./python2Package").Python2Package = null as any;
utilities.lazyLoad(exports, ["Python2Package"], () => require("./python2Package"));

export { Python3PackageArgs } from "./python3Package";
export type Python3Package = import("./python3Package").Python3Package;
export const Python3Package: typeof import("./python3Package").Python3Package = null as any;
utilities.lazyLoad(exports, ["Python3Package"], () => require("./python3Package"));

export { RunbookArgs } from "./runbook";
export type Runbook = import("./runbook").Runbook;
export const Runbook: typeof import("./runbook").Runbook = null as any;
utilities.lazyLoad(exports, ["Runbook"], () => require("./runbook"));

export { ScheduleArgs } from "./schedule";
export type Schedule = import("./schedule").Schedule;
export const Schedule: typeof import("./schedule").Schedule = null as any;
utilities.lazyLoad(exports, ["Schedule"], () => require("./schedule"));

export { SourceControlArgs } from "./sourceControl";
export type SourceControl = import("./sourceControl").SourceControl;
export const SourceControl: typeof import("./sourceControl").SourceControl = null as any;
utilities.lazyLoad(exports, ["SourceControl"], () => require("./sourceControl"));

export { VariableArgs } from "./variable";
export type Variable = import("./variable").Variable;
export const Variable: typeof import("./variable").Variable = null as any;
utilities.lazyLoad(exports, ["Variable"], () => require("./variable"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:automation/v20231101:AutomationAccount":
                return new AutomationAccount(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Connection":
                return new Connection(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:ConnectionType":
                return new ConnectionType(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Credential":
                return new Credential(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:DscConfiguration":
                return new DscConfiguration(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:DscNodeConfiguration":
                return new DscNodeConfiguration(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:HybridRunbookWorker":
                return new HybridRunbookWorker(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:HybridRunbookWorkerGroup":
                return new HybridRunbookWorkerGroup(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:JobSchedule":
                return new JobSchedule(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Module":
                return new Module(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:PowerShell72Module":
                return new PowerShell72Module(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Python2Package":
                return new Python2Package(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Python3Package":
                return new Python3Package(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Runbook":
                return new Runbook(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Schedule":
                return new Schedule(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:SourceControl":
                return new SourceControl(name, <any>undefined, { urn })
            case "azure-native:automation/v20231101:Variable":
                return new Variable(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "automation/v20231101", _module)
