import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the resourcePool.
 *
 * Uses Azure REST API version 2023-12-01. In version 2.x of the Azure Native provider, it used API version 2022-07-15-preview.
 *
 * Other available API versions: 2022-07-15-preview, 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ResourcePool extends pulumi.CustomResource {
    /**
     * Get an existing ResourcePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourcePool {
        return new ResourcePool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:ResourcePool';

    /**
     * Returns true if the given object is an instance of ResourcePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourcePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourcePool.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the max CPU usage across all cores on the pool in MHz.
     */
    public /*out*/ readonly cpuCapacityMHz!: pulumi.Output<number>;
    /**
     * Gets or sets CPULimitMHz which specifies a CPU usage limit in MHz.
     * Utilization will not exceed this limit even if there are available resources.
     */
    public /*out*/ readonly cpuLimitMHz!: pulumi.Output<number>;
    /**
     * Gets the used CPU usage across all cores on the pool in MHz.
     */
    public /*out*/ readonly cpuOverallUsageMHz!: pulumi.Output<number>;
    /**
     * Gets or sets CPUReservationMHz which specifies the CPU size in MHz that is guaranteed
     * to be available.
     */
    public /*out*/ readonly cpuReservationMHz!: pulumi.Output<number>;
    /**
     * Gets or sets CPUSharesLevel which specifies the CPU allocation level for this pool.
     * This property is used in relative allocation between resource consumers.
     */
    public /*out*/ readonly cpuSharesLevel!: pulumi.Output<string>;
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    public /*out*/ readonly customResourceName!: pulumi.Output<string>;
    /**
     * Gets the datastore ARM ids.
     */
    public /*out*/ readonly datastoreIds!: pulumi.Output<string[]>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Gets or sets the inventory Item ID for the resource pool.
     */
    public readonly inventoryItemId!: pulumi.Output<string | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Gets the total amount of physical memory on the pool in GB.
     */
    public /*out*/ readonly memCapacityGB!: pulumi.Output<number>;
    /**
     * Gets or sets MemLimitMB specifies a memory usage limit in megabytes.
     * Utilization will not exceed the specified limit even if there are available resources.
     */
    public /*out*/ readonly memLimitMB!: pulumi.Output<number>;
    /**
     * Gets the used physical memory on the pool in GB.
     */
    public /*out*/ readonly memOverallUsageGB!: pulumi.Output<number>;
    /**
     * Gets or sets MemReservationMB which specifies the guaranteed available memory in
     * megabytes.
     */
    public /*out*/ readonly memReservationMB!: pulumi.Output<number>;
    /**
     * Gets or sets CPUSharesLevel which specifies the memory allocation level for this pool.
     * This property is used in relative allocation between resource consumers.
     */
    public /*out*/ readonly memSharesLevel!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter Managed Object name for the resource pool.
     */
    public /*out*/ readonly moName!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the resource pool.
     */
    public readonly moRefId!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the network ARM ids.
     */
    public /*out*/ readonly networkIds!: pulumi.Output<string[]>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Gets or sets the Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    public readonly vCenterId!: pulumi.Output<string | undefined>;

    /**
     * Create a ResourcePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourcePoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourcePoolName"] = args ? args.resourcePoolName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vCenterId"] = args ? args.vCenterId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cpuCapacityMHz"] = undefined /*out*/;
            resourceInputs["cpuLimitMHz"] = undefined /*out*/;
            resourceInputs["cpuOverallUsageMHz"] = undefined /*out*/;
            resourceInputs["cpuReservationMHz"] = undefined /*out*/;
            resourceInputs["cpuSharesLevel"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["datastoreIds"] = undefined /*out*/;
            resourceInputs["memCapacityGB"] = undefined /*out*/;
            resourceInputs["memLimitMB"] = undefined /*out*/;
            resourceInputs["memOverallUsageGB"] = undefined /*out*/;
            resourceInputs["memReservationMB"] = undefined /*out*/;
            resourceInputs["memSharesLevel"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cpuCapacityMHz"] = undefined /*out*/;
            resourceInputs["cpuLimitMHz"] = undefined /*out*/;
            resourceInputs["cpuOverallUsageMHz"] = undefined /*out*/;
            resourceInputs["cpuReservationMHz"] = undefined /*out*/;
            resourceInputs["cpuSharesLevel"] = undefined /*out*/;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["datastoreIds"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["memCapacityGB"] = undefined /*out*/;
            resourceInputs["memLimitMB"] = undefined /*out*/;
            resourceInputs["memOverallUsageGB"] = undefined /*out*/;
            resourceInputs["memReservationMB"] = undefined /*out*/;
            resourceInputs["memSharesLevel"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vCenterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:ResourcePool" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:ResourcePool" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:ResourcePool" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:ResourcePool" }, { type: "azure-native:connectedvmwarevsphere/v20231001:ResourcePool" }, { type: "azure-native:connectedvmwarevsphere/v20231201:ResourcePool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ResourcePool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ResourcePool resource.
 */
export interface ResourcePoolArgs {
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the resource pool.
     */
    inventoryItemId?: pulumi.Input<string>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the resource pool.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the resourcePool.
     */
    resourcePoolName?: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this resource pool resides.
     */
    vCenterId?: pulumi.Input<string>;
}