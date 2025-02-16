import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Group resource.
 * Azure REST API version: 2023-03-15.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01-preview, 2023-09-09-preview, 2024-01-01-preview.
 */
export class GroupsOperation extends pulumi.CustomResource {
    /**
     * Get an existing GroupsOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GroupsOperation {
        return new GroupsOperation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:GroupsOperation';

    /**
     * Returns true if the given object is an instance of GroupsOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupsOperation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupsOperation.__pulumiType;
    }

    /**
     * If the assessments are in running state.
     */
    public /*out*/ readonly areAssessmentsRunning!: pulumi.Output<boolean>;
    /**
     * List of References to Assessments created on this group.
     */
    public /*out*/ readonly assessments!: pulumi.Output<string[]>;
    /**
     * Time when this group was created. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * Whether the group has been created and is valid.
     */
    public /*out*/ readonly groupStatus!: pulumi.Output<string>;
    /**
     * The type of group.
     */
    public readonly groupType!: pulumi.Output<string | undefined>;
    /**
     * Number of machines part of this group.
     */
    public /*out*/ readonly machineCount!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * List of assessment types supported on this group.
     */
    public readonly supportedAssessmentTypes!: pulumi.Output<string[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Time when this group was last updated. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a GroupsOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupsOperationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["groupType"] = args ? args.groupType : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["supportedAssessmentTypes"] = args ? args.supportedAssessmentTypes : undefined;
            resourceInputs["areAssessmentsRunning"] = undefined /*out*/;
            resourceInputs["assessments"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["groupStatus"] = undefined /*out*/;
            resourceInputs["machineCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["areAssessmentsRunning"] = undefined /*out*/;
            resourceInputs["assessments"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["groupStatus"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["machineCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["supportedAssessmentTypes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001:GroupsOperation" }, { type: "azure-native:migrate/v20230315:GroupsOperation" }, { type: "azure-native:migrate/v20230401preview:GroupsOperation" }, { type: "azure-native:migrate/v20230501preview:GroupsOperation" }, { type: "azure-native:migrate/v20230909preview:GroupsOperation" }, { type: "azure-native:migrate/v20240101preview:GroupsOperation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GroupsOperation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GroupsOperation resource.
 */
export interface GroupsOperationArgs {
    /**
     * Group ARM name
     */
    groupName?: pulumi.Input<string>;
    /**
     * The type of group.
     */
    groupType?: pulumi.Input<string | types.enums.GroupType>;
    /**
     * Assessment Project Name
     */
    projectName: pulumi.Input<string>;
    /**
     * The status of the last operation.
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of assessment types supported on this group.
     */
    supportedAssessmentTypes?: pulumi.Input<pulumi.Input<string | types.enums.AssessmentType>[]>;
}