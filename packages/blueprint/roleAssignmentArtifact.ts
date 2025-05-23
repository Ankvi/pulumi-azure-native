import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Blueprint artifact that applies a Role assignment.
 *
 * Uses Azure REST API version 2018-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-11-01-preview.
 */
export class RoleAssignmentArtifact extends pulumi.CustomResource {
    /**
     * Get an existing RoleAssignmentArtifact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleAssignmentArtifact {
        return new RoleAssignmentArtifact(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:blueprint:RoleAssignmentArtifact';

    /**
     * Returns true if the given object is an instance of RoleAssignmentArtifact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleAssignmentArtifact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleAssignmentArtifact.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Expected value is 'roleAssignment'.
     */
    public readonly kind!: pulumi.Output<"roleAssignment">;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
     */
    public readonly principalIds!: pulumi.Output<any>;
    /**
     * RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
     */
    public readonly resourceGroup!: pulumi.Output<string | undefined>;
    /**
     * Azure resource ID of the RoleDefinition.
     */
    public readonly roleDefinitionId!: pulumi.Output<string>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RoleAssignmentArtifact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAssignmentArtifactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.blueprintName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.principalIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalIds'");
            }
            if ((!args || args.resourceScope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceScope'");
            }
            if ((!args || args.roleDefinitionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleDefinitionId'");
            }
            resourceInputs["artifactName"] = args ? args.artifactName : undefined;
            resourceInputs["blueprintName"] = args ? args.blueprintName : undefined;
            resourceInputs["dependsOn"] = args ? args.dependsOn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["kind"] = "roleAssignment";
            resourceInputs["principalIds"] = args ? args.principalIds : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceScope"] = args ? args.resourceScope : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dependsOn"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalIds"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:blueprint/v20181101preview:PolicyAssignmentArtifact" }, { type: "azure-native:blueprint/v20181101preview:RoleAssignmentArtifact" }, { type: "azure-native:blueprint/v20181101preview:TemplateArtifact" }, { type: "azure-native:blueprint:PolicyAssignmentArtifact" }, { type: "azure-native:blueprint:TemplateArtifact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleAssignmentArtifact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleAssignmentArtifact resource.
 */
export interface RoleAssignmentArtifactArgs {
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
     * Expected value is 'roleAssignment'.
     */
    kind: pulumi.Input<"roleAssignment">;
    /**
     * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
     */
    principalIds: any;
    /**
     * RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription.
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}').
     */
    resourceScope: pulumi.Input<string>;
    /**
     * Azure resource ID of the RoleDefinition.
     */
    roleDefinitionId: pulumi.Input<string>;
}