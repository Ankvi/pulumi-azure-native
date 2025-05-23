import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Access Control List resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AccessControlList extends pulumi.CustomResource {
    /**
     * Get an existing AccessControlList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessControlList {
        return new AccessControlList(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:AccessControlList';

    /**
     * Returns true if the given object is an instance of AccessControlList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessControlList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessControlList.__pulumiType;
    }

    /**
     * Access Control List file URL.
     */
    public readonly aclsUrl!: pulumi.Output<string | undefined>;
    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * Input method to configure Access Control List.
     */
    public readonly configurationType!: pulumi.Output<string>;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * List of dynamic match configurations.
     */
    public readonly dynamicMatchConfigurations!: pulumi.Output<types.outputs.CommonDynamicMatchConfigurationResponse[] | undefined>;
    /**
     * The last synced timestamp.
     */
    public /*out*/ readonly lastSyncedTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * List of match configurations.
     */
    public readonly matchConfigurations!: pulumi.Output<types.outputs.AccessControlListMatchConfigurationResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccessControlList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessControlListArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configurationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessControlListName"] = args ? args.accessControlListName : undefined;
            resourceInputs["aclsUrl"] = args ? args.aclsUrl : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["configurationType"] = args ? args.configurationType : undefined;
            resourceInputs["defaultAction"] = (args ? args.defaultAction : undefined) ?? "Permit";
            resourceInputs["dynamicMatchConfigurations"] = args ? args.dynamicMatchConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["matchConfigurations"] = args ? args.matchConfigurations : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["lastSyncedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aclsUrl"] = undefined /*out*/;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["configurationType"] = undefined /*out*/;
            resourceInputs["defaultAction"] = undefined /*out*/;
            resourceInputs["dynamicMatchConfigurations"] = undefined /*out*/;
            resourceInputs["lastSyncedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["matchConfigurations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:AccessControlList" }, { type: "azure-native:managednetworkfabric/v20230615:AccessControlList" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessControlList.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessControlList resource.
 */
export interface AccessControlListArgs {
    /**
     * Name of the Access Control List.
     */
    accessControlListName?: pulumi.Input<string>;
    /**
     * Access Control List file URL.
     */
    aclsUrl?: pulumi.Input<string>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Input method to configure Access Control List.
     */
    configurationType: pulumi.Input<string | types.enums.ConfigurationType>;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    defaultAction?: pulumi.Input<string | types.enums.CommunityActionTypes>;
    /**
     * List of dynamic match configurations.
     */
    dynamicMatchConfigurations?: pulumi.Input<pulumi.Input<types.inputs.CommonDynamicMatchConfigurationArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * List of match configurations.
     */
    matchConfigurations?: pulumi.Input<pulumi.Input<types.inputs.AccessControlListMatchConfigurationArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}