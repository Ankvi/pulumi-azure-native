import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the cluster.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere/v20231001:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

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
     * Gets or sets the inventory Item ID for the cluster.
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
     * Gets or sets the vCenter Managed Object name for the cluster.
     */
    public /*out*/ readonly moName!: pulumi.Output<string>;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
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
     * Gets the max CPU usage across all cores on the cluster in MHz.
     */
    public /*out*/ readonly totalCpuMHz!: pulumi.Output<number>;
    /**
     * Gets the total amount of physical memory on the cluster in GB.
     */
    public /*out*/ readonly totalMemoryGB!: pulumi.Output<number>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the used CPU usage across all cores on the cluster in MHz.
     */
    public /*out*/ readonly usedCpuMHz!: pulumi.Output<number>;
    /**
     * Gets the used physical memory on the cluster in GB.
     */
    public /*out*/ readonly usedMemoryGB!: pulumi.Output<number>;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this cluster resides.
     */
    public readonly vCenterId!: pulumi.Output<string | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["inventoryItemId"] = args ? args.inventoryItemId : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["moRefId"] = args ? args.moRefId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vCenterId"] = args ? args.vCenterId : undefined;
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["datastoreIds"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["totalCpuMHz"] = undefined /*out*/;
            resourceInputs["totalMemoryGB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usedCpuMHz"] = undefined /*out*/;
            resourceInputs["usedMemoryGB"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
        } else {
            resourceInputs["customResourceName"] = undefined /*out*/;
            resourceInputs["datastoreIds"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["inventoryItemId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["moName"] = undefined /*out*/;
            resourceInputs["moRefId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkIds"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["totalCpuMHz"] = undefined /*out*/;
            resourceInputs["totalMemoryGB"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["usedCpuMHz"] = undefined /*out*/;
            resourceInputs["usedMemoryGB"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["vCenterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere:Cluster" }, { type: "azure-native:connectedvmwarevsphere/v20201001preview:Cluster" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:Cluster" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:Cluster" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Name of the cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Gets or sets the inventory Item ID for the cluster.
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
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
     */
    moRefId?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this cluster resides.
     */
    vCenterId?: pulumi.Input<string>;
}