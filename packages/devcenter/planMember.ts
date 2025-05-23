import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a devcenter plan member resource.
 *
 * Uses Azure REST API version 2024-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PlanMember extends pulumi.CustomResource {
    /**
     * Get an existing PlanMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PlanMember {
        return new PlanMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:PlanMember';

    /**
     * Returns true if the given object is an instance of PlanMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlanMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlanMember.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The unique id of the member.
     */
    public readonly memberId!: pulumi.Output<string | undefined>;
    /**
     * The type of the member (user, group)
     */
    public readonly memberType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sync status of the member.
     */
    public /*out*/ readonly syncStatus!: pulumi.Output<types.outputs.PlanMemberSyncStatusResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The tier of the member.
     */
    public readonly tier!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PlanMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlanMemberArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.planName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'planName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["memberId"] = args ? args.memberId : undefined;
            resourceInputs["memberName"] = args ? args.memberName : undefined;
            resourceInputs["memberType"] = args ? args.memberType : undefined;
            resourceInputs["planName"] = args ? args.planName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["memberId"] = undefined /*out*/;
            resourceInputs["memberType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tier"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20240501preview:PlanMember" }, { type: "azure-native:devcenter/v20240601preview:PlanMember" }, { type: "azure-native:devcenter/v20240701preview:PlanMember" }, { type: "azure-native:devcenter/v20240801preview:PlanMember" }, { type: "azure-native:devcenter/v20241001preview:PlanMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PlanMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PlanMember resource.
 */
export interface PlanMemberArgs {
    /**
     * The unique id of the member.
     */
    memberId?: pulumi.Input<string>;
    /**
     * The name of a devcenter plan member.
     */
    memberName?: pulumi.Input<string>;
    /**
     * The type of the member (user, group)
     */
    memberType?: pulumi.Input<string | types.enums.PlanMemberType>;
    /**
     * The name of the devcenter plan.
     */
    planName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The tier of the member.
     */
    tier?: pulumi.Input<string>;
}