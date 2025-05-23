import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Trigger resource type.
 *
 * Uses Azure REST API version 2018-06-01. In version 2.x of the Azure Native provider, it used API version 2018-06-01.
 */
export class Trigger extends pulumi.CustomResource {
    /**
     * Get an existing Trigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Trigger {
        return new Trigger(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory:Trigger';

    /**
     * Returns true if the given object is an instance of Trigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Trigger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Trigger.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Etag identifies change in the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the trigger.
     */
    public readonly properties!: pulumi.Output<types.outputs.BlobEventsTriggerResponse | types.outputs.BlobTriggerResponse | types.outputs.ChainingTriggerResponse | types.outputs.CustomEventsTriggerResponse | types.outputs.MultiplePipelineTriggerResponse | types.outputs.RerunTumblingWindowTriggerResponse | types.outputs.ScheduleTriggerResponse | types.outputs.TumblingWindowTriggerResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Trigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.factoryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'factoryName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["factoryName"] = args ? args.factoryName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["triggerName"] = args ? args.triggerName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20170901preview:Trigger" }, { type: "azure-native:datafactory/v20180601:Trigger" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Trigger.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Trigger resource.
 */
export interface TriggerArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * Properties of the trigger.
     */
    properties: pulumi.Input<types.inputs.BlobEventsTriggerArgs | types.inputs.BlobTriggerArgs | types.inputs.ChainingTriggerArgs | types.inputs.CustomEventsTriggerArgs | types.inputs.MultiplePipelineTriggerArgs | types.inputs.RerunTumblingWindowTriggerArgs | types.inputs.ScheduleTriggerArgs | types.inputs.TumblingWindowTriggerArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The trigger name.
     */
    triggerName?: pulumi.Input<string>;
}