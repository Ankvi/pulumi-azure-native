import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Standard on a resource
 *
 * Uses Azure REST API version 2024-08-01. In version 2.x of the Azure Native provider, it used API version 2024-08-01.
 */
export class SecurityStandard extends pulumi.CustomResource {
    /**
     * Get an existing SecurityStandard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SecurityStandard {
        return new SecurityStandard(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:SecurityStandard';

    /**
     * Returns true if the given object is an instance of SecurityStandard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityStandard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityStandard.__pulumiType;
    }

    /**
     * List of assessment keys to apply to standard scope.
     */
    public readonly assessments!: pulumi.Output<types.outputs.PartialAssessmentPropertiesResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of all standard supported clouds.
     */
    public readonly cloudProviders!: pulumi.Output<string[] | undefined>;
    /**
     * Description of the standard
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name of the standard, equivalent to the standardId
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The security standard metadata.
     */
    public /*out*/ readonly metadata!: pulumi.Output<types.outputs.StandardMetadataResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The policy set definition id associated with the standard.
     */
    public readonly policySetDefinitionId!: pulumi.Output<string | undefined>;
    /**
     * Standard type (Custom or Default or Compliance only currently)
     */
    public /*out*/ readonly standardType!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SecurityStandard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityStandardArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["assessments"] = args ? args.assessments : undefined;
            resourceInputs["cloudProviders"] = args ? args.cloudProviders : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["policySetDefinitionId"] = args ? args.policySetDefinitionId : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["standardId"] = args ? args.standardId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["standardType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assessments"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cloudProviders"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policySetDefinitionId"] = undefined /*out*/;
            resourceInputs["standardType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20240801:SecurityStandard" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SecurityStandard.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SecurityStandard resource.
 */
export interface SecurityStandardArgs {
    /**
     * List of assessment keys to apply to standard scope.
     */
    assessments?: pulumi.Input<pulumi.Input<types.inputs.PartialAssessmentPropertiesArgs>[]>;
    /**
     * List of all standard supported clouds.
     */
    cloudProviders?: pulumi.Input<pulumi.Input<string | types.enums.StandardSupportedCloud>[]>;
    /**
     * Description of the standard
     */
    description?: pulumi.Input<string>;
    /**
     * Display name of the standard, equivalent to the standardId
     */
    displayName?: pulumi.Input<string>;
    /**
     * The policy set definition id associated with the standard.
     */
    policySetDefinitionId?: pulumi.Input<string>;
    /**
     * The scope of the security standard. Valid scopes are: management group (format: 'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: 'subscriptions/{subscriptionId}'), or security connector (format: 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
     */
    scope: pulumi.Input<string>;
    /**
     * The Security Standard key - unique key for the standard type
     */
    standardId?: pulumi.Input<string>;
}