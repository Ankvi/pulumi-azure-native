import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the properties of an Experiment
 *
 * Uses Azure REST API version 2019-11-01.
 */
export class Experiment extends pulumi.CustomResource {
    /**
     * Get an existing Experiment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Experiment {
        return new Experiment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:frontdoor:Experiment';

    /**
     * Returns true if the given object is an instance of Experiment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Experiment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Experiment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The description of the details or intents of the Experiment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The state of the Experiment
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * The endpoint A of an experiment
     */
    public readonly endpointA!: pulumi.Output<types.outputs.EndpointResponse | undefined>;
    /**
     * The endpoint B of an experiment
     */
    public readonly endpointB!: pulumi.Output<types.outputs.EndpointResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource status.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The uri to the Script used in the Experiment
     */
    public /*out*/ readonly scriptFileUri!: pulumi.Output<string>;
    /**
     * The description of Experiment status from the server side
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Experiment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExperimentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabledState"] = args ? args.enabledState : undefined;
            resourceInputs["endpointA"] = args ? args.endpointA : undefined;
            resourceInputs["endpointB"] = args ? args.endpointB : undefined;
            resourceInputs["experimentName"] = args ? args.experimentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["scriptFileUri"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabledState"] = undefined /*out*/;
            resourceInputs["endpointA"] = undefined /*out*/;
            resourceInputs["endpointB"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["scriptFileUri"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:frontdoor/v20191101:Experiment" }, { type: "azure-native:network/v20191101:Experiment" }, { type: "azure-native:network:Experiment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Experiment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Experiment resource.
 */
export interface ExperimentArgs {
    /**
     * The description of the details or intents of the Experiment
     */
    description?: pulumi.Input<string>;
    /**
     * The state of the Experiment
     */
    enabledState?: pulumi.Input<string | types.enums.State>;
    /**
     * The endpoint A of an experiment
     */
    endpointA?: pulumi.Input<types.inputs.EndpointArgs>;
    /**
     * The endpoint B of an experiment
     */
    endpointB?: pulumi.Input<types.inputs.EndpointArgs>;
    /**
     * The Experiment identifier associated with the Experiment
     */
    experimentName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}