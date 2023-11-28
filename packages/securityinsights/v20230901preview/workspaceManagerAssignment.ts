import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The workspace manager assignment
 */
export class WorkspaceManagerAssignment extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceManagerAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceManagerAssignment {
        return new WorkspaceManagerAssignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:WorkspaceManagerAssignment';

    /**
     * Returns true if the given object is an instance of WorkspaceManagerAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceManagerAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceManagerAssignment.__pulumiType;
    }

    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of resources included in this workspace manager assignment
     */
    public readonly items!: pulumi.Output<types.outputs.AssignmentItemResponse[]>;
    /**
     * The time the last job associated to this assignment ended at
     */
    public /*out*/ readonly lastJobEndTime!: pulumi.Output<string>;
    /**
     * State of the last job associated to this assignment
     */
    public /*out*/ readonly lastJobProvisioningState!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource name of the workspace manager group targeted by the workspace manager assignment
     */
    public readonly targetResourceName!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceManagerAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceManagerAssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.items === undefined) && !opts.urn) {
                throw new Error("Missing required property 'items'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["items"] = args ? args.items : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetResourceName"] = args ? args.targetResourceName : undefined;
            resourceInputs["workspaceManagerAssignmentName"] = args ? args.workspaceManagerAssignmentName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastJobEndTime"] = undefined /*out*/;
            resourceInputs["lastJobProvisioningState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["items"] = undefined /*out*/;
            resourceInputs["lastJobEndTime"] = undefined /*out*/;
            resourceInputs["lastJobProvisioningState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetResourceName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20230401preview:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20230501preview:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20230601preview:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20230701preview:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20230801preview:WorkspaceManagerAssignment" }, { type: "azure-native:securityinsights/v20231001preview:WorkspaceManagerAssignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceManagerAssignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceManagerAssignment resource.
 */
export interface WorkspaceManagerAssignmentArgs {
    /**
     * List of resources included in this workspace manager assignment
     */
    items: pulumi.Input<pulumi.Input<types.inputs.AssignmentItemArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the workspace manager group targeted by the workspace manager assignment
     */
    targetResourceName: pulumi.Input<string>;
    /**
     * The name of the workspace manager assignment
     */
    workspaceManagerAssignmentName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
