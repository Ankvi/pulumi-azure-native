import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Define the virtualMachineInstance.
 *
 * Uses Azure REST API version 2023-12-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualMachineInstance extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineInstance {
        return new VirtualMachineInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:VirtualMachineInstance';

    /**
     * Returns true if the given object is an instance of VirtualMachineInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineInstance.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * Hardware properties.
     */
    public readonly hardwareProfile!: pulumi.Output<types.outputs.HardwareProfileResponse | undefined>;
    /**
     * Gets the infrastructure profile.
     */
    public readonly infrastructureProfile!: pulumi.Output<types.outputs.InfrastructureProfileResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network properties.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * OS properties.
     */
    public readonly osProfile!: pulumi.Output<types.outputs.OsProfileForVMInstanceResponse | undefined>;
    /**
     * Placement properties.
     */
    public readonly placementProfile!: pulumi.Output<types.outputs.PlacementProfileResponse | undefined>;
    /**
     * Gets the power state of the virtual machine.
     */
    public /*out*/ readonly powerState!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets a unique identifier for the vm resource.
     */
    public /*out*/ readonly resourceUid!: pulumi.Output<string>;
    /**
     * Gets the security profile.
     */
    public readonly securityProfile!: pulumi.Output<types.outputs.SecurityProfileResponse | undefined>;
    /**
     * The resource status information.
     */
    public /*out*/ readonly statuses!: pulumi.Output<types.outputs.ResourceStatusResponse[]>;
    /**
     * Storage properties.
     */
    public readonly storageProfile!: pulumi.Output<types.outputs.StorageProfileResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualMachineInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["hardwareProfile"] = args ? args.hardwareProfile : undefined;
            resourceInputs["infrastructureProfile"] = args ? args.infrastructureProfile : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["osProfile"] = args ? args.osProfile : undefined;
            resourceInputs["placementProfile"] = args ? args.placementProfile : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["securityProfile"] = args ? args.securityProfile : undefined;
            resourceInputs["storageProfile"] = args ? args.storageProfile : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hardwareProfile"] = undefined /*out*/;
            resourceInputs["infrastructureProfile"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["osProfile"] = undefined /*out*/;
            resourceInputs["placementProfile"] = undefined /*out*/;
            resourceInputs["powerState"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["securityProfile"] = undefined /*out*/;
            resourceInputs["statuses"] = undefined /*out*/;
            resourceInputs["storageProfile"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20230301preview:VirtualMachineInstance" }, { type: "azure-native:connectedvmwarevsphere/v20231001:VirtualMachineInstance" }, { type: "azure-native:connectedvmwarevsphere/v20231201:VirtualMachineInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineInstance resource.
 */
export interface VirtualMachineInstanceArgs {
    /**
     * Gets or sets the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Hardware properties.
     */
    hardwareProfile?: pulumi.Input<types.inputs.HardwareProfileArgs>;
    /**
     * Gets the infrastructure profile.
     */
    infrastructureProfile?: pulumi.Input<types.inputs.InfrastructureProfileArgs>;
    /**
     * Network properties.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * OS properties.
     */
    osProfile?: pulumi.Input<types.inputs.OsProfileForVMInstanceArgs>;
    /**
     * Placement properties.
     */
    placementProfile?: pulumi.Input<types.inputs.PlacementProfileArgs>;
    /**
     * The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Gets the security profile.
     */
    securityProfile?: pulumi.Input<types.inputs.SecurityProfileArgs>;
    /**
     * Storage properties.
     */
    storageProfile?: pulumi.Input<types.inputs.StorageProfileArgs>;
}