import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Pool resource
 *
 * Uses Azure REST API version 2023-07-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-07-01-preview.
 */
export class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pool {
        return new Pool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerstorage:Pool';

    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pool.__pulumiType;
    }

    /**
     * List of resources that should have access to the pool. Typically ARM references to AKS clusters or ACI Container Groups. For local and standard this must be a single reference. For ElasticSAN there can be many.
     */
    public readonly assignments!: pulumi.Output<types.outputs.AssignmentResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of the Pool: ephemeralDisk, azureDisk, or elasticsan.
     */
    public readonly poolType!: pulumi.Output<types.outputs.PoolTypeResponse>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * ReclaimPolicy defines what happens to the backend storage when StoragePool is deleted
     */
    public readonly reclaimPolicy!: pulumi.Output<string | undefined>;
    /**
     * Resources represent the resources the pool should have.
     */
    public readonly resources!: pulumi.Output<types.outputs.ResourcesResponse | undefined>;
    /**
     * The operational status of the resource
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.ResourceOperationalStatusResponse>;
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
     * List of availability zones that resources can be created in.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.poolType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["assignments"] = args ? args.assignments : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["poolType"] = args ? (args.poolType ? pulumi.output(args.poolType).apply(types.inputs.poolTypeArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["reclaimPolicy"] = args ? args.reclaimPolicy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resources"] = args ? (args.resources ? pulumi.output(args.resources).apply(types.inputs.resourcesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignments"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["poolType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["reclaimPolicy"] = undefined /*out*/;
            resourceInputs["resources"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerstorage/v20230701preview:Pool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * List of resources that should have access to the pool. Typically ARM references to AKS clusters or ACI Container Groups. For local and standard this must be a single reference. For ElasticSAN there can be many.
     */
    assignments?: pulumi.Input<pulumi.Input<types.inputs.AssignmentArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Pool Object
     */
    poolName?: pulumi.Input<string>;
    /**
     * Type of the Pool: ephemeralDisk, azureDisk, or elasticsan.
     */
    poolType: pulumi.Input<types.inputs.PoolTypeArgs>;
    /**
     * ReclaimPolicy defines what happens to the backend storage when StoragePool is deleted
     */
    reclaimPolicy?: pulumi.Input<string | types.enums.ReclaimPolicy>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resources represent the resources the pool should have.
     */
    resources?: pulumi.Input<types.inputs.ResourcesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of availability zones that resources can be created in.
     */
    zones?: pulumi.Input<pulumi.Input<string | types.enums.Zone>[]>;
}