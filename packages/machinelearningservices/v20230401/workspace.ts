import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a machine learning workspace.
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
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401:Workspace';

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
     * The flag to indicate whether to allow public access when behind VNet.
     */
    public readonly allowPublicAccessWhenBehindVnet!: pulumi.Output<boolean | undefined>;
    /**
     * ARM id of the application insights associated with this workspace.
     */
    public readonly applicationInsights!: pulumi.Output<string | undefined>;
    /**
     * ARM id of the container registry associated with this workspace.
     */
    public readonly containerRegistry!: pulumi.Output<string | undefined>;
    /**
     * The description of this workspace.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Url for the discovery service to identify regional endpoints for machine learning experimentation services
     */
    public readonly discoveryUrl!: pulumi.Output<string | undefined>;
    /**
     * The encryption settings of Azure ML workspace.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionPropertyResponse | undefined>;
    /**
     * The friendly name for this workspace. This name in mutable
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    public readonly hbiWorkspace!: pulumi.Output<boolean | undefined>;
    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The compute name for image build
     */
    public readonly imageBuildCompute!: pulumi.Output<string | undefined>;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    public readonly keyVault!: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The URI associated with this workspace that machine learning flow must point at to set up tracking.
     */
    public /*out*/ readonly mlFlowTrackingUri!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The notebook info of Azure ML workspace.
     */
    public /*out*/ readonly notebookInfo!: pulumi.Output<types.outputs.NotebookResourceInfoResponse>;
    /**
     * The user assigned identity resource id that represents the workspace identity.
     */
    public readonly primaryUserAssignedIdentity!: pulumi.Output<string | undefined>;
    /**
     * The list of private endpoint connections in the workspace.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Count of private connections in the workspace
     */
    public /*out*/ readonly privateLinkCount!: pulumi.Output<number>;
    /**
     * The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether requests from Public Network are allowed.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The service managed resource settings.
     */
    public readonly serviceManagedResourcesSettings!: pulumi.Output<types.outputs.ServiceManagedResourcesSettingsResponse | undefined>;
    /**
     * The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
     */
    public /*out*/ readonly serviceProvisionedResourceGroup!: pulumi.Output<string>;
    /**
     * The list of shared private link resources in this workspace.
     */
    public readonly sharedPrivateLinkResources!: pulumi.Output<types.outputs.SharedPrivateLinkResourceResponse[] | undefined>;
    /**
     * The sku of the workspace.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
     */
    public readonly storageAccount!: pulumi.Output<string | undefined>;
    /**
     * If the storage associated with the workspace has hierarchical namespace(HNS) enabled.
     */
    public /*out*/ readonly storageHnsEnabled!: pulumi.Output<boolean>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The tenant id associated with this workspace.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Enabling v1_legacy_mode may prevent you from using features provided by the v2 API.
     */
    public readonly v1LegacyMode!: pulumi.Output<boolean | undefined>;
    /**
     * The immutable id associated with this workspace.
     */
    public /*out*/ readonly workspaceId!: pulumi.Output<string>;

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
            resourceInputs["allowPublicAccessWhenBehindVnet"] = (args ? args.allowPublicAccessWhenBehindVnet : undefined) ?? false;
            resourceInputs["applicationInsights"] = args ? args.applicationInsights : undefined;
            resourceInputs["containerRegistry"] = args ? args.containerRegistry : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["discoveryUrl"] = args ? args.discoveryUrl : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["hbiWorkspace"] = (args ? args.hbiWorkspace : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["imageBuildCompute"] = args ? args.imageBuildCompute : undefined;
            resourceInputs["keyVault"] = args ? args.keyVault : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["primaryUserAssignedIdentity"] = args ? args.primaryUserAssignedIdentity : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceManagedResourcesSettings"] = args ? args.serviceManagedResourcesSettings : undefined;
            resourceInputs["sharedPrivateLinkResources"] = args ? args.sharedPrivateLinkResources : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageAccount"] = args ? args.storageAccount : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["v1LegacyMode"] = (args ? args.v1LegacyMode : undefined) ?? false;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["mlFlowTrackingUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notebookInfo"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["privateLinkCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceProvisionedResourceGroup"] = undefined /*out*/;
            resourceInputs["storageHnsEnabled"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        } else {
            resourceInputs["allowPublicAccessWhenBehindVnet"] = undefined /*out*/;
            resourceInputs["applicationInsights"] = undefined /*out*/;
            resourceInputs["containerRegistry"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["discoveryUrl"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hbiWorkspace"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["imageBuildCompute"] = undefined /*out*/;
            resourceInputs["keyVault"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mlFlowTrackingUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notebookInfo"] = undefined /*out*/;
            resourceInputs["primaryUserAssignedIdentity"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["privateLinkCount"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["serviceManagedResourcesSettings"] = undefined /*out*/;
            resourceInputs["serviceProvisionedResourceGroup"] = undefined /*out*/;
            resourceInputs["sharedPrivateLinkResources"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageAccount"] = undefined /*out*/;
            resourceInputs["storageHnsEnabled"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["v1LegacyMode"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:Workspace" }, { type: "azure-native:machinelearningservices/v20180301preview:Workspace" }, { type: "azure-native:machinelearningservices/v20181119:Workspace" }, { type: "azure-native:machinelearningservices/v20190501:Workspace" }, { type: "azure-native:machinelearningservices/v20190601:Workspace" }, { type: "azure-native:machinelearningservices/v20191101:Workspace" }, { type: "azure-native:machinelearningservices/v20200101:Workspace" }, { type: "azure-native:machinelearningservices/v20200218preview:Workspace" }, { type: "azure-native:machinelearningservices/v20200301:Workspace" }, { type: "azure-native:machinelearningservices/v20200401:Workspace" }, { type: "azure-native:machinelearningservices/v20200501preview:Workspace" }, { type: "azure-native:machinelearningservices/v20200515preview:Workspace" }, { type: "azure-native:machinelearningservices/v20200601:Workspace" }, { type: "azure-native:machinelearningservices/v20200801:Workspace" }, { type: "azure-native:machinelearningservices/v20200901preview:Workspace" }, { type: "azure-native:machinelearningservices/v20210101:Workspace" }, { type: "azure-native:machinelearningservices/v20210301preview:Workspace" }, { type: "azure-native:machinelearningservices/v20210401:Workspace" }, { type: "azure-native:machinelearningservices/v20210701:Workspace" }, { type: "azure-native:machinelearningservices/v20220101preview:Workspace" }, { type: "azure-native:machinelearningservices/v20220201preview:Workspace" }, { type: "azure-native:machinelearningservices/v20220501:Workspace" }, { type: "azure-native:machinelearningservices/v20220601preview:Workspace" }, { type: "azure-native:machinelearningservices/v20221001:Workspace" }, { type: "azure-native:machinelearningservices/v20221001preview:Workspace" }, { type: "azure-native:machinelearningservices/v20221201preview:Workspace" }, { type: "azure-native:machinelearningservices/v20230201preview:Workspace" }, { type: "azure-native:machinelearningservices/v20230401preview:Workspace" }, { type: "azure-native:machinelearningservices/v20230601preview:Workspace" }, { type: "azure-native:machinelearningservices/v20230801preview:Workspace" }, { type: "azure-native:machinelearningservices/v20231001:Workspace" }, { type: "azure-native:machinelearningservices/v20240101preview:Workspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The flag to indicate whether to allow public access when behind VNet.
     */
    allowPublicAccessWhenBehindVnet?: pulumi.Input<boolean>;
    /**
     * ARM id of the application insights associated with this workspace.
     */
    applicationInsights?: pulumi.Input<string>;
    /**
     * ARM id of the container registry associated with this workspace.
     */
    containerRegistry?: pulumi.Input<string>;
    /**
     * The description of this workspace.
     */
    description?: pulumi.Input<string>;
    /**
     * Url for the discovery service to identify regional endpoints for machine learning experimentation services
     */
    discoveryUrl?: pulumi.Input<string>;
    /**
     * The encryption settings of Azure ML workspace.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionPropertyArgs>;
    /**
     * The friendly name for this workspace. This name in mutable
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
     */
    hbiWorkspace?: pulumi.Input<boolean>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The compute name for image build
     */
    imageBuildCompute?: pulumi.Input<string>;
    /**
     * ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
     */
    keyVault?: pulumi.Input<string>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The user assigned identity resource id that represents the workspace identity.
     */
    primaryUserAssignedIdentity?: pulumi.Input<string>;
    /**
     * Whether requests from Public Network are allowed.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service managed resource settings.
     */
    serviceManagedResourcesSettings?: pulumi.Input<types.inputs.ServiceManagedResourcesSettingsArgs>;
    /**
     * The list of shared private link resources in this workspace.
     */
    sharedPrivateLinkResources?: pulumi.Input<pulumi.Input<types.inputs.SharedPrivateLinkResourceArgs>[]>;
    /**
     * The sku of the workspace.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
     */
    storageAccount?: pulumi.Input<string>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enabling v1_legacy_mode may prevent you from using features provided by the v2 API.
     */
    v1LegacyMode?: pulumi.Input<boolean>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName?: pulumi.Input<string>;
}