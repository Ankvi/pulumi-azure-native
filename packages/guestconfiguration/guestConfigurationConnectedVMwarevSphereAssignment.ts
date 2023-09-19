import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Guest configuration assignment is an association between a machine and guest configuration.
 * Azure REST API version: 2022-01-25. Prior API version in Azure Native 1.x: 2020-06-25
 */
export class GuestConfigurationConnectedVMwarevSphereAssignment extends pulumi.CustomResource {
    /**
     * Get an existing GuestConfigurationConnectedVMwarevSphereAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GuestConfigurationConnectedVMwarevSphereAssignment {
        return new GuestConfigurationConnectedVMwarevSphereAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:guestconfiguration:GuestConfigurationConnectedVMwarevSphereAssignment';

    /**
     * Returns true if the given object is an instance of GuestConfigurationConnectedVMwarevSphereAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GuestConfigurationConnectedVMwarevSphereAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GuestConfigurationConnectedVMwarevSphereAssignment.__pulumiType;
    }

    /**
     * Region where the VM is located.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the guest configuration assignment.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Properties of the Guest configuration assignment.
     */
    public readonly properties!: pulumi.Output<types.outputs.GuestConfigurationAssignmentPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GuestConfigurationConnectedVMwarevSphereAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GuestConfigurationConnectedVMwarevSphereAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmName'");
            }
            resourceInputs["guestConfigurationAssignmentName"] = args ? args.guestConfigurationAssignmentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vmName"] = args ? args.vmName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:guestconfiguration/v20200625:GuestConfigurationConnectedVMwarevSphereAssignment" }, { type: "azure-native:guestconfiguration/v20220125:GuestConfigurationConnectedVMwarevSphereAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GuestConfigurationConnectedVMwarevSphereAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GuestConfigurationConnectedVMwarevSphereAssignment resource.
 */
export interface GuestConfigurationConnectedVMwarevSphereAssignmentArgs {
    /**
     * Name of the guest configuration assignment.
     */
    guestConfigurationAssignmentName?: pulumi.Input<string>;
    /**
     * Region where the VM is located.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the guest configuration assignment.
     */
    name?: pulumi.Input<string>;
    /**
     * Properties of the Guest configuration assignment.
     */
    properties?: pulumi.Input<types.inputs.GuestConfigurationAssignmentPropertiesArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    vmName: pulumi.Input<string>;
}
