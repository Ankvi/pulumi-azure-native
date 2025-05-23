import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This represents a Azure subscriptionId that is associated with a GroupQuotasEntity.
 *
 * Uses Azure REST API version 2025-03-01. In version 2.x of the Azure Native provider, it used API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2024-10-15-preview, 2024-12-18-preview, 2025-03-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native quota [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GroupQuotaSubscription extends pulumi.CustomResource {
    /**
     * Get an existing GroupQuotaSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GroupQuotaSubscription {
        return new GroupQuotaSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:quota:GroupQuotaSubscription';

    /**
     * Returns true if the given object is an instance of GroupQuotaSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupQuotaSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupQuotaSubscription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.GroupQuotaSubscriptionIdResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GroupQuotaSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupQuotaSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupQuotaName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupQuotaName'");
            }
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["groupQuotaName"] = args ? args.groupQuotaName : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:quota/v20230601preview:GroupQuotaSubscription" }, { type: "azure-native:quota/v20241015preview:GroupQuotaSubscription" }, { type: "azure-native:quota/v20241218preview:GroupQuotaSubscription" }, { type: "azure-native:quota/v20250301:GroupQuotaSubscription" }, { type: "azure-native:quota/v20250315preview:GroupQuotaSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GroupQuotaSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GroupQuotaSubscription resource.
 */
export interface GroupQuotaSubscriptionArgs {
    /**
     * The GroupQuota name. The name should be unique for the provided context tenantId/MgId.
     */
    groupQuotaName: pulumi.Input<string>;
    /**
     * Management Group Id.
     */
    managementGroupId: pulumi.Input<string>;
}