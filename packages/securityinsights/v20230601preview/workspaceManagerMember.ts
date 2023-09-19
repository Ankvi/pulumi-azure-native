import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The workspace manager member
 */
export class WorkspaceManagerMember extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceManagerMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceManagerMember {
        return new WorkspaceManagerMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230601preview:WorkspaceManagerMember';

    /**
     * Returns true if the given object is an instance of WorkspaceManagerMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceManagerMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceManagerMember.__pulumiType;
    }

    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Fully qualified resource ID of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    public readonly targetWorkspaceId!: pulumi.Output<string>;
    /**
     * Tenant id of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    public readonly targetWorkspaceTenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkspaceManagerMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceManagerMemberArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetWorkspaceId'");
            }
            if ((!args || args.targetWorkspaceTenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetWorkspaceTenantId'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["targetWorkspaceId"] = args ? args.targetWorkspaceId : undefined;
            resourceInputs["targetWorkspaceTenantId"] = args ? args.targetWorkspaceTenantId : undefined;
            resourceInputs["workspaceManagerMemberName"] = args ? args.workspaceManagerMemberName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetWorkspaceId"] = undefined /*out*/;
            resourceInputs["targetWorkspaceTenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:WorkspaceManagerMember" }, { type: "azure-native:securityinsights/v20230401preview:WorkspaceManagerMember" }, { type: "azure-native:securityinsights/v20230501preview:WorkspaceManagerMember" }, { type: "azure-native:securityinsights/v20230701preview:WorkspaceManagerMember" }, { type: "azure-native:securityinsights/v20230801preview:WorkspaceManagerMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceManagerMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceManagerMember resource.
 */
export interface WorkspaceManagerMemberArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Fully qualified resource ID of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    targetWorkspaceId: pulumi.Input<string>;
    /**
     * Tenant id of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    targetWorkspaceTenantId: pulumi.Input<string>;
    /**
     * The name of the workspace manager member
     */
    workspaceManagerMemberName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
