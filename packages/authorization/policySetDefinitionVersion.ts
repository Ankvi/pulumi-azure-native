import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The policy set definition version.
 *
 * Uses Azure REST API version 2025-01-01. In version 2.x of the Azure Native provider, it used API version 2023-04-01.
 *
 * Other available API versions: 2023-04-01, 2024-05-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native authorization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PolicySetDefinitionVersion extends pulumi.CustomResource {
    /**
     * Get an existing PolicySetDefinitionVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicySetDefinitionVersion {
        return new PolicySetDefinitionVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicySetDefinitionVersion';

    /**
     * Returns true if the given object is an instance of PolicySetDefinitionVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicySetDefinitionVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicySetDefinitionVersion.__pulumiType;
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
     * The name of the policy set definition version.
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
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    public readonly policyType!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource (Microsoft.Authorization/policySetDefinitions/versions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The policy set definition version in #.#.# format.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a PolicySetDefinitionVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicySetDefinitionVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.policyDefinitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDefinitions'");
            }
            if ((!args || args.policySetDefinitionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policySetDefinitionName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionGroups"] = args ? args.policyDefinitionGroups : undefined;
            resourceInputs["policyDefinitionVersion"] = args ? args.policyDefinitionVersion : undefined;
            resourceInputs["policyDefinitions"] = args ? args.policyDefinitions : undefined;
            resourceInputs["policySetDefinitionName"] = args ? args.policySetDefinitionName : undefined;
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
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policyDefinitionGroups"] = undefined /*out*/;
            resourceInputs["policyDefinitions"] = undefined /*out*/;
            resourceInputs["policyType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20230401:PolicySetDefinitionVersion" }, { type: "azure-native:authorization/v20240501:PolicySetDefinitionVersion" }, { type: "azure-native:authorization/v20250101:PolicySetDefinitionVersion" }, { type: "azure-native:authorization/v20250301:PolicySetDefinitionVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicySetDefinitionVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicySetDefinitionVersion resource.
 */
export interface PolicySetDefinitionVersionArgs {
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
     * The policy set definition version.  The format is x.y.z where x is the major version number, y is the minor version number, and z is the patch number
     */
    policyDefinitionVersion?: pulumi.Input<string>;
    /**
     * An array of policy definition references.
     */
    policyDefinitions: pulumi.Input<pulumi.Input<types.inputs.PolicyDefinitionReferenceArgs>[]>;
    /**
     * The name of the policy set definition.
     */
    policySetDefinitionName: pulumi.Input<string>;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: pulumi.Input<string | types.enums.PolicyType>;
    /**
     * The policy set definition version in #.#.# format.
     */
    version?: pulumi.Input<string>;
}