import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Role Assignment resource format.
 *
 * Uses Azure REST API version 2017-04-26. In version 2.x of the Azure Native provider, it used API version 2017-04-26.
 */
export class RoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing RoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleAssignment {
        return new RoleAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customerinsights:RoleAssignment';

    /**
     * Returns true if the given object is an instance of RoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleAssignment.__pulumiType;
    }

    /**
     * The name of the metadata object.
     */
    public readonly assignmentName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Widget types set for the assignment.
     */
    public readonly conflationPolicies!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Connectors set for the assignment.
     */
    public readonly connectors!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Localized description for the metadata.
     */
    public readonly description!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Localized display names for the metadata.
     */
    public readonly displayName!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Interactions set for the assignment.
     */
    public readonly interactions!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Kpis set for the assignment.
     */
    public readonly kpis!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Links set for the assignment.
     */
    public readonly links!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principals being assigned to.
     */
    public readonly principals!: pulumi.Output<types.outputs.AssignmentPrincipalResponse[]>;
    /**
     * Profiles set for the assignment.
     */
    public readonly profiles!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Role assignments set for the relationship links.
     */
    public readonly relationshipLinks!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * The Role assignments set for the relationships.
     */
    public readonly relationships!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Type of roles.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The Role assignments set for the assignment.
     */
    public readonly roleAssignments!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Sas Policies set for the assignment.
     */
    public readonly sasPolicies!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * The Role assignments set for the assignment.
     */
    public readonly segments!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * The hub name.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Views set for the assignment.
     */
    public readonly views!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;
    /**
     * Widget types set for the assignment.
     */
    public readonly widgetTypes!: pulumi.Output<types.outputs.ResourceSetDescriptionResponse | undefined>;

    /**
     * Create a RoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hubName'");
            }
            if ((!args || args.principals === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principals'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["assignmentName"] = args ? args.assignmentName : undefined;
            resourceInputs["conflationPolicies"] = args ? args.conflationPolicies : undefined;
            resourceInputs["connectors"] = args ? args.connectors : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hubName"] = args ? args.hubName : undefined;
            resourceInputs["interactions"] = args ? args.interactions : undefined;
            resourceInputs["kpis"] = args ? args.kpis : undefined;
            resourceInputs["links"] = args ? args.links : undefined;
            resourceInputs["principals"] = args ? args.principals : undefined;
            resourceInputs["profiles"] = args ? args.profiles : undefined;
            resourceInputs["relationshipLinks"] = args ? args.relationshipLinks : undefined;
            resourceInputs["relationships"] = args ? args.relationships : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["roleAssignments"] = args ? args.roleAssignments : undefined;
            resourceInputs["sasPolicies"] = args ? args.sasPolicies : undefined;
            resourceInputs["segments"] = args ? args.segments : undefined;
            resourceInputs["views"] = args ? args.views : undefined;
            resourceInputs["widgetTypes"] = args ? args.widgetTypes : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assignmentName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["conflationPolicies"] = undefined /*out*/;
            resourceInputs["connectors"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["interactions"] = undefined /*out*/;
            resourceInputs["kpis"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principals"] = undefined /*out*/;
            resourceInputs["profiles"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["relationshipLinks"] = undefined /*out*/;
            resourceInputs["relationships"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["roleAssignments"] = undefined /*out*/;
            resourceInputs["sasPolicies"] = undefined /*out*/;
            resourceInputs["segments"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["views"] = undefined /*out*/;
            resourceInputs["widgetTypes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customerinsights/v20170101:RoleAssignment" }, { type: "azure-native:customerinsights/v20170426:RoleAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoleAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoleAssignment resource.
 */
export interface RoleAssignmentArgs {
    /**
     * The assignment name
     */
    assignmentName?: pulumi.Input<string>;
    /**
     * Widget types set for the assignment.
     */
    conflationPolicies?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Connectors set for the assignment.
     */
    connectors?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Localized description for the metadata.
     */
    description?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Localized display names for the metadata.
     */
    displayName?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the hub.
     */
    hubName: pulumi.Input<string>;
    /**
     * Interactions set for the assignment.
     */
    interactions?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Kpis set for the assignment.
     */
    kpis?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Links set for the assignment.
     */
    links?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * The principals being assigned to.
     */
    principals: pulumi.Input<pulumi.Input<types.inputs.AssignmentPrincipalArgs>[]>;
    /**
     * Profiles set for the assignment.
     */
    profiles?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * The Role assignments set for the relationship links.
     */
    relationshipLinks?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * The Role assignments set for the relationships.
     */
    relationships?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Type of roles.
     */
    role: pulumi.Input<types.enums.RoleTypes>;
    /**
     * The Role assignments set for the assignment.
     */
    roleAssignments?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Sas Policies set for the assignment.
     */
    sasPolicies?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * The Role assignments set for the assignment.
     */
    segments?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Views set for the assignment.
     */
    views?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
    /**
     * Widget types set for the assignment.
     */
    widgetTypes?: pulumi.Input<types.inputs.ResourceSetDescriptionArgs>;
}