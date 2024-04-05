import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure SQL instance pool.
 */
export class InstancePool extends pulumi.CustomResource {
    /**
     * Get an existing InstancePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InstancePool {
        return new InstancePool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:InstancePool';

    /**
     * Returns true if the given object is an instance of InstancePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstancePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstancePool.__pulumiType;
    }

    /**
     * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
     */
    public readonly licenseType!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name and tier of the SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Resource ID of the subnet to place this instance pool in.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Count of vCores belonging to this instance pool.
     */
    public readonly vCores!: pulumi.Output<number>;

    /**
     * Create a InstancePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstancePoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.licenseType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.vCores === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vCores'");
            }
            resourceInputs["instancePoolName"] = args ? args.instancePoolName : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vCores"] = args ? args.vCores : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["licenseType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vCores"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:InstancePool" }, { type: "azure-native:sql/v20180601preview:InstancePool" }, { type: "azure-native:sql/v20200202preview:InstancePool" }, { type: "azure-native:sql/v20200801preview:InstancePool" }, { type: "azure-native:sql/v20201101preview:InstancePool" }, { type: "azure-native:sql/v20210201preview:InstancePool" }, { type: "azure-native:sql/v20210501preview:InstancePool" }, { type: "azure-native:sql/v20210801preview:InstancePool" }, { type: "azure-native:sql/v20211101:InstancePool" }, { type: "azure-native:sql/v20211101preview:InstancePool" }, { type: "azure-native:sql/v20220201preview:InstancePool" }, { type: "azure-native:sql/v20220501preview:InstancePool" }, { type: "azure-native:sql/v20220801preview:InstancePool" }, { type: "azure-native:sql/v20230201preview:InstancePool" }, { type: "azure-native:sql/v20230501preview:InstancePool" }, { type: "azure-native:sql/v20230801preview:InstancePool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InstancePool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InstancePool resource.
 */
export interface InstancePoolArgs {
    /**
     * The name of the instance pool to be created or updated.
     */
    instancePoolName?: pulumi.Input<string>;
    /**
     * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
     */
    licenseType: pulumi.Input<string | types.enums.InstancePoolLicenseType>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name and tier of the SKU.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource ID of the subnet to place this instance pool in.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Count of vCores belonging to this instance pool.
     */
    vCores: pulumi.Input<number>;
}