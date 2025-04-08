import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The policy definition.
 *
 * Uses Azure REST API version 2021-06-01. In version 1.x of the Azure Native provider, it used API version 2020-09-01.
 *
 * Other available API versions: 2018-05-01, 2019-06-01, 2023-04-01, 2024-05-01, 2025-01-01, 2025-03-01.
 */
export class PolicyDefinitionAtManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PolicyDefinitionAtManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyDefinitionAtManagementGroup {
        return new PolicyDefinitionAtManagementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PolicyDefinitionAtManagementGroup';

    /**
     * Returns true if the given object is an instance of PolicyDefinitionAtManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyDefinitionAtManagementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyDefinitionAtManagementGroup.__pulumiType;
    }

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
     * The name of the policy definition.
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
     * The type of the resource (Microsoft.Authorization/policyDefinitions).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicyDefinitionAtManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyDefinitionAtManagementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["mode"] = (args ? args.mode : undefined) ?? "Indexed";
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionName"] = args ? args.policyDefinitionName : undefined;
            resourceInputs["policyRule"] = args ? args.policyRule : undefined;
            resourceInputs["policyType"] = args ? args.policyType : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20161201:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20180301:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20180501:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20190101:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20190601:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20190901:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20200301:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20200901:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20210601:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20230401:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20240501:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20250101:PolicyDefinitionAtManagementGroup" }, { type: "azure-native:authorization/v20250301:PolicyDefinitionAtManagementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyDefinitionAtManagementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyDefinitionAtManagementGroup resource.
 */
export interface PolicyDefinitionAtManagementGroupArgs {
    /**
     * The policy definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the policy definition.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The ID of the management group.
     */
    managementGroupId: pulumi.Input<string>;
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
     * The name of the policy definition to create.
     */
    policyDefinitionName?: pulumi.Input<string>;
    /**
     * The policy rule.
     */
    policyRule?: any;
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     */
    policyType?: pulumi.Input<string | types.enums.PolicyType>;
}