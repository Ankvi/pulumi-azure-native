import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ArcSetting details.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-02-01, 2023-03-01, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-09-01-preview, 2024-12-01-preview, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azurestackhci [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ArcSetting extends pulumi.CustomResource {
    /**
     * Get an existing ArcSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ArcSetting {
        return new ArcSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:ArcSetting';

    /**
     * Returns true if the given object is an instance of ArcSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArcSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArcSetting.__pulumiType;
    }

    /**
     * Aggregate state of Arc agent across the nodes in this HCI cluster.
     */
    public /*out*/ readonly aggregateState!: pulumi.Output<string>;
    /**
     * App id of arc AAD identity.
     */
    public readonly arcApplicationClientId!: pulumi.Output<string | undefined>;
    /**
     * Object id of arc AAD identity.
     */
    public readonly arcApplicationObjectId!: pulumi.Output<string | undefined>;
    /**
     * Tenant id of arc AAD identity.
     */
    public readonly arcApplicationTenantId!: pulumi.Output<string | undefined>;
    /**
     * The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
     */
    public readonly arcInstanceResourceGroup!: pulumi.Output<string | undefined>;
    /**
     * Object id of arc AAD service principal.
     */
    public readonly arcServicePrincipalObjectId!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * contains connectivity related configuration for ARC resources
     */
    public readonly connectivityProperties!: pulumi.Output<types.outputs.ArcConnectivityPropertiesResponse[] | undefined>;
    /**
     * Properties for each of the default extensions category
     */
    public /*out*/ readonly defaultExtensions!: pulumi.Output<types.outputs.DefaultExtensionDetailsResponse[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of Arc agent in each of the nodes.
     */
    public /*out*/ readonly perNodeDetails!: pulumi.Output<types.outputs.PerNodeStateResponse[]>;
    /**
     * Provisioning state of the ArcSetting proxy resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ArcSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArcSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["arcApplicationClientId"] = args ? args.arcApplicationClientId : undefined;
            resourceInputs["arcApplicationObjectId"] = args ? args.arcApplicationObjectId : undefined;
            resourceInputs["arcApplicationTenantId"] = args ? args.arcApplicationTenantId : undefined;
            resourceInputs["arcInstanceResourceGroup"] = args ? args.arcInstanceResourceGroup : undefined;
            resourceInputs["arcServicePrincipalObjectId"] = args ? args.arcServicePrincipalObjectId : undefined;
            resourceInputs["arcSettingName"] = args ? args.arcSettingName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["connectivityProperties"] = args ? args.connectivityProperties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultExtensions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["arcApplicationClientId"] = undefined /*out*/;
            resourceInputs["arcApplicationObjectId"] = undefined /*out*/;
            resourceInputs["arcApplicationTenantId"] = undefined /*out*/;
            resourceInputs["arcInstanceResourceGroup"] = undefined /*out*/;
            resourceInputs["arcServicePrincipalObjectId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectivityProperties"] = undefined /*out*/;
            resourceInputs["defaultExtensions"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210101preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20210901:ArcSetting" }, { type: "azure-native:azurestackhci/v20210901preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20220101:ArcSetting" }, { type: "azure-native:azurestackhci/v20220301:ArcSetting" }, { type: "azure-native:azurestackhci/v20220501:ArcSetting" }, { type: "azure-native:azurestackhci/v20220901:ArcSetting" }, { type: "azure-native:azurestackhci/v20221001:ArcSetting" }, { type: "azure-native:azurestackhci/v20221201:ArcSetting" }, { type: "azure-native:azurestackhci/v20221215preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20230201:ArcSetting" }, { type: "azure-native:azurestackhci/v20230301:ArcSetting" }, { type: "azure-native:azurestackhci/v20230601:ArcSetting" }, { type: "azure-native:azurestackhci/v20230801:ArcSetting" }, { type: "azure-native:azurestackhci/v20230801preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20231101preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20240101:ArcSetting" }, { type: "azure-native:azurestackhci/v20240215preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20240401:ArcSetting" }, { type: "azure-native:azurestackhci/v20240901preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20241201preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20250201preview:ArcSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArcSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArcSetting resource.
 */
export interface ArcSettingArgs {
    /**
     * App id of arc AAD identity.
     */
    arcApplicationClientId?: pulumi.Input<string>;
    /**
     * Object id of arc AAD identity.
     */
    arcApplicationObjectId?: pulumi.Input<string>;
    /**
     * Tenant id of arc AAD identity.
     */
    arcApplicationTenantId?: pulumi.Input<string>;
    /**
     * The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
     */
    arcInstanceResourceGroup?: pulumi.Input<string>;
    /**
     * Object id of arc AAD service principal.
     */
    arcServicePrincipalObjectId?: pulumi.Input<string>;
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * contains connectivity related configuration for ARC resources
     */
    connectivityProperties?: pulumi.Input<pulumi.Input<types.inputs.ArcConnectivityPropertiesArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}