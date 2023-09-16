import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Represents an instance of a DFP instance resource.
 */
export class InstanceDetails extends pulumi.CustomResource {
    /**
     * Get an existing InstanceDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InstanceDetails {
        return new InstanceDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dynamics365fraudprotection/v20210201preview:InstanceDetails';

    /**
     * Returns true if the given object is an instance of InstanceDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceDetails.__pulumiType;
    }

    /**
     * A collection of DFP instance administrators
     */
    public readonly administration!: pulumi.Output<types.outputs.dynamics365fraudprotection.v20210201preview.DFPInstanceAdministratorsResponse | undefined>;
    /**
     * Location of the DFP resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of DFP resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.dynamics365fraudprotection.v20210201preview.SystemDataResponse>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a InstanceDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administration"] = args ? args.administration : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dynamics365fraudprotection:InstanceDetails" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InstanceDetails.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InstanceDetails resource.
 */
export interface InstanceDetailsArgs {
    /**
     * A collection of DFP instance administrators
     */
    administration?: pulumi.Input<types.inputs.dynamics365fraudprotection.v20210201preview.DFPInstanceAdministratorsArgs>;
    /**
     * The name of the DFP instances. It must be a minimum of 3 characters, and a maximum of 63.
     */
    instanceName?: pulumi.Input<string>;
    /**
     * Location of the DFP resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given DFP instance is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
