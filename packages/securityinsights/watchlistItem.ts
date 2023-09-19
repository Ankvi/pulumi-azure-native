import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Watchlist Item in Azure Security Insights.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2021-03-01-preview
 */
export class WatchlistItem extends pulumi.CustomResource {
    /**
     * Get an existing WatchlistItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WatchlistItem {
        return new WatchlistItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:WatchlistItem';

    /**
     * Returns true if the given object is an instance of WatchlistItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WatchlistItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WatchlistItem.__pulumiType;
    }

    /**
     * The time the watchlist item was created
     */
    public readonly created!: pulumi.Output<string | undefined>;
    /**
     * Describes a user that created the watchlist item
     */
    public readonly createdBy!: pulumi.Output<types.outputs.WatchlistUserInfoResponse | undefined>;
    /**
     * key-value pairs for a watchlist item entity mapping
     */
    public readonly entityMapping!: pulumi.Output<any | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * A flag that indicates if the watchlist item is deleted or not
     */
    public readonly isDeleted!: pulumi.Output<boolean | undefined>;
    /**
     * key-value pairs for a watchlist item
     */
    public readonly itemsKeyValue!: pulumi.Output<any>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tenantId to which the watchlist item belongs to
     */
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The last time the watchlist item was updated
     */
    public readonly updated!: pulumi.Output<string | undefined>;
    /**
     * Describes a user that updated the watchlist item
     */
    public readonly updatedBy!: pulumi.Output<types.outputs.WatchlistUserInfoResponse | undefined>;
    /**
     * The id (a Guid) of the watchlist item
     */
    public readonly watchlistItemId!: pulumi.Output<string | undefined>;
    /**
     * The type of the watchlist item
     */
    public readonly watchlistItemType!: pulumi.Output<string | undefined>;

    /**
     * Create a WatchlistItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WatchlistItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.itemsKeyValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'itemsKeyValue'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.watchlistAlias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'watchlistAlias'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["created"] = args ? args.created : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["entityMapping"] = args ? args.entityMapping : undefined;
            resourceInputs["isDeleted"] = args ? args.isDeleted : undefined;
            resourceInputs["itemsKeyValue"] = args ? args.itemsKeyValue : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["updated"] = args ? args.updated : undefined;
            resourceInputs["updatedBy"] = args ? args.updatedBy : undefined;
            resourceInputs["watchlistAlias"] = args ? args.watchlistAlias : undefined;
            resourceInputs["watchlistItemId"] = args ? args.watchlistItemId : undefined;
            resourceInputs["watchlistItemType"] = args ? args.watchlistItemType : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["entityMapping"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["isDeleted"] = undefined /*out*/;
            resourceInputs["itemsKeyValue"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["watchlistItemId"] = undefined /*out*/;
            resourceInputs["watchlistItemType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20210301preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20210401:WatchlistItem" }, { type: "azure-native:securityinsights/v20210901preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20211001:WatchlistItem" }, { type: "azure-native:securityinsights/v20211001preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220101preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220401preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220501preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220601preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220701preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220801:WatchlistItem" }, { type: "azure-native:securityinsights/v20220801preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20220901preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20221001preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20221101:WatchlistItem" }, { type: "azure-native:securityinsights/v20221101preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20221201preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230201:WatchlistItem" }, { type: "azure-native:securityinsights/v20230201preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230301preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230401preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230501preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230601preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230701preview:WatchlistItem" }, { type: "azure-native:securityinsights/v20230801preview:WatchlistItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WatchlistItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WatchlistItem resource.
 */
export interface WatchlistItemArgs {
    /**
     * The time the watchlist item was created
     */
    created?: pulumi.Input<string>;
    /**
     * Describes a user that created the watchlist item
     */
    createdBy?: pulumi.Input<types.inputs.WatchlistUserInfoArgs>;
    /**
     * key-value pairs for a watchlist item entity mapping
     */
    entityMapping?: any;
    /**
     * A flag that indicates if the watchlist item is deleted or not
     */
    isDeleted?: pulumi.Input<boolean>;
    /**
     * key-value pairs for a watchlist item
     */
    itemsKeyValue: any;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tenantId to which the watchlist item belongs to
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The last time the watchlist item was updated
     */
    updated?: pulumi.Input<string>;
    /**
     * Describes a user that updated the watchlist item
     */
    updatedBy?: pulumi.Input<types.inputs.WatchlistUserInfoArgs>;
    /**
     * The watchlist alias
     */
    watchlistAlias: pulumi.Input<string>;
    /**
     * The id (a Guid) of the watchlist item
     */
    watchlistItemId?: pulumi.Input<string>;
    /**
     * The type of the watchlist item
     */
    watchlistItemType?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
