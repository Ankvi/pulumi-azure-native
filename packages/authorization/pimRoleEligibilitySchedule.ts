import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A PIM (Privileged Identity Management) Role Eligibility Schedule.
 *
 * Role Eligibility Schedules are used to limit standing administrator access to privileged roles in Azure PIM. See
 * [here](https://learn.microsoft.com/en-us/rest/api/authorization/privileged-role-eligibility-rest-sample) for details.
 *
 * A Role Eligibility Schedule is uniquely defined by scope, principal, and role. At present, only one instance of this
 * resource can exist for a given scope|principal|role tuple.
 *
 * Note that this resource cannot be updated. Each change leads to a recreation.
 *
 * Internally, this resource uses the
 * [Role Eligibility Schedule Requests](https://learn.microsoft.com/en-us/rest/api/authorization/role-eligibility-schedule-requests?view=rest-authorization-2020-10-01)
 * API to create and delete the schedules.
 */
export class PimRoleEligibilitySchedule extends pulumi.CustomResource {
    /**
     * Get an existing PimRoleEligibilitySchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PimRoleEligibilitySchedule {
        return new PimRoleEligibilitySchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:PimRoleEligibilitySchedule';

    /**
     * Returns true if the given object is an instance of PimRoleEligibilitySchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PimRoleEligibilitySchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PimRoleEligibilitySchedule.__pulumiType;
    }

    /**
     * The approvalId of the role eligibility schedule request.
     */
    public /*out*/ readonly approvalId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    public readonly condition!: pulumi.Output<string | undefined>;
    /**
     * Version of the condition. Currently accepted value is '2.0'
     */
    public readonly conditionVersion!: pulumi.Output<string | undefined>;
    /**
     * DateTime when role eligibility schedule request was created
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * Additional properties of principal, scope and role definition
     */
    public /*out*/ readonly expandedProperties!: pulumi.Output<types.outputs.ExpandedPropertiesResponse>;
    /**
     * Justification for the role eligibility
     */
    public readonly justification!: pulumi.Output<string | undefined>;
    /**
     * The role eligibility schedule request name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principal ID.
     */
    public readonly principalId!: pulumi.Output<string>;
    /**
     * The principal type of the assigned principal ID.
     */
    public /*out*/ readonly principalType!: pulumi.Output<string>;
    /**
     * The type of the role assignment schedule request. Eg: SelfActivate, AdminAssign etc
     */
    public /*out*/ readonly requestType!: pulumi.Output<string | undefined>;
    /**
     * Id of the user who created this request
     */
    public /*out*/ readonly requestorId!: pulumi.Output<string>;
    /**
     * The role definition ID.
     */
    public readonly roleDefinitionId!: pulumi.Output<string>;
    /**
     * Schedule info of the role eligibility schedule
     */
    public readonly scheduleInfo!: pulumi.Output<types.outputs.RoleEligibilityScheduleRequestPropertiesResponseScheduleInfo | undefined>;
    /**
     * The role eligibility schedule request scope.
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * The status of the role eligibility schedule request.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The resultant role eligibility schedule id or the role eligibility schedule id being updated
     */
    public readonly targetRoleEligibilityScheduleId!: pulumi.Output<string | undefined>;
    /**
     * The role eligibility schedule instance id being updated
     */
    public readonly targetRoleEligibilityScheduleInstanceId!: pulumi.Output<string | undefined>;
    /**
     * Ticket Info of the role eligibility
     */
    public readonly ticketInfo!: pulumi.Output<types.outputs.RoleEligibilityScheduleRequestPropertiesResponseTicketInfo | undefined>;
    /**
     * The role eligibility schedule request type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PimRoleEligibilitySchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PimRoleEligibilityScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.principalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principalId'");
            }
            if ((!args || args.roleDefinitionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleDefinitionId'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["conditionVersion"] = args ? args.conditionVersion : undefined;
            resourceInputs["justification"] = args ? args.justification : undefined;
            resourceInputs["principalId"] = args ? args.principalId : undefined;
            resourceInputs["roleDefinitionId"] = args ? args.roleDefinitionId : undefined;
            resourceInputs["scheduleInfo"] = args ? args.scheduleInfo : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["targetRoleEligibilityScheduleId"] = args ? args.targetRoleEligibilityScheduleId : undefined;
            resourceInputs["targetRoleEligibilityScheduleInstanceId"] = args ? args.targetRoleEligibilityScheduleInstanceId : undefined;
            resourceInputs["ticketInfo"] = args ? args.ticketInfo : undefined;
            resourceInputs["approvalId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["expandedProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["requestType"] = undefined /*out*/;
            resourceInputs["requestorId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["approvalId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["condition"] = undefined /*out*/;
            resourceInputs["conditionVersion"] = undefined /*out*/;
            resourceInputs["createdOn"] = undefined /*out*/;
            resourceInputs["expandedProperties"] = undefined /*out*/;
            resourceInputs["justification"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["principalType"] = undefined /*out*/;
            resourceInputs["requestType"] = undefined /*out*/;
            resourceInputs["requestorId"] = undefined /*out*/;
            resourceInputs["roleDefinitionId"] = undefined /*out*/;
            resourceInputs["scheduleInfo"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["targetRoleEligibilityScheduleId"] = undefined /*out*/;
            resourceInputs["targetRoleEligibilityScheduleInstanceId"] = undefined /*out*/;
            resourceInputs["ticketInfo"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20201001:PimRoleEligibilitySchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PimRoleEligibilitySchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PimRoleEligibilitySchedule resource.
 */
export interface PimRoleEligibilityScheduleArgs {
    /**
     * The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'
     */
    condition?: pulumi.Input<string>;
    /**
     * Version of the condition. Currently accepted value is '2.0'
     */
    conditionVersion?: pulumi.Input<string>;
    /**
     * Justification for the role eligibility
     */
    justification?: pulumi.Input<string>;
    /**
     * The principal ID.
     */
    principalId: pulumi.Input<string>;
    /**
     * The role definition ID.
     */
    roleDefinitionId: pulumi.Input<string>;
    /**
     * Schedule info of the role eligibility schedule
     */
    scheduleInfo?: pulumi.Input<types.inputs.RoleEligibilityScheduleRequestPropertiesScheduleInfoArgs>;
    /**
     * The scope of the role eligibility schedule request to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
     */
    scope: pulumi.Input<string>;
    /**
     * The resultant role eligibility schedule id or the role eligibility schedule id being updated
     */
    targetRoleEligibilityScheduleId?: pulumi.Input<string>;
    /**
     * The role eligibility schedule instance id being updated
     */
    targetRoleEligibilityScheduleInstanceId?: pulumi.Input<string>;
    /**
     * Ticket Info of the role eligibility
     */
    ticketInfo?: pulumi.Input<types.inputs.RoleEligibilityScheduleRequestPropertiesTicketInfoArgs>;
}