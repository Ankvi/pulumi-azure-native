import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the workspace.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-02-01, 2023-09-15-preview, 2024-09-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databricks:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Information about workspace.
 */
export interface GetWorkspaceResult {
    /**
     * Access Connector Resource that is going to be associated with Databricks Workspace
     */
    readonly accessConnector?: types.outputs.WorkspacePropertiesResponseAccessConnector;
    /**
     * The workspace provider authorizations.
     */
    readonly authorizations?: types.outputs.WorkspaceProviderAuthorizationResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that created the workspace.
     */
    readonly createdBy?: types.outputs.CreatedByResponse;
    /**
     * Specifies the date and time when the workspace is created.
     */
    readonly createdDateTime: string;
    /**
     * Properties for Default Catalog configuration during workspace creation.
     */
    readonly defaultCatalog?: types.outputs.DefaultCatalogPropertiesResponse;
    /**
     * Gets or Sets Default Storage Firewall configuration information
     */
    readonly defaultStorageFirewall?: string;
    /**
     * The resource Id of the managed disk encryption set.
     */
    readonly diskEncryptionSetId: string;
    /**
     * Encryption properties for databricks workspace
     */
    readonly encryption?: types.outputs.WorkspacePropertiesResponseEncryption;
    /**
     * Contains settings related to the Enhanced Security and Compliance Add-On.
     */
    readonly enhancedSecurityCompliance?: types.outputs.EnhancedSecurityComplianceDefinitionResponse;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Indicates whether unity catalog enabled for the workspace or not.
     */
    readonly isUcEnabled: boolean;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The details of Managed Identity of Disk Encryption Set used for Managed Disk Encryption
     */
    readonly managedDiskIdentity?: types.outputs.ManagedIdentityConfigurationResponse;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The workspace's custom parameters.
     */
    readonly parameters?: types.outputs.WorkspaceCustomParametersResponse;
    /**
     * Private endpoint connections created on the workspace
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The workspace provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
     */
    readonly requiredNsgRules?: string;
    /**
     * The SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The details of Managed Identity of Storage Account
     */
    readonly storageAccountIdentity?: types.outputs.ManagedIdentityConfigurationResponse;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * The blob URI where the UI definition file is located.
     */
    readonly uiDefinitionUri?: string;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
     */
    readonly updatedBy?: types.outputs.CreatedByResponse;
    /**
     * The unique identifier of the databricks workspace in databricks control plane.
     */
    readonly workspaceId: string;
    /**
     * The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
     */
    readonly workspaceUrl: string;
}
/**
 * Gets the workspace.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-02-01, 2023-09-15-preview, 2024-09-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databricks:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}