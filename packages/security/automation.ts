import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The security automation resource.
 *
 * Uses Azure REST API version 2023-12-01-preview. In version 2.x of the Azure Native provider, it used API version 2019-01-01-preview.
 *
 * Other available API versions: 2019-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Automation extends pulumi.CustomResource {
    /**
     * Get an existing Automation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Automation {
        return new Automation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:Automation';

    /**
     * Returns true if the given object is an instance of Automation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Automation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Automation.__pulumiType;
    }

    /**
     * A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
     */
    public readonly actions!: pulumi.Output<(types.outputs.AutomationActionEventHubResponse | types.outputs.AutomationActionLogicAppResponse | types.outputs.AutomationActionWorkspaceResponse)[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The security automation description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the security automation is enabled.
     */
    public readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of the resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
     */
    public readonly scopes!: pulumi.Output<types.outputs.AutomationScopeResponse[] | undefined>;
    /**
     * A collection of the source event types which evaluate the security automation set of rules.
     */
    public readonly sources!: pulumi.Output<types.outputs.AutomationSourceResponse[] | undefined>;
    /**
     * A list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Automation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["automationName"] = args ? args.automationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20190101preview:Automation" }, { type: "azure-native:security/v20231201preview:Automation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Automation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Automation resource.
 */
export interface AutomationArgs {
    /**
     * A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true.
     */
    actions?: pulumi.Input<pulumi.Input<types.inputs.AutomationActionEventHubArgs | types.inputs.AutomationActionLogicAppArgs | types.inputs.AutomationActionWorkspaceArgs>[]>;
    /**
     * The security automation name.
     */
    automationName?: pulumi.Input<string>;
    /**
     * The security automation description.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the security automation is enabled.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * Kind of the resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Location where the resource is stored
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A collection of scopes on which the security automations logic is applied. Supported scopes are the subscription itself or a resource group under that subscription. The automation will only apply on defined scopes.
     */
    scopes?: pulumi.Input<pulumi.Input<types.inputs.AutomationScopeArgs>[]>;
    /**
     * A collection of the source event types which evaluate the security automation set of rules.
     */
    sources?: pulumi.Input<pulumi.Input<types.inputs.AutomationSourceArgs>[]>;
    /**
     * A list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}