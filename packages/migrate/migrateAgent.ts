import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MigrateAgent model.
 *
 * Uses Azure REST API version 2022-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-05-01-preview.
 */
export class MigrateAgent extends pulumi.CustomResource {
    /**
     * Get an existing MigrateAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MigrateAgent {
        return new MigrateAgent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:MigrateAgent';

    /**
     * Returns true if the given object is an instance of MigrateAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MigrateAgent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MigrateAgent.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * MigrateAgent model properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.MigrateAgentModelPropertiesResponse>;
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.MigrateAgentModelResponseSystemData>;
    /**
     * Gets or sets the resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MigrateAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MigrateAgentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.modernizeProjectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modernizeProjectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["agentName"] = args ? args.agentName : undefined;
            resourceInputs["modernizeProjectName"] = args ? args.modernizeProjectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20220501preview:MigrateAgent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MigrateAgent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MigrateAgent resource.
 */
export interface MigrateAgentArgs {
    /**
     * MigrateAgent name.
     */
    agentName?: pulumi.Input<string>;
    /**
     * ModernizeProject name.
     */
    modernizeProjectName: pulumi.Input<string>;
    /**
     * MigrateAgent model properties.
     */
    properties?: pulumi.Input<types.inputs.MigrateAgentModelPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Subscription Id in which project was created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Gets or sets the resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}