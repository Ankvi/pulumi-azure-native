import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for Disk Pool request.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class DiskPool extends pulumi.CustomResource {
    /**
     * Get an existing DiskPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DiskPool {
        return new DiskPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagepool:DiskPool';

    /**
     * Returns true if the given object is an instance of DiskPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DiskPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DiskPool.__pulumiType;
    }

    /**
     * List of additional capabilities for Disk Pool.
     */
    public readonly additionalCapabilities!: pulumi.Output<string[] | undefined>;
    /**
     * Logical zone for Disk Pool resource; example: ["1"].
     */
    public readonly availabilityZones!: pulumi.Output<string[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of Azure Managed Disks to attach to a Disk Pool.
     */
    public readonly disks!: pulumi.Output<types.outputs.DiskResponse[] | undefined>;
    /**
     * The geo-location where the resource lives.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    public readonly managedBy!: pulumi.Output<string>;
    /**
     * List of Azure resource ids that manage this resource.
     */
    public readonly managedByExtended!: pulumi.Output<string[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Operational status of the Disk Pool.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource ID of a Subnet for the Disk Pool.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * Resource metadata required by ARM RPC
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemMetadataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Sku tier
     */
    public /*out*/ readonly tier!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DiskPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["diskPoolName"] = args ? args.diskPoolName : undefined;
            resourceInputs["disks"] = args ? args.disks : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["managedByExtended"] = args ? args.managedByExtended : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tier"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalCapabilities"] = undefined /*out*/;
            resourceInputs["availabilityZones"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["disks"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managedByExtended"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tier"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagepool/v20200315preview:DiskPool" }, { type: "azure-native:storagepool/v20210401preview:DiskPool" }, { type: "azure-native:storagepool/v20210801:DiskPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DiskPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DiskPool resource.
 */
export interface DiskPoolArgs {
    /**
     * List of additional capabilities for a Disk Pool.
     */
    additionalCapabilities?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Logical zone for Disk Pool resource; example: ["1"].
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Disk Pool.
     */
    diskPoolName?: pulumi.Input<string>;
    /**
     * List of Azure Managed Disks to attach to a Disk Pool.
     */
    disks?: pulumi.Input<pulumi.Input<types.inputs.DiskArgs>[]>;
    /**
     * The geo-location where the resource lives.
     */
    location?: pulumi.Input<string>;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * List of Azure resource ids that manage this resource.
     */
    managedByExtended?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Determines the SKU of the Disk Pool
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Azure Resource ID of a Subnet for the Disk Pool.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}