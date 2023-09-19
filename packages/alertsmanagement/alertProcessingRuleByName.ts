import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Alert processing rule object containing target scopes, conditions and scheduling logic.
 * Azure REST API version: 2023-05-01-preview.
 */
export class AlertProcessingRuleByName extends pulumi.CustomResource {
    /**
     * Get an existing AlertProcessingRuleByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertProcessingRuleByName {
        return new AlertProcessingRuleByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:alertsmanagement:AlertProcessingRuleByName';

    /**
     * Returns true if the given object is an instance of AlertProcessingRuleByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertProcessingRuleByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertProcessingRuleByName.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Alert processing rule properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.AlertProcessingRulePropertiesResponse>;
    /**
     * Alert processing rule system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AlertProcessingRuleByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertProcessingRuleByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["alertProcessingRuleName"] = args ? args.alertProcessingRuleName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.alertProcessingRulePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:alertsmanagement/v20181102privatepreview:AlertProcessingRuleByName" }, { type: "azure-native:alertsmanagement/v20190505preview:AlertProcessingRuleByName" }, { type: "azure-native:alertsmanagement/v20210808:AlertProcessingRuleByName" }, { type: "azure-native:alertsmanagement/v20210808preview:AlertProcessingRuleByName" }, { type: "azure-native:alertsmanagement/v20230501preview:AlertProcessingRuleByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AlertProcessingRuleByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AlertProcessingRuleByName resource.
 */
export interface AlertProcessingRuleByNameArgs {
    /**
     * The name of the alert processing rule that needs to be created/updated.
     */
    alertProcessingRuleName?: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Alert processing rule properties.
     */
    properties?: pulumi.Input<types.inputs.AlertProcessingRulePropertiesArgs>;
    /**
     * Resource group name where the resource is created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
