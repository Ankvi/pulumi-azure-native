import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the admin rule collection.
 */
export class AdminRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing AdminRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AdminRuleCollection {
        return new AdminRuleCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:AdminRuleCollection';

    /**
     * Returns true if the given object is an instance of AdminRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdminRuleCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdminRuleCollection.__pulumiType;
    }

    /**
     * Groups for configuration
     */
    public readonly appliesToGroups!: pulumi.Output<types.outputs.NetworkManagerSecurityGroupItemResponse[]>;
    /**
     * A description of the admin rule collection.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Unique identifier for this resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AdminRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdminRuleCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appliesToGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appliesToGroups'");
            }
            if ((!args || args.configurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationName'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appliesToGroups"] = args ? args.appliesToGroups : undefined;
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appliesToGroups"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:AdminRuleCollection" }, { type: "azure-native:network/v20210201preview:AdminRuleCollection" }, { type: "azure-native:network/v20210501preview:AdminRuleCollection" }, { type: "azure-native:network/v20220101:AdminRuleCollection" }, { type: "azure-native:network/v20220201preview:AdminRuleCollection" }, { type: "azure-native:network/v20220401preview:AdminRuleCollection" }, { type: "azure-native:network/v20220501:AdminRuleCollection" }, { type: "azure-native:network/v20220701:AdminRuleCollection" }, { type: "azure-native:network/v20220901:AdminRuleCollection" }, { type: "azure-native:network/v20221101:AdminRuleCollection" }, { type: "azure-native:network/v20230401:AdminRuleCollection" }, { type: "azure-native:network/v20230501:AdminRuleCollection" }, { type: "azure-native:network/v20230601:AdminRuleCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AdminRuleCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AdminRuleCollection resource.
 */
export interface AdminRuleCollectionArgs {
    /**
     * Groups for configuration
     */
    appliesToGroups: pulumi.Input<pulumi.Input<types.inputs.NetworkManagerSecurityGroupItemArgs>[]>;
    /**
     * The name of the network manager Security Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * A description of the admin rule collection.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager security Configuration rule collection.
     */
    ruleCollectionName?: pulumi.Input<string>;
}
