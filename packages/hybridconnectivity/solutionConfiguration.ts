import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Solution Configuration
 *
 * Uses Azure REST API version 2024-12-01. In version 2.x of the Azure Native provider, it used API version 2024-12-01.
 */
export class SolutionConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SolutionConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SolutionConfiguration {
        return new SolutionConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridconnectivity:SolutionConfiguration';

    /**
     * Returns true if the given object is an instance of SolutionConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SolutionConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SolutionConfiguration.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The last time resources were inventoried
     */
    public /*out*/ readonly lastSyncTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Solution settings
     */
    public readonly solutionSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the solution
     */
    public readonly solutionType!: pulumi.Output<string>;
    /**
     * The status of solution configurations
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The detailed message of status details
     */
    public /*out*/ readonly statusDetails!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SolutionConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SolutionConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            if ((!args || args.solutionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'solutionType'");
            }
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["solutionConfiguration"] = args ? args.solutionConfiguration : undefined;
            resourceInputs["solutionSettings"] = args ? args.solutionSettings : undefined;
            resourceInputs["solutionType"] = args ? args.solutionType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastSyncTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["solutionSettings"] = undefined /*out*/;
            resourceInputs["solutionType"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridconnectivity/v20241201:SolutionConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SolutionConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SolutionConfiguration resource.
 */
export interface SolutionConfigurationArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * Represent Solution Configuration Resource.
     */
    solutionConfiguration?: pulumi.Input<string>;
    /**
     * Solution settings
     */
    solutionSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of the solution
     */
    solutionType: pulumi.Input<string>;
}