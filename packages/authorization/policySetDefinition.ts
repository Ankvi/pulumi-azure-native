import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The policy set definition.
 *
 * Uses Azure REST API version 2025-01-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2020-09-01, 2021-06-01, 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PolicySetDefinition extends pulumi.CustomResource {
    /**
     * Get an existing PolicySetDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicySetDefinition {
        return new PolicySetDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicySetDefinition';

    /**
     * Returns true if the given object is an instance of PolicySetDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicySetDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicySetDefinition.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The policy set definition description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the policy set definition.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * The name of the policy set definition.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterDefinitionsValueResponse} | undefined>;
    /**
     * The metadata describing groups of policy definition references within the policy set definition.
     */
    public readonly policyDefinitionGroups!: pulumi.Output<types.outputs.PolicyDefinitionGroupResponse[] | undefined>;
    /**
     * An array of policy definition references.
     */
    public readonly policyDefinitions!: pulumi.Output<types.outputs.PolicyDefinitionReferenceResponse[]>;
    /**
     * The type of policy set definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    public readonly policyType!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The policy set definition version in #.#.# format.
     */
    public readonly version!: pulumi.Output<string | undefined>;
    /**
     * A list of available versions for this policy set definition.
     */
    public readonly versions!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PolicySetDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicySetDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.policyDefinitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDefinitions'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionGroups"] = args ? args.policyDefinitionGroups : undefined;
            resourceInputs["policyDefinitions"] = args ? args.policyDefinitions : undefined;
            resourceInputs["policySetDefinitionName"] = args ? args.policySetDefinitionName : undefined;
            resourceInputs["policyType"] = args ? args.policyType : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["versions"] = args ? args.versions : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policyDefinitionGroups"] = undefined /*out*/;
            resourceInputs["policyDefinitions"] = undefined /*out*/;
            resourceInputs["policyType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
            resourceInputs["versions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20170601preview:PolicySetDefinition" }, { type: "azure-native:authorization/v20180301:PolicySetDefinition" }, { type: "azure-native:authorization/v20180501:PolicySetDefinition" }, { type: "azure-native:authorization/v20190101:PolicySetDefinition" }, { type: "azure-native:authorization/v20190601:PolicySetDefinition" }, { type: "azure-native:authorization/v20190901:PolicySetDefinition" }, { type: "azure-native:authorization/v20200301:PolicySetDefinition" }, { type: "azure-native:authorization/v20200901:PolicySetDefinition" }, { type: "azure-native:authorization/v20210601:PolicySetDefinition" }, { type: "azure-native:authorization/v20230401:PolicySetDefinition" }, { type: "azure-native:authorization/v20240501:PolicySetDefinition" }, { type: "azure-native:authorization/v20250101:PolicySetDefinition" }, { type: "azure-native:authorization/v20250301:PolicySetDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicySetDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicySetDefinition resource.
 */
export interface PolicySetDefinitionArgs {
    /**
     * The policy set definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the policy set definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The policy set definition parameters that can be used in policy definition references.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterDefinitionsValueArgs>}>;
    /**
     * The metadata describing groups of policy definition references within the policy set definition.
     */
    policyDefinitionGroups?: pulumi.Input<pulumi.Input<types.inputs.PolicyDefinitionGroupArgs>[]>;
    /**
     * An array of policy definition references.
     */
    policyDefinitions: pulumi.Input<pulumi.Input<types.inputs.PolicyDefinitionReferenceArgs>[]>;
    /**
     * The name of the policy set definition to create.
     */
    policySetDefinitionName?: pulumi.Input<string>;
    /**
     * The type of policy set definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: pulumi.Input<string | types.enums.PolicyType>;
    /**
     * The policy set definition version in #.#.# format.
     */
    version?: pulumi.Input<string>;
    /**
     * A list of available versions for this policy set definition.
     */
    versions?: pulumi.Input<pulumi.Input<string>[]>;
}