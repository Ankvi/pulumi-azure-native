import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Quota Rule of a Volume
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2022-01-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class VolumeQuotaRule extends pulumi.CustomResource {
    /**
     * Get an existing VolumeQuotaRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VolumeQuotaRule {
        return new VolumeQuotaRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:VolumeQuotaRule';

    /**
     * Returns true if the given object is an instance of VolumeQuotaRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeQuotaRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeQuotaRule.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the status of the VolumeQuotaRule at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Size of quota
     */
    public readonly quotaSizeInKiBs!: pulumi.Output<number | undefined>;
    /**
     * UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>
     */
    public readonly quotaTarget!: pulumi.Output<string | undefined>;
    /**
     * Type of quota
     */
    public readonly quotaType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VolumeQuotaRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeQuotaRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["quotaSizeInKiBs"] = args ? args.quotaSizeInKiBs : undefined;
            resourceInputs["quotaTarget"] = args ? args.quotaTarget : undefined;
            resourceInputs["quotaType"] = args ? args.quotaType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["volumeQuotaRuleName"] = args ? args.volumeQuotaRuleName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["quotaSizeInKiBs"] = undefined /*out*/;
            resourceInputs["quotaTarget"] = undefined /*out*/;
            resourceInputs["quotaType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20220101:VolumeQuotaRule" }, { type: "azure-native:netapp/v20220301:VolumeQuotaRule" }, { type: "azure-native:netapp/v20220501:VolumeQuotaRule" }, { type: "azure-native:netapp/v20220901:VolumeQuotaRule" }, { type: "azure-native:netapp/v20221101:VolumeQuotaRule" }, { type: "azure-native:netapp/v20221101preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20230501:VolumeQuotaRule" }, { type: "azure-native:netapp/v20230501preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20230701:VolumeQuotaRule" }, { type: "azure-native:netapp/v20230701preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20231101:VolumeQuotaRule" }, { type: "azure-native:netapp/v20231101preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240101:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240301:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240301preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240501:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240501preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240701:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240701preview:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240901:VolumeQuotaRule" }, { type: "azure-native:netapp/v20240901preview:VolumeQuotaRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VolumeQuotaRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VolumeQuotaRule resource.
 */
export interface VolumeQuotaRuleArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * Size of quota
     */
    quotaSizeInKiBs?: pulumi.Input<number>;
    /**
     * UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>
     */
    quotaTarget?: pulumi.Input<string>;
    /**
     * Type of quota
     */
    quotaType?: pulumi.Input<string | types.enums.Type>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
    /**
     * The name of volume quota rule
     */
    volumeQuotaRuleName?: pulumi.Input<string>;
}