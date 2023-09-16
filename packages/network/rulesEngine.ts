import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.
 * Azure REST API version: 2021-06-01. Prior API version in Azure Native 1.x: 2020-05-01
 */
export class RulesEngine extends pulumi.CustomResource {
    /**
     * Get an existing RulesEngine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RulesEngine {
        return new RulesEngine(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:RulesEngine';

    /**
     * Returns true if the given object is an instance of RulesEngine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RulesEngine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RulesEngine.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource status.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    public readonly rules!: pulumi.Output<types.outputs.network.RulesEngineRuleResponse[] | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RulesEngine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RulesEngineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.frontDoorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontDoorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["frontDoorName"] = args ? args.frontDoorName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["rulesEngineName"] = args ? args.rulesEngineName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200101:RulesEngine" }, { type: "azure-native:network/v20200401:RulesEngine" }, { type: "azure-native:network/v20200501:RulesEngine" }, { type: "azure-native:network/v20210601:RulesEngine" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RulesEngine.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RulesEngine resource.
 */
export interface RulesEngineArgs {
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of rules that define a particular Rules Engine Configuration.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.network.RulesEngineRuleArgs>[]>;
    /**
     * Name of the Rules Engine which is unique within the Front Door.
     */
    rulesEngineName?: pulumi.Input<string>;
}
