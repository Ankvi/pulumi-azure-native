import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a lab.
 */
export class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Lab {
        return new Lab(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:labservices/v20181015:Lab';

    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Lab {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Lab.__pulumiType;
    }

    /**
     * Object id of the user that created the lab.
     */
    public /*out*/ readonly createdByObjectId!: pulumi.Output<string>;
    /**
     * Lab creator name
     */
    public /*out*/ readonly createdByUserPrincipalName!: pulumi.Output<string>;
    /**
     * Creation date for the lab
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Invitation code that users can use to join a lab.
     */
    public /*out*/ readonly invitationCode!: pulumi.Output<string>;
    /**
     * The details of the latest operation. ex: status, error
     */
    public /*out*/ readonly latestOperationResult!: pulumi.Output<types.outputs.LatestOperationResultResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of users allowed in the lab.
     */
    public readonly maxUsersInLab!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning status of the resource.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public readonly uniqueIdentifier!: pulumi.Output<string | undefined>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    public readonly usageQuota!: pulumi.Output<string | undefined>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    public readonly userAccessMode!: pulumi.Output<string | undefined>;
    /**
     * Maximum value MaxUsersInLab can be set to, as specified by the service
     */
    public /*out*/ readonly userQuota!: pulumi.Output<number>;

    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["labAccountName"] = args ? args.labAccountName : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxUsersInLab"] = args ? args.maxUsersInLab : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uniqueIdentifier"] = args ? args.uniqueIdentifier : undefined;
            resourceInputs["usageQuota"] = args ? args.usageQuota : undefined;
            resourceInputs["userAccessMode"] = args ? args.userAccessMode : undefined;
            resourceInputs["createdByObjectId"] = undefined /*out*/;
            resourceInputs["createdByUserPrincipalName"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["invitationCode"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userQuota"] = undefined /*out*/;
        } else {
            resourceInputs["createdByObjectId"] = undefined /*out*/;
            resourceInputs["createdByUserPrincipalName"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["invitationCode"] = undefined /*out*/;
            resourceInputs["latestOperationResult"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxUsersInLab"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["usageQuota"] = undefined /*out*/;
            resourceInputs["userAccessMode"] = undefined /*out*/;
            resourceInputs["userQuota"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Lab.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * The name of the lab Account.
     */
    labAccountName: pulumi.Input<string>;
    /**
     * The name of the lab.
     */
    labName?: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum number of users allowed in the lab.
     */
    maxUsersInLab?: pulumi.Input<number>;
    /**
     * The provisioning status of the resource.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    uniqueIdentifier?: pulumi.Input<string>;
    /**
     * Maximum duration a user can use an environment for in the lab.
     */
    usageQuota?: pulumi.Input<string>;
    /**
     * Lab user access mode (open to all vs. restricted to those listed on the lab).
     */
    userAccessMode?: pulumi.Input<string | types.enums.LabUserAccessMode>;
}