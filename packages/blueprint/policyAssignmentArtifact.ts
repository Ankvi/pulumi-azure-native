import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Blueprint artifact that applies a Policy assignment.
 * Azure REST API version: 2018-11-01-preview. Prior API version in Azure Native 1.x: 2018-11-01-preview
 */
export class PolicyAssignmentArtifact extends pulumi.CustomResource {
    /**
     * Get an existing PolicyAssignmentArtifact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PolicyAssignmentArtifact {
        return new PolicyAssignmentArtifact(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blueprint:PolicyAssignmentArtifact';

    /**
     * Returns true if the given object is an instance of PolicyAssignmentArtifact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyAssignmentArtifact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyAssignmentArtifact.__pulumiType;
    }

    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    public readonly dependsOn!: pulumi.Output<string[] | undefined>;
    /**
     * Multi-line explain this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * One-liner string explain this resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'policyAssignment'.
     */
    public readonly kind!: pulumi.Output<"policyAssignment">;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Parameter values for the policy definition.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterValueResponse}>;
    /**
     * Azure resource ID of the policy definition.
     */
    public readonly policyDefinitionId!: pulumi.Output<string>;
    /**
     * Name of the resource group placeholder to which the policy will be assigned.
     */
    public readonly resourceGroup!: pulumi.Output<string | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicyAssignmentArtifact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyAssignmentArtifactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.blueprintName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.parameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameters'");
            }
            if ((!args || args.policyDefinitionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDefinitionId'");
            }
            if ((!args || args.resourceScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceScope'");
            }
            resourceInputs["artifactName"] = args ? args.artifactName : undefined;
            resourceInputs["blueprintName"] = args ? args.blueprintName : undefined;
            resourceInputs["dependsOn"] = args ? args.dependsOn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = "policyAssignment";
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policyDefinitionId"] = args ? args.policyDefinitionId : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceScope"] = args ? args.resourceScope : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dependsOn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policyDefinitionId"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blueprint/v20181101preview:PolicyAssignmentArtifact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PolicyAssignmentArtifact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PolicyAssignmentArtifact resource.
 */
export interface PolicyAssignmentArtifactArgs {
    /**
     * Name of the blueprint artifact.
     */
    artifactName?: pulumi.Input<string>;
    /**
     * Name of the blueprint definition.
     */
    blueprintName: pulumi.Input<string>;
    /**
     * Artifacts which need to be deployed before the specified artifact.
     */
    dependsOn?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Multi-line explain this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * One-liner string explain this resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the kind of blueprint artifact.
     * Expected value is 'policyAssignment'.
     */
    kind: pulumi.Input<"policyAssignment">;
    /**
     * Parameter values for the policy definition.
     */
    parameters: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterValueArgs>}>;
    /**
     * Azure resource ID of the policy definition.
     */
    policyDefinitionId: pulumi.Input<string>;
    /**
     * Name of the resource group placeholder to which the policy will be assigned.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
}
