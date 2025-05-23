import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about workspace.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2023-02-01, 2023-09-15-preview, 2024-09-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workspace {
        return new Workspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databricks:Workspace';

    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workspace.__pulumiType;
    }

    /**
     * Access Connector Resource that is going to be associated with Databricks Workspace
     */
    public readonly accessConnector!: pulumi.Output<types.outputs.WorkspacePropertiesResponseAccessConnector | undefined>;
    /**
     * The workspace provider authorizations.
     */
    public readonly authorizations!: pulumi.Output<types.outputs.WorkspaceProviderAuthorizationResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that created the workspace.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<types.outputs.CreatedByResponse | undefined>;
    /**
     * Specifies the date and time when the workspace is created.
     */
    public /*out*/ readonly createdDateTime!: pulumi.Output<string>;
    /**
     * Properties for Default Catalog configuration during workspace creation.
     */
    public readonly defaultCatalog!: pulumi.Output<types.outputs.DefaultCatalogPropertiesResponse | undefined>;
    /**
     * Gets or Sets Default Storage Firewall configuration information
     */
    public readonly defaultStorageFirewall!: pulumi.Output<string | undefined>;
    /**
     * The resource Id of the managed disk encryption set.
     */
    public /*out*/ readonly diskEncryptionSetId!: pulumi.Output<string>;
    /**
     * Encryption properties for databricks workspace
     */
    public readonly encryption!: pulumi.Output<types.outputs.WorkspacePropertiesResponseEncryption | undefined>;
    /**
     * Contains settings related to the Enhanced Security and Compliance Add-On.
     */
    public readonly enhancedSecurityCompliance!: pulumi.Output<types.outputs.EnhancedSecurityComplianceDefinitionResponse | undefined>;
    /**
     * Indicates whether unity catalog enabled for the workspace or not.
     */
    public /*out*/ readonly isUcEnabled!: pulumi.Output<boolean>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The details of Managed Identity of Disk Encryption Set used for Managed Disk Encryption
     */
    public /*out*/ readonly managedDiskIdentity!: pulumi.Output<types.outputs.ManagedIdentityConfigurationResponse | undefined>;
    /**
     * The managed resource group Id.
     */
    public readonly managedResourceGroupId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The workspace's custom parameters.
     */
    public readonly parameters!: pulumi.Output<types.outputs.WorkspaceCustomParametersResponse | undefined>;
    /**
     * Private endpoint connections created on the workspace
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The workspace provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
     */
    public readonly requiredNsgRules!: pulumi.Output<string | undefined>;
    /**
     * The SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The details of Managed Identity of Storage Account
     */
    public /*out*/ readonly storageAccountIdentity!: pulumi.Output<types.outputs.ManagedIdentityConfigurationResponse | undefined>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The blob URI where the UI definition file is located.
     */
    public readonly uiDefinitionUri!: pulumi.Output<string | undefined>;
    /**
     * Indicates the Object ID, PUID and Application ID of entity that last updated the workspace.
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<types.outputs.CreatedByResponse | undefined>;
    /**
     * The unique identifier of the databricks workspace in databricks control plane.
     */
    public /*out*/ readonly workspaceId!: pulumi.Output<string>;
    /**
     * The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
     */
    public /*out*/ readonly workspaceUrl!: pulumi.Output<string>;

    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedResourceGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedResourceGroupId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessConnector"] = args ? args.accessConnector : undefined;
            resourceInputs["authorizations"] = args ? args.authorizations : undefined;
            resourceInputs["defaultCatalog"] = args ? (args.defaultCatalog ? pulumi.output(args.defaultCatalog).apply(types.inputs.defaultCatalogPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["defaultStorageFirewall"] = args ? args.defaultStorageFirewall : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["enhancedSecurityCompliance"] = args ? args.enhancedSecurityCompliance : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupId"] = args ? args.managedResourceGroupId : undefined;
            resourceInputs["parameters"] = args ? (args.parameters ? pulumi.output(args.parameters).apply(types.inputs.workspaceCustomParametersArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["requiredNsgRules"] = args ? args.requiredNsgRules : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uiDefinitionUri"] = args ? args.uiDefinitionUri : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["diskEncryptionSetId"] = undefined /*out*/;
            resourceInputs["isUcEnabled"] = undefined /*out*/;
            resourceInputs["managedDiskIdentity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccountIdentity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspaceUrl"] = undefined /*out*/;
        } else {
            resourceInputs["accessConnector"] = undefined /*out*/;
            resourceInputs["authorizations"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["defaultCatalog"] = undefined /*out*/;
            resourceInputs["defaultStorageFirewall"] = undefined /*out*/;
            resourceInputs["diskEncryptionSetId"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["enhancedSecurityCompliance"] = undefined /*out*/;
            resourceInputs["isUcEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedDiskIdentity"] = undefined /*out*/;
            resourceInputs["managedResourceGroupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["requiredNsgRules"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageAccountIdentity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uiDefinitionUri"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspaceUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databricks/v20180401:Workspace" }, { type: "azure-native:databricks/v20210401preview:Workspace" }, { type: "azure-native:databricks/v20220401preview:Workspace" }, { type: "azure-native:databricks/v20230201:Workspace" }, { type: "azure-native:databricks/v20230915preview:Workspace" }, { type: "azure-native:databricks/v20240501:Workspace" }, { type: "azure-native:databricks/v20240901preview:Workspace" }, { type: "azure-native:databricks/v20250301preview:Workspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * Access Connector Resource that is going to be associated with Databricks Workspace
     */
    accessConnector?: pulumi.Input<types.inputs.WorkspacePropertiesAccessConnectorArgs>;
    /**
     * The workspace provider authorizations.
     */
    authorizations?: pulumi.Input<pulumi.Input<types.inputs.WorkspaceProviderAuthorizationArgs>[]>;
    /**
     * Properties for Default Catalog configuration during workspace creation.
     */
    defaultCatalog?: pulumi.Input<types.inputs.DefaultCatalogPropertiesArgs>;
    /**
     * Gets or Sets Default Storage Firewall configuration information
     */
    defaultStorageFirewall?: pulumi.Input<string | types.enums.DefaultStorageFirewall>;
    /**
     * Encryption properties for databricks workspace
     */
    encryption?: pulumi.Input<types.inputs.WorkspacePropertiesEncryptionArgs>;
    /**
     * Contains settings related to the Enhanced Security and Compliance Add-On.
     */
    enhancedSecurityCompliance?: pulumi.Input<types.inputs.EnhancedSecurityComplianceDefinitionArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The managed resource group Id.
     */
    managedResourceGroupId: pulumi.Input<string>;
    /**
     * The workspace's custom parameters.
     */
    parameters?: pulumi.Input<types.inputs.WorkspaceCustomParametersArgs>;
    /**
     * The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
     */
    requiredNsgRules?: pulumi.Input<string | types.enums.RequiredNsgRules>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The blob URI where the UI definition file is located.
     */
    uiDefinitionUri?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName?: pulumi.Input<string>;
}