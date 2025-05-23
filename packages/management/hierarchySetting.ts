import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Settings defined at the Management Group scope.
 *
 * Uses Azure REST API version 2023-04-01. In version 2.x of the Azure Native provider, it used API version 2021-04-01.
 *
 * Other available API versions: 2021-04-01, 2024-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native management [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class HierarchySetting extends pulumi.CustomResource {
    /**
     * Get an existing HierarchySetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HierarchySetting {
        return new HierarchySetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:management:HierarchySetting';

    /**
     * Returns true if the given object is an instance of HierarchySetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HierarchySetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HierarchySetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    public readonly defaultManagementGroup!: pulumi.Output<string | undefined>;
    /**
     * The name of the object. In this case, default.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    public readonly requireAuthorizationForGroupCreation!: pulumi.Output<boolean | undefined>;
    /**
     * The AAD Tenant ID associated with the hierarchy settings. For example, 00000000-0000-0000-0000-000000000000
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups/settings.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a HierarchySetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HierarchySettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            resourceInputs["defaultManagementGroup"] = args ? args.defaultManagementGroup : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["requireAuthorizationForGroupCreation"] = args ? args.requireAuthorizationForGroupCreation : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultManagementGroup"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requireAuthorizationForGroupCreation"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:management/v20200201:HierarchySetting" }, { type: "azure-native:management/v20200501:HierarchySetting" }, { type: "azure-native:management/v20201001:HierarchySetting" }, { type: "azure-native:management/v20210401:HierarchySetting" }, { type: "azure-native:management/v20230401:HierarchySetting" }, { type: "azure-native:management/v20240201preview:HierarchySetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HierarchySetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HierarchySetting resource.
 */
export interface HierarchySettingArgs {
    /**
     * Settings that sets the default Management Group under which new subscriptions get added in this tenant. For example, /providers/Microsoft.Management/managementGroups/defaultGroup
     */
    defaultManagementGroup?: pulumi.Input<string>;
    /**
     * Management Group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * Indicates whether RBAC access is required upon group creation under the root Management Group. If set to true, user will require Microsoft.Management/managementGroups/write action on the root Management Group scope in order to create new Groups directly under the root. This will prevent new users from creating new Management Groups, unless they are given access.
     */
    requireAuthorizationForGroupCreation?: pulumi.Input<boolean>;
}