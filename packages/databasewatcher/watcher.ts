import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The DatabaseWatcherProviderHub resource.
 *
 * Uses Azure REST API version 2024-10-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-09-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-07-19-preview, 2025-01-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databasewatcher [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Watcher extends pulumi.CustomResource {
    /**
     * Get an existing Watcher resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Watcher {
        return new Watcher(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databasewatcher:Watcher';

    /**
     * Returns true if the given object is an instance of Watcher.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Watcher {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Watcher.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The data store for collected monitoring data.
     */
    public readonly datastore!: pulumi.Output<types.outputs.DatastoreResponse | undefined>;
    /**
     * The resource ID of a user-assigned managed identity that will be assigned to a new alert rule.
     */
    public readonly defaultAlertRuleIdentityResourceId!: pulumi.Output<string | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource watcher.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The monitoring collection status of the watcher.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
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
     * Create a Watcher resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WatcherArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["datastore"] = args ? args.datastore : undefined;
            resourceInputs["defaultAlertRuleIdentityResourceId"] = args ? args.defaultAlertRuleIdentityResourceId : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["watcherName"] = args ? args.watcherName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["datastore"] = undefined /*out*/;
            resourceInputs["defaultAlertRuleIdentityResourceId"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databasewatcher/v20230901preview:Watcher" }, { type: "azure-native:databasewatcher/v20240719preview:Watcher" }, { type: "azure-native:databasewatcher/v20241001preview:Watcher" }, { type: "azure-native:databasewatcher/v20250102:Watcher" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Watcher.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Watcher resource.
 */
export interface WatcherArgs {
    /**
     * The data store for collected monitoring data.
     */
    datastore?: pulumi.Input<types.inputs.DatastoreArgs>;
    /**
     * The resource ID of a user-assigned managed identity that will be assigned to a new alert rule.
     */
    defaultAlertRuleIdentityResourceId?: pulumi.Input<string>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The database watcher name.
     */
    watcherName?: pulumi.Input<string>;
}