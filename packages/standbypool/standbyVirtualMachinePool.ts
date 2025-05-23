import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A StandbyVirtualMachinePoolResource.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2023-12-01-preview.
 *
 * Other available API versions: 2023-12-01-preview, 2024-03-01-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native standbypool [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StandbyVirtualMachinePool extends pulumi.CustomResource {
    /**
     * Get an existing StandbyVirtualMachinePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StandbyVirtualMachinePool {
        return new StandbyVirtualMachinePool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:standbypool:StandbyVirtualMachinePool';

    /**
     * Returns true if the given object is an instance of StandbyVirtualMachinePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StandbyVirtualMachinePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StandbyVirtualMachinePool.__pulumiType;
    }

    /**
     * Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to.
     */
    public readonly attachedVirtualMachineScaleSetId!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the elasticity profile of the standby virtual machine pools.
     */
    public readonly elasticityProfile!: pulumi.Output<types.outputs.StandbyVirtualMachinePoolElasticityProfileResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Specifies the desired state of virtual machines in the pool.
     */
    public readonly virtualMachineState!: pulumi.Output<string>;

    /**
     * Create a StandbyVirtualMachinePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StandbyVirtualMachinePoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachineState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineState'");
            }
            resourceInputs["attachedVirtualMachineScaleSetId"] = args ? args.attachedVirtualMachineScaleSetId : undefined;
            resourceInputs["elasticityProfile"] = args ? args.elasticityProfile : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["standbyVirtualMachinePoolName"] = args ? args.standbyVirtualMachinePoolName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualMachineState"] = args ? args.virtualMachineState : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attachedVirtualMachineScaleSetId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["elasticityProfile"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachineState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:standbypool/v20231201preview:StandbyVirtualMachinePool" }, { type: "azure-native:standbypool/v20240301:StandbyVirtualMachinePool" }, { type: "azure-native:standbypool/v20240301preview:StandbyVirtualMachinePool" }, { type: "azure-native:standbypool/v20250301:StandbyVirtualMachinePool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StandbyVirtualMachinePool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StandbyVirtualMachinePool resource.
 */
export interface StandbyVirtualMachinePoolArgs {
    /**
     * Specifies the fully qualified resource ID of a virtual machine scale set the pool is attached to.
     */
    attachedVirtualMachineScaleSetId?: pulumi.Input<string>;
    /**
     * Specifies the elasticity profile of the standby virtual machine pools.
     */
    elasticityProfile?: pulumi.Input<types.inputs.StandbyVirtualMachinePoolElasticityProfileArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the standby virtual machine pool
     */
    standbyVirtualMachinePoolName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the desired state of virtual machines in the pool.
     */
    virtualMachineState: pulumi.Input<string | types.enums.VirtualMachineState>;
}