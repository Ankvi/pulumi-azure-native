import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration account RosettaNet process configuration.
 *
 * Uses Azure REST API version 2016-06-01. In version 2.x of the Azure Native provider, it used API version 2016-06-01.
 */
export class RosettaNetProcessConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing RosettaNetProcessConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RosettaNetProcessConfiguration {
        return new RosettaNetProcessConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:RosettaNetProcessConfiguration';

    /**
     * Returns true if the given object is an instance of RosettaNetProcessConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RosettaNetProcessConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RosettaNetProcessConfiguration.__pulumiType;
    }

    /**
     * The RosettaNet process configuration activity settings.
     */
    public readonly activitySettings!: pulumi.Output<types.outputs.RosettaNetPipActivitySettingsResponse>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The changed time.
     */
    public /*out*/ readonly changedTime!: pulumi.Output<string>;
    /**
     * The created time.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The RosettaNet initiator role settings.
     */
    public readonly initiatorRoleSettings!: pulumi.Output<types.outputs.RosettaNetPipRoleSettingsResponse>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The metadata.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process code.
     */
    public readonly processCode!: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process name.
     */
    public readonly processName!: pulumi.Output<string>;
    /**
     * The integration account RosettaNet process version.
     */
    public readonly processVersion!: pulumi.Output<string>;
    /**
     * The RosettaNet responder role settings.
     */
    public readonly responderRoleSettings!: pulumi.Output<types.outputs.RosettaNetPipRoleSettingsResponse>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RosettaNetProcessConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RosettaNetProcessConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.activitySettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activitySettings'");
            }
            if ((!args || args.initiatorRoleSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'initiatorRoleSettings'");
            }
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.processCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processCode'");
            }
            if ((!args || args.processName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processName'");
            }
            if ((!args || args.processVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'processVersion'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.responderRoleSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'responderRoleSettings'");
            }
            resourceInputs["activitySettings"] = args ? args.activitySettings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["initiatorRoleSettings"] = args ? args.initiatorRoleSettings : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["processCode"] = args ? args.processCode : undefined;
            resourceInputs["processName"] = args ? args.processName : undefined;
            resourceInputs["processVersion"] = args ? args.processVersion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["responderRoleSettings"] = args ? args.responderRoleSettings : undefined;
            resourceInputs["rosettaNetProcessConfigurationName"] = args ? args.rosettaNetProcessConfigurationName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activitySettings"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["changedTime"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["initiatorRoleSettings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["processCode"] = undefined /*out*/;
            resourceInputs["processName"] = undefined /*out*/;
            resourceInputs["processVersion"] = undefined /*out*/;
            resourceInputs["responderRoleSettings"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20160601:RosettaNetProcessConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RosettaNetProcessConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RosettaNetProcessConfiguration resource.
 */
export interface RosettaNetProcessConfigurationArgs {
    /**
     * The RosettaNet process configuration activity settings.
     */
    activitySettings: pulumi.Input<types.inputs.RosettaNetPipActivitySettingsArgs>;
    /**
     * The integration account RosettaNet ProcessConfiguration properties.
     */
    description?: pulumi.Input<string>;
    /**
     * The RosettaNet initiator role settings.
     */
    initiatorRoleSettings: pulumi.Input<types.inputs.RosettaNetPipRoleSettingsArgs>;
    /**
     * The integration account name.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The integration account RosettaNet process code.
     */
    processCode: pulumi.Input<string>;
    /**
     * The integration account RosettaNet process name.
     */
    processName: pulumi.Input<string>;
    /**
     * The integration account RosettaNet process version.
     */
    processVersion: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The RosettaNet responder role settings.
     */
    responderRoleSettings: pulumi.Input<types.inputs.RosettaNetPipRoleSettingsArgs>;
    /**
     * The integration account RosettaNet ProcessConfiguration name.
     */
    rosettaNetProcessConfigurationName?: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}