import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The ID of the policy definition version.
 *
 * Uses Azure REST API version 2025-01-01. In version 2.x of the Azure Native provider, it used API version 2023-04-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PolicyDefinitionVersionAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PolicyDefinitionVersionAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyDefinitionVersionAtManagementGroup {
        return new PolicyDefinitionVersionAtManagementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicyDefinitionVersionAtManagementGroup';

    /**
     * Returns true if the given object is an instance of PolicyDefinitionVersionAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyDefinitionVersionAtManagementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyDefinitionVersionAtManagementGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The policy definition description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy definition.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * The name of the policy definition version.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterDefinitionsValueResponse} | undefined>;
    /**
     * The policy rule.
     */
    public readonly policyRule!: pulumi.Output<any | undefined>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    public readonly policyType!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource (Microsoft.Authorization/policyDefinitions/versions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The policy definition version in #.#.# format.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a PolicyDefinitionVersionAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyDefinitionVersionAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupName'");
            }
            if ((!args || args.policyDefinitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDefinitionName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["managementGroupName"] = args ? args.managementGroupName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mode"] = (args ? args.mode : undefined) ?? "Indexed";
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionName"] = args ? args.policyDefinitionName : undefined;
            resourceInputs["policyDefinitionVersion"] = args ? args.policyDefinitionVersion : undefined;
            resourceInputs["policyRule"] = args ? args.policyRule : undefined;
            resourceInputs["policyType"] = args ? args.policyType : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["mode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policyRule"] = undefined /*out*/;
            resourceInputs["policyType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20230401:PolicyDefinitionVersionAtManagementGroup" }, { type: "azure-native:authorization/v20240501:PolicyDefinitionVersionAtManagementGroup" }, { type: "azure-native:authorization/v20250101:PolicyDefinitionVersionAtManagementGroup" }, { type: "azure-native:authorization/v20250301:PolicyDefinitionVersionAtManagementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyDefinitionVersionAtManagementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyDefinitionVersionAtManagementGroup resource.
 */
export interface PolicyDefinitionVersionAtManagementGroupArgs {
    /**
     * The policy definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the policy definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the management group. The name is case insensitive.
     */
    managementGroupName: pulumi.Input<string>;
    /**
     * The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
     */
    mode?: pulumi.Input<string>;
    /**
     * The parameter definitions for parameters used in the policy rule. The keys are the parameter names.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterDefinitionsValueArgs>}>;
    /**
     * The name of the policy definition.
     */
    policyDefinitionName: pulumi.Input<string>;
    /**
     * The policy definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion?: pulumi.Input<string>;
    /**
     * The policy rule.
     */
    policyRule?: any;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: pulumi.Input<string | types.enums.PolicyType>;
    /**
     * The policy definition version in #.#.# format.
     */
    version?: pulumi.Input<string>;
}