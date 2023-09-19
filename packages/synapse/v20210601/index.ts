import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BigDataPoolArgs } from "./bigDataPool";
export type BigDataPool = import("./bigDataPool").BigDataPool;
export const BigDataPool: typeof import("./bigDataPool").BigDataPool = null as any;
utilities.lazyLoad(exports, ["BigDataPool"], () => require("./bigDataPool"));

export { GetBigDataPoolArgs, GetBigDataPoolResult, GetBigDataPoolOutputArgs } from "./getBigDataPool";
export const getBigDataPool: typeof import("./getBigDataPool").getBigDataPool = null as any;
export const getBigDataPoolOutput: typeof import("./getBigDataPool").getBigDataPoolOutput = null as any;
utilities.lazyLoad(exports, ["getBigDataPool","getBigDataPoolOutput"], () => require("./getBigDataPool"));

export { GetIntegrationRuntimeArgs, GetIntegrationRuntimeResult, GetIntegrationRuntimeOutputArgs } from "./getIntegrationRuntime";
export const getIntegrationRuntime: typeof import("./getIntegrationRuntime").getIntegrationRuntime = null as any;
export const getIntegrationRuntimeOutput: typeof import("./getIntegrationRuntime").getIntegrationRuntimeOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationRuntime","getIntegrationRuntimeOutput"], () => require("./getIntegrationRuntime"));

export { GetIntegrationRuntimeConnectionInfoArgs, GetIntegrationRuntimeConnectionInfoResult, GetIntegrationRuntimeConnectionInfoOutputArgs } from "./getIntegrationRuntimeConnectionInfo";
export const getIntegrationRuntimeConnectionInfo: typeof import("./getIntegrationRuntimeConnectionInfo").getIntegrationRuntimeConnectionInfo = null as any;
export const getIntegrationRuntimeConnectionInfoOutput: typeof import("./getIntegrationRuntimeConnectionInfo").getIntegrationRuntimeConnectionInfoOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationRuntimeConnectionInfo","getIntegrationRuntimeConnectionInfoOutput"], () => require("./getIntegrationRuntimeConnectionInfo"));

export { GetIntegrationRuntimeObjectMetadatumArgs, GetIntegrationRuntimeObjectMetadatumResult, GetIntegrationRuntimeObjectMetadatumOutputArgs } from "./getIntegrationRuntimeObjectMetadatum";
export const getIntegrationRuntimeObjectMetadatum: typeof import("./getIntegrationRuntimeObjectMetadatum").getIntegrationRuntimeObjectMetadatum = null as any;
export const getIntegrationRuntimeObjectMetadatumOutput: typeof import("./getIntegrationRuntimeObjectMetadatum").getIntegrationRuntimeObjectMetadatumOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationRuntimeObjectMetadatum","getIntegrationRuntimeObjectMetadatumOutput"], () => require("./getIntegrationRuntimeObjectMetadatum"));

export { GetIntegrationRuntimeStatusArgs, GetIntegrationRuntimeStatusResult, GetIntegrationRuntimeStatusOutputArgs } from "./getIntegrationRuntimeStatus";
export const getIntegrationRuntimeStatus: typeof import("./getIntegrationRuntimeStatus").getIntegrationRuntimeStatus = null as any;
export const getIntegrationRuntimeStatusOutput: typeof import("./getIntegrationRuntimeStatus").getIntegrationRuntimeStatusOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationRuntimeStatus","getIntegrationRuntimeStatusOutput"], () => require("./getIntegrationRuntimeStatus"));

export { GetIpFirewallRuleArgs, GetIpFirewallRuleResult, GetIpFirewallRuleOutputArgs } from "./getIpFirewallRule";
export const getIpFirewallRule: typeof import("./getIpFirewallRule").getIpFirewallRule = null as any;
export const getIpFirewallRuleOutput: typeof import("./getIpFirewallRule").getIpFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getIpFirewallRule","getIpFirewallRuleOutput"], () => require("./getIpFirewallRule"));

export { GetKeyArgs, GetKeyResult, GetKeyOutputArgs } from "./getKey";
export const getKey: typeof import("./getKey").getKey = null as any;
export const getKeyOutput: typeof import("./getKey").getKeyOutput = null as any;
utilities.lazyLoad(exports, ["getKey","getKeyOutput"], () => require("./getKey"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetPrivateLinkHubArgs, GetPrivateLinkHubResult, GetPrivateLinkHubOutputArgs } from "./getPrivateLinkHub";
export const getPrivateLinkHub: typeof import("./getPrivateLinkHub").getPrivateLinkHub = null as any;
export const getPrivateLinkHubOutput: typeof import("./getPrivateLinkHub").getPrivateLinkHubOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateLinkHub","getPrivateLinkHubOutput"], () => require("./getPrivateLinkHub"));

export { GetSqlPoolArgs, GetSqlPoolResult, GetSqlPoolOutputArgs } from "./getSqlPool";
export const getSqlPool: typeof import("./getSqlPool").getSqlPool = null as any;
export const getSqlPoolOutput: typeof import("./getSqlPool").getSqlPoolOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPool","getSqlPoolOutput"], () => require("./getSqlPool"));

export { GetSqlPoolSensitivityLabelArgs, GetSqlPoolSensitivityLabelResult, GetSqlPoolSensitivityLabelOutputArgs } from "./getSqlPoolSensitivityLabel";
export const getSqlPoolSensitivityLabel: typeof import("./getSqlPoolSensitivityLabel").getSqlPoolSensitivityLabel = null as any;
export const getSqlPoolSensitivityLabelOutput: typeof import("./getSqlPoolSensitivityLabel").getSqlPoolSensitivityLabelOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolSensitivityLabel","getSqlPoolSensitivityLabelOutput"], () => require("./getSqlPoolSensitivityLabel"));

export { GetSqlPoolTransparentDataEncryptionArgs, GetSqlPoolTransparentDataEncryptionResult, GetSqlPoolTransparentDataEncryptionOutputArgs } from "./getSqlPoolTransparentDataEncryption";
export const getSqlPoolTransparentDataEncryption: typeof import("./getSqlPoolTransparentDataEncryption").getSqlPoolTransparentDataEncryption = null as any;
export const getSqlPoolTransparentDataEncryptionOutput: typeof import("./getSqlPoolTransparentDataEncryption").getSqlPoolTransparentDataEncryptionOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolTransparentDataEncryption","getSqlPoolTransparentDataEncryptionOutput"], () => require("./getSqlPoolTransparentDataEncryption"));

export { GetSqlPoolVulnerabilityAssessmentArgs, GetSqlPoolVulnerabilityAssessmentResult, GetSqlPoolVulnerabilityAssessmentOutputArgs } from "./getSqlPoolVulnerabilityAssessment";
export const getSqlPoolVulnerabilityAssessment: typeof import("./getSqlPoolVulnerabilityAssessment").getSqlPoolVulnerabilityAssessment = null as any;
export const getSqlPoolVulnerabilityAssessmentOutput: typeof import("./getSqlPoolVulnerabilityAssessment").getSqlPoolVulnerabilityAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolVulnerabilityAssessment","getSqlPoolVulnerabilityAssessmentOutput"], () => require("./getSqlPoolVulnerabilityAssessment"));

export { GetSqlPoolVulnerabilityAssessmentRuleBaselineArgs, GetSqlPoolVulnerabilityAssessmentRuleBaselineResult, GetSqlPoolVulnerabilityAssessmentRuleBaselineOutputArgs } from "./getSqlPoolVulnerabilityAssessmentRuleBaseline";
export const getSqlPoolVulnerabilityAssessmentRuleBaseline: typeof import("./getSqlPoolVulnerabilityAssessmentRuleBaseline").getSqlPoolVulnerabilityAssessmentRuleBaseline = null as any;
export const getSqlPoolVulnerabilityAssessmentRuleBaselineOutput: typeof import("./getSqlPoolVulnerabilityAssessmentRuleBaseline").getSqlPoolVulnerabilityAssessmentRuleBaselineOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolVulnerabilityAssessmentRuleBaseline","getSqlPoolVulnerabilityAssessmentRuleBaselineOutput"], () => require("./getSqlPoolVulnerabilityAssessmentRuleBaseline"));

export { GetSqlPoolWorkloadClassifierArgs, GetSqlPoolWorkloadClassifierResult, GetSqlPoolWorkloadClassifierOutputArgs } from "./getSqlPoolWorkloadClassifier";
export const getSqlPoolWorkloadClassifier: typeof import("./getSqlPoolWorkloadClassifier").getSqlPoolWorkloadClassifier = null as any;
export const getSqlPoolWorkloadClassifierOutput: typeof import("./getSqlPoolWorkloadClassifier").getSqlPoolWorkloadClassifierOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolWorkloadClassifier","getSqlPoolWorkloadClassifierOutput"], () => require("./getSqlPoolWorkloadClassifier"));

export { GetSqlPoolWorkloadGroupArgs, GetSqlPoolWorkloadGroupResult, GetSqlPoolWorkloadGroupOutputArgs } from "./getSqlPoolWorkloadGroup";
export const getSqlPoolWorkloadGroup: typeof import("./getSqlPoolWorkloadGroup").getSqlPoolWorkloadGroup = null as any;
export const getSqlPoolWorkloadGroupOutput: typeof import("./getSqlPoolWorkloadGroup").getSqlPoolWorkloadGroupOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPoolWorkloadGroup","getSqlPoolWorkloadGroupOutput"], () => require("./getSqlPoolWorkloadGroup"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { GetWorkspaceAadAdminArgs, GetWorkspaceAadAdminResult, GetWorkspaceAadAdminOutputArgs } from "./getWorkspaceAadAdmin";
export const getWorkspaceAadAdmin: typeof import("./getWorkspaceAadAdmin").getWorkspaceAadAdmin = null as any;
export const getWorkspaceAadAdminOutput: typeof import("./getWorkspaceAadAdmin").getWorkspaceAadAdminOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceAadAdmin","getWorkspaceAadAdminOutput"], () => require("./getWorkspaceAadAdmin"));

export { GetWorkspaceManagedSqlServerVulnerabilityAssessmentArgs, GetWorkspaceManagedSqlServerVulnerabilityAssessmentResult, GetWorkspaceManagedSqlServerVulnerabilityAssessmentOutputArgs } from "./getWorkspaceManagedSqlServerVulnerabilityAssessment";
export const getWorkspaceManagedSqlServerVulnerabilityAssessment: typeof import("./getWorkspaceManagedSqlServerVulnerabilityAssessment").getWorkspaceManagedSqlServerVulnerabilityAssessment = null as any;
export const getWorkspaceManagedSqlServerVulnerabilityAssessmentOutput: typeof import("./getWorkspaceManagedSqlServerVulnerabilityAssessment").getWorkspaceManagedSqlServerVulnerabilityAssessmentOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceManagedSqlServerVulnerabilityAssessment","getWorkspaceManagedSqlServerVulnerabilityAssessmentOutput"], () => require("./getWorkspaceManagedSqlServerVulnerabilityAssessment"));

export { GetWorkspaceSqlAadAdminArgs, GetWorkspaceSqlAadAdminResult, GetWorkspaceSqlAadAdminOutputArgs } from "./getWorkspaceSqlAadAdmin";
export const getWorkspaceSqlAadAdmin: typeof import("./getWorkspaceSqlAadAdmin").getWorkspaceSqlAadAdmin = null as any;
export const getWorkspaceSqlAadAdminOutput: typeof import("./getWorkspaceSqlAadAdmin").getWorkspaceSqlAadAdminOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceSqlAadAdmin","getWorkspaceSqlAadAdminOutput"], () => require("./getWorkspaceSqlAadAdmin"));

export { IntegrationRuntimeArgs } from "./integrationRuntime";
export type IntegrationRuntime = import("./integrationRuntime").IntegrationRuntime;
export const IntegrationRuntime: typeof import("./integrationRuntime").IntegrationRuntime = null as any;
utilities.lazyLoad(exports, ["IntegrationRuntime"], () => require("./integrationRuntime"));

export { IpFirewallRuleArgs } from "./ipFirewallRule";
export type IpFirewallRule = import("./ipFirewallRule").IpFirewallRule;
export const IpFirewallRule: typeof import("./ipFirewallRule").IpFirewallRule = null as any;
utilities.lazyLoad(exports, ["IpFirewallRule"], () => require("./ipFirewallRule"));

export { KeyArgs } from "./key";
export type Key = import("./key").Key;
export const Key: typeof import("./key").Key = null as any;
utilities.lazyLoad(exports, ["Key"], () => require("./key"));

export { ListIntegrationRuntimeAuthKeyArgs, ListIntegrationRuntimeAuthKeyResult, ListIntegrationRuntimeAuthKeyOutputArgs } from "./listIntegrationRuntimeAuthKey";
export const listIntegrationRuntimeAuthKey: typeof import("./listIntegrationRuntimeAuthKey").listIntegrationRuntimeAuthKey = null as any;
export const listIntegrationRuntimeAuthKeyOutput: typeof import("./listIntegrationRuntimeAuthKey").listIntegrationRuntimeAuthKeyOutput = null as any;
utilities.lazyLoad(exports, ["listIntegrationRuntimeAuthKey","listIntegrationRuntimeAuthKeyOutput"], () => require("./listIntegrationRuntimeAuthKey"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { PrivateLinkHubArgs } from "./privateLinkHub";
export type PrivateLinkHub = import("./privateLinkHub").PrivateLinkHub;
export const PrivateLinkHub: typeof import("./privateLinkHub").PrivateLinkHub = null as any;
utilities.lazyLoad(exports, ["PrivateLinkHub"], () => require("./privateLinkHub"));

export { SqlPoolArgs } from "./sqlPool";
export type SqlPool = import("./sqlPool").SqlPool;
export const SqlPool: typeof import("./sqlPool").SqlPool = null as any;
utilities.lazyLoad(exports, ["SqlPool"], () => require("./sqlPool"));

export { SqlPoolSensitivityLabelArgs } from "./sqlPoolSensitivityLabel";
export type SqlPoolSensitivityLabel = import("./sqlPoolSensitivityLabel").SqlPoolSensitivityLabel;
export const SqlPoolSensitivityLabel: typeof import("./sqlPoolSensitivityLabel").SqlPoolSensitivityLabel = null as any;
utilities.lazyLoad(exports, ["SqlPoolSensitivityLabel"], () => require("./sqlPoolSensitivityLabel"));

export { SqlPoolTransparentDataEncryptionArgs } from "./sqlPoolTransparentDataEncryption";
export type SqlPoolTransparentDataEncryption = import("./sqlPoolTransparentDataEncryption").SqlPoolTransparentDataEncryption;
export const SqlPoolTransparentDataEncryption: typeof import("./sqlPoolTransparentDataEncryption").SqlPoolTransparentDataEncryption = null as any;
utilities.lazyLoad(exports, ["SqlPoolTransparentDataEncryption"], () => require("./sqlPoolTransparentDataEncryption"));

export { SqlPoolVulnerabilityAssessmentArgs } from "./sqlPoolVulnerabilityAssessment";
export type SqlPoolVulnerabilityAssessment = import("./sqlPoolVulnerabilityAssessment").SqlPoolVulnerabilityAssessment;
export const SqlPoolVulnerabilityAssessment: typeof import("./sqlPoolVulnerabilityAssessment").SqlPoolVulnerabilityAssessment = null as any;
utilities.lazyLoad(exports, ["SqlPoolVulnerabilityAssessment"], () => require("./sqlPoolVulnerabilityAssessment"));

export { SqlPoolVulnerabilityAssessmentRuleBaselineArgs } from "./sqlPoolVulnerabilityAssessmentRuleBaseline";
export type SqlPoolVulnerabilityAssessmentRuleBaseline = import("./sqlPoolVulnerabilityAssessmentRuleBaseline").SqlPoolVulnerabilityAssessmentRuleBaseline;
export const SqlPoolVulnerabilityAssessmentRuleBaseline: typeof import("./sqlPoolVulnerabilityAssessmentRuleBaseline").SqlPoolVulnerabilityAssessmentRuleBaseline = null as any;
utilities.lazyLoad(exports, ["SqlPoolVulnerabilityAssessmentRuleBaseline"], () => require("./sqlPoolVulnerabilityAssessmentRuleBaseline"));

export { SqlPoolWorkloadClassifierArgs } from "./sqlPoolWorkloadClassifier";
export type SqlPoolWorkloadClassifier = import("./sqlPoolWorkloadClassifier").SqlPoolWorkloadClassifier;
export const SqlPoolWorkloadClassifier: typeof import("./sqlPoolWorkloadClassifier").SqlPoolWorkloadClassifier = null as any;
utilities.lazyLoad(exports, ["SqlPoolWorkloadClassifier"], () => require("./sqlPoolWorkloadClassifier"));

export { SqlPoolWorkloadGroupArgs } from "./sqlPoolWorkloadGroup";
export type SqlPoolWorkloadGroup = import("./sqlPoolWorkloadGroup").SqlPoolWorkloadGroup;
export const SqlPoolWorkloadGroup: typeof import("./sqlPoolWorkloadGroup").SqlPoolWorkloadGroup = null as any;
utilities.lazyLoad(exports, ["SqlPoolWorkloadGroup"], () => require("./sqlPoolWorkloadGroup"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));

export { WorkspaceAadAdminArgs } from "./workspaceAadAdmin";
export type WorkspaceAadAdmin = import("./workspaceAadAdmin").WorkspaceAadAdmin;
export const WorkspaceAadAdmin: typeof import("./workspaceAadAdmin").WorkspaceAadAdmin = null as any;
utilities.lazyLoad(exports, ["WorkspaceAadAdmin"], () => require("./workspaceAadAdmin"));

export { WorkspaceManagedSqlServerVulnerabilityAssessmentArgs } from "./workspaceManagedSqlServerVulnerabilityAssessment";
export type WorkspaceManagedSqlServerVulnerabilityAssessment = import("./workspaceManagedSqlServerVulnerabilityAssessment").WorkspaceManagedSqlServerVulnerabilityAssessment;
export const WorkspaceManagedSqlServerVulnerabilityAssessment: typeof import("./workspaceManagedSqlServerVulnerabilityAssessment").WorkspaceManagedSqlServerVulnerabilityAssessment = null as any;
utilities.lazyLoad(exports, ["WorkspaceManagedSqlServerVulnerabilityAssessment"], () => require("./workspaceManagedSqlServerVulnerabilityAssessment"));

export { WorkspaceSqlAadAdminArgs } from "./workspaceSqlAadAdmin";
export type WorkspaceSqlAadAdmin = import("./workspaceSqlAadAdmin").WorkspaceSqlAadAdmin;
export const WorkspaceSqlAadAdmin: typeof import("./workspaceSqlAadAdmin").WorkspaceSqlAadAdmin = null as any;
utilities.lazyLoad(exports, ["WorkspaceSqlAadAdmin"], () => require("./workspaceSqlAadAdmin"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:synapse/v20210601:BigDataPool":
                return new BigDataPool(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:IntegrationRuntime":
                return new IntegrationRuntime(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:IpFirewallRule":
                return new IpFirewallRule(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:Key":
                return new Key(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:PrivateLinkHub":
                return new PrivateLinkHub(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPool":
                return new SqlPool(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolSensitivityLabel":
                return new SqlPoolSensitivityLabel(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolTransparentDataEncryption":
                return new SqlPoolTransparentDataEncryption(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolVulnerabilityAssessment":
                return new SqlPoolVulnerabilityAssessment(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolVulnerabilityAssessmentRuleBaseline":
                return new SqlPoolVulnerabilityAssessmentRuleBaseline(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolWorkloadClassifier":
                return new SqlPoolWorkloadClassifier(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:SqlPoolWorkloadGroup":
                return new SqlPoolWorkloadGroup(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:WorkspaceAadAdmin":
                return new WorkspaceAadAdmin(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:WorkspaceManagedSqlServerVulnerabilityAssessment":
                return new WorkspaceManagedSqlServerVulnerabilityAssessment(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210601:WorkspaceSqlAadAdmin":
                return new WorkspaceSqlAadAdmin(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "synapse/v20210601", _module)
