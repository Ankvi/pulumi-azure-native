import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Fabric Capacity resource
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2023-11-01.
 *
 * Other available API versions: 2025-01-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native fabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FabricCapacity extends pulumi.CustomResource {
    /**
     * Get an existing FabricCapacity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FabricCapacity {
        return new FabricCapacity(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:fabric:FabricCapacity';

    /**
     * Returns true if the given object is an instance of FabricCapacity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FabricCapacity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FabricCapacity.__pulumiType;
    }

    /**
     * The capacity administration
     */
    public readonly administration!: pulumi.Output<types.outputs.CapacityAdministrationResponse>;
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
     * The current deployment state of Microsoft Fabric resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.RpSkuResponse>;
    /**
     * The current state of Microsoft Fabric resource. The state is to indicate more states outside of resource provisioning.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
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
     * Create a FabricCapacity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricCapacityArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.administration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'administration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["administration"] = args ? args.administration : undefined;
            resourceInputs["capacityName"] = args ? args.capacityName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:fabric/v20231101:FabricCapacity" }, { type: "azure-native:fabric/v20250115preview:FabricCapacity" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FabricCapacity.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FabricCapacity resource.
 */
export interface FabricCapacityArgs {
    /**
     * The capacity administration
     */
    administration: pulumi.Input<types.inputs.CapacityAdministrationArgs>;
    /**
     * The name of the Microsoft Fabric capacity. It must be a minimum of 3 characters, and a maximum of 63.
     */
    capacityName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU details
     */
    sku: pulumi.Input<types.inputs.RpSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}