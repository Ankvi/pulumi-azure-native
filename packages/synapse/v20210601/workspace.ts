import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A workspace
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
    public static readonly __pulumiType = 'azure-native:synapse/v20210601:Workspace';

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
     * The ADLA resource ID.
     */
    public /*out*/ readonly adlaResourceId!: pulumi.Output<string>;
    /**
     * Connectivity endpoints
     */
    public /*out*/ readonly connectivityEndpoints!: pulumi.Output<{[key: string]: string}>;
    /**
     * Initial workspace AAD admin properties for a CSP subscription
     */
    public readonly cspWorkspaceAdminProperties!: pulumi.Output<types.outputs.CspWorkspaceAdminPropertiesResponse | undefined>;
    /**
     * Workspace default data lake storage account details
     */
    public readonly defaultDataLakeStorage!: pulumi.Output<types.outputs.DataLakeStorageAccountDetailsResponse | undefined>;
    /**
     * The encryption details of the workspace
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionDetailsResponse | undefined>;
    /**
     * Workspace level configs and feature flags
     */
    public /*out*/ readonly extraProperties!: pulumi.Output<any>;
    /**
     * Identity of the workspace
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
     */
    public readonly managedResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
     */
    public readonly managedVirtualNetwork!: pulumi.Output<string | undefined>;
    /**
     * Managed Virtual Network Settings
     */
    public readonly managedVirtualNetworkSettings!: pulumi.Output<types.outputs.ManagedVirtualNetworkSettingsResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Private endpoint connections to the workspace
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * Resource provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Enable or Disable public network access to workspace
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Purview Configuration
     */
    public readonly purviewConfiguration!: pulumi.Output<types.outputs.PurviewConfigurationResponse | undefined>;
    /**
     * Workspace settings
     */
    public /*out*/ readonly settings!: pulumi.Output<{[key: string]: any}>;
    /**
     * Login for workspace SQL active directory administrator
     */
    public readonly sqlAdministratorLogin!: pulumi.Output<string | undefined>;
    /**
     * SQL administrator login password
     */
    public readonly sqlAdministratorLoginPassword!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Is trustedServiceBypassEnabled for the workspace
     */
    public readonly trustedServiceBypassEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Virtual Network profile
     */
    public readonly virtualNetworkProfile!: pulumi.Output<types.outputs.VirtualNetworkProfileResponse | undefined>;
    /**
     * Git integration settings
     */
    public readonly workspaceRepositoryConfiguration!: pulumi.Output<types.outputs.WorkspaceRepositoryConfigurationResponse | undefined>;
    /**
     * The workspace unique identifier
     */
    public /*out*/ readonly workspaceUID!: pulumi.Output<string>;

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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureADOnlyAuthentication"] = args ? args.azureADOnlyAuthentication : undefined;
            resourceInputs["cspWorkspaceAdminProperties"] = args ? args.cspWorkspaceAdminProperties : undefined;
            resourceInputs["defaultDataLakeStorage"] = args ? args.defaultDataLakeStorage : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedResourceGroupName"] = args ? args.managedResourceGroupName : undefined;
            resourceInputs["managedVirtualNetwork"] = args ? args.managedVirtualNetwork : undefined;
            resourceInputs["managedVirtualNetworkSettings"] = args ? args.managedVirtualNetworkSettings : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["purviewConfiguration"] = args ? args.purviewConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sqlAdministratorLogin"] = args ? args.sqlAdministratorLogin : undefined;
            resourceInputs["sqlAdministratorLoginPassword"] = args ? args.sqlAdministratorLoginPassword : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trustedServiceBypassEnabled"] = (args ? args.trustedServiceBypassEnabled : undefined) ?? false;
            resourceInputs["virtualNetworkProfile"] = args ? args.virtualNetworkProfile : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["workspaceRepositoryConfiguration"] = args ? args.workspaceRepositoryConfiguration : undefined;
            resourceInputs["adlaResourceId"] = undefined /*out*/;
            resourceInputs["connectivityEndpoints"] = undefined /*out*/;
            resourceInputs["extraProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceUID"] = undefined /*out*/;
        } else {
            resourceInputs["adlaResourceId"] = undefined /*out*/;
            resourceInputs["connectivityEndpoints"] = undefined /*out*/;
            resourceInputs["cspWorkspaceAdminProperties"] = undefined /*out*/;
            resourceInputs["defaultDataLakeStorage"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["extraProperties"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedResourceGroupName"] = undefined /*out*/;
            resourceInputs["managedVirtualNetwork"] = undefined /*out*/;
            resourceInputs["managedVirtualNetworkSettings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["purviewConfiguration"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["sqlAdministratorLogin"] = undefined /*out*/;
            resourceInputs["sqlAdministratorLoginPassword"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["trustedServiceBypassEnabled"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkProfile"] = undefined /*out*/;
            resourceInputs["workspaceRepositoryConfiguration"] = undefined /*out*/;
            resourceInputs["workspaceUID"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse:Workspace" }, { type: "azure-native:synapse/v20190601preview:Workspace" }, { type: "azure-native:synapse/v20201201:Workspace" }, { type: "azure-native:synapse/v20210301:Workspace" }, { type: "azure-native:synapse/v20210401preview:Workspace" }, { type: "azure-native:synapse/v20210501:Workspace" }, { type: "azure-native:synapse/v20210601preview:Workspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * Enable or Disable AzureADOnlyAuthentication on All Workspace subresource
     */
    azureADOnlyAuthentication?: pulumi.Input<boolean>;
    /**
     * Initial workspace AAD admin properties for a CSP subscription
     */
    cspWorkspaceAdminProperties?: pulumi.Input<types.inputs.CspWorkspaceAdminPropertiesArgs>;
    /**
     * Workspace default data lake storage account details
     */
    defaultDataLakeStorage?: pulumi.Input<types.inputs.DataLakeStorageAccountDetailsArgs>;
    /**
     * The encryption details of the workspace
     */
    encryption?: pulumi.Input<types.inputs.EncryptionDetailsArgs>;
    /**
     * Identity of the workspace
     */
    identity?: pulumi.Input<types.inputs.ManagedIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.'
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user.
     */
    managedVirtualNetwork?: pulumi.Input<string>;
    /**
     * Managed Virtual Network Settings
     */
    managedVirtualNetworkSettings?: pulumi.Input<types.inputs.ManagedVirtualNetworkSettingsArgs>;
    /**
     * Private endpoint connections to the workspace
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * Enable or Disable public network access to workspace
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.WorkspacePublicNetworkAccess>;
    /**
     * Purview Configuration
     */
    purviewConfiguration?: pulumi.Input<types.inputs.PurviewConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Login for workspace SQL active directory administrator
     */
    sqlAdministratorLogin?: pulumi.Input<string>;
    /**
     * SQL administrator login password
     */
    sqlAdministratorLoginPassword?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Is trustedServiceBypassEnabled for the workspace
     */
    trustedServiceBypassEnabled?: pulumi.Input<boolean>;
    /**
     * Virtual Network profile
     */
    virtualNetworkProfile?: pulumi.Input<types.inputs.VirtualNetworkProfileArgs>;
    /**
     * The name of the workspace.
     */
    workspaceName?: pulumi.Input<string>;
    /**
     * Git integration settings
     */
    workspaceRepositoryConfiguration?: pulumi.Input<types.inputs.WorkspaceRepositoryConfigurationArgs>;
}
