import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Collector policy resource.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 */
export class CollectorPolicy extends pulumi.CustomResource {
    /**
     * Get an existing CollectorPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CollectorPolicy {
        return new CollectorPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkfunction:CollectorPolicy';

    /**
     * Returns true if the given object is an instance of CollectorPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CollectorPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CollectorPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Emission policies.
     */
    public readonly emissionPolicies!: pulumi.Output<types.outputs.EmissionPoliciesPropertiesFormatResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Ingestion policies.
     */
    public readonly ingestionPolicy!: pulumi.Output<types.outputs.IngestionPolicyPropertiesFormatResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.TrackedResourceResponseSystemData>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CollectorPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CollectorPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azureTrafficCollectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureTrafficCollectorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["azureTrafficCollectorName"] = args ? args.azureTrafficCollectorName : undefined;
            resourceInputs["collectorPolicyName"] = args ? args.collectorPolicyName : undefined;
            resourceInputs["emissionPolicies"] = args ? args.emissionPolicies : undefined;
            resourceInputs["ingestionPolicy"] = args ? args.ingestionPolicy : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["emissionPolicies"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ingestionPolicy"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkfunction/v20210901preview:CollectorPolicy" }, { type: "azure-native:networkfunction/v20220501:CollectorPolicy" }, { type: "azure-native:networkfunction/v20220801:CollectorPolicy" }, { type: "azure-native:networkfunction/v20221101:CollectorPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CollectorPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CollectorPolicy resource.
 */
export interface CollectorPolicyArgs {
    /**
     * Azure Traffic Collector name
     */
    azureTrafficCollectorName: pulumi.Input<string>;
    /**
     * Collector Policy Name
     */
    collectorPolicyName?: pulumi.Input<string>;
    /**
     * Emission policies.
     */
    emissionPolicies?: pulumi.Input<pulumi.Input<types.inputs.EmissionPoliciesPropertiesFormatArgs>[]>;
    /**
     * Ingestion policies.
     */
    ingestionPolicy?: pulumi.Input<types.inputs.IngestionPolicyPropertiesFormatArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}