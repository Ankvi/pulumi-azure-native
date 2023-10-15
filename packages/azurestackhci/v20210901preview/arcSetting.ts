import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ArcSetting details.
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
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:ArcSetting';

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
     * The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources.
     */
    public /*out*/ readonly arcInstanceResourceGroup!: pulumi.Output<string>;
    /**
     * The timestamp of resource creation (UTC).
     */
    public readonly createdAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that created the resource.
     */
    public readonly createdBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that created the resource.
     */
    public readonly createdByType!: pulumi.Output<string | undefined>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    public readonly lastModifiedAt!: pulumi.Output<string | undefined>;
    /**
     * The identity that last modified the resource.
     */
    public readonly lastModifiedBy!: pulumi.Output<string | undefined>;
    /**
     * The type of identity that last modified the resource.
     */
    public readonly lastModifiedByType!: pulumi.Output<string | undefined>;
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
            resourceInputs["arcSettingName"] = args ? args.arcSettingName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["createdByType"] = args ? args.createdByType : undefined;
            resourceInputs["lastModifiedAt"] = args ? args.lastModifiedAt : undefined;
            resourceInputs["lastModifiedBy"] = args ? args.lastModifiedBy : undefined;
            resourceInputs["lastModifiedByType"] = args ? args.lastModifiedByType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["arcInstanceResourceGroup"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aggregateState"] = undefined /*out*/;
            resourceInputs["arcInstanceResourceGroup"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdByType"] = undefined /*out*/;
            resourceInputs["lastModifiedAt"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedByType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["perNodeDetails"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci:ArcSetting" }, { type: "azure-native:azurestackhci/v20210101preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20210901:ArcSetting" }, { type: "azure-native:azurestackhci/v20220101:ArcSetting" }, { type: "azure-native:azurestackhci/v20220301:ArcSetting" }, { type: "azure-native:azurestackhci/v20220501:ArcSetting" }, { type: "azure-native:azurestackhci/v20220901:ArcSetting" }, { type: "azure-native:azurestackhci/v20221001:ArcSetting" }, { type: "azure-native:azurestackhci/v20221201:ArcSetting" }, { type: "azure-native:azurestackhci/v20221215preview:ArcSetting" }, { type: "azure-native:azurestackhci/v20230201:ArcSetting" }, { type: "azure-native:azurestackhci/v20230301:ArcSetting" }, { type: "azure-native:azurestackhci/v20230601:ArcSetting" }, { type: "azure-native:azurestackhci/v20230801:ArcSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArcSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArcSetting resource.
 */
export interface ArcSettingArgs {
    /**
     * The name of the proxy resource holding details of HCI ArcSetting information.
     */
    arcSettingName?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The identity that created the resource.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: pulumi.Input<string>;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: pulumi.Input<string | types.enums.CreatedByType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
