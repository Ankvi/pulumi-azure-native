import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Database, Server or Elastic Pool Advisor.
 */
export class DatabaseAdvisor extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAdvisor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DatabaseAdvisor {
        return new DatabaseAdvisor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:DatabaseAdvisor';

    /**
     * Returns true if the given object is an instance of DatabaseAdvisor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAdvisor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAdvisor.__pulumiType;
    }

    /**
     * Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
     */
    public /*out*/ readonly advisorStatus!: pulumi.Output<string>;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    public readonly autoExecuteStatus!: pulumi.Output<string>;
    /**
     * Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level).
     */
    public /*out*/ readonly autoExecuteStatusInheritedFrom!: pulumi.Output<string>;
    /**
     * Resource kind.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Gets the time when the current resource was analyzed for recommendations by this advisor.
     */
    public /*out*/ readonly lastChecked!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
     */
    public /*out*/ readonly recommendationsStatus!: pulumi.Output<string>;
    /**
     * Gets the recommended actions for this advisor.
     */
    public /*out*/ readonly recommendedActions!: pulumi.Output<types.outputs.RecommendedActionResponse[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DatabaseAdvisor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAdvisorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.autoExecuteStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoExecuteStatus'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["advisorName"] = args ? args.advisorName : undefined;
            resourceInputs["autoExecuteStatus"] = args ? args.autoExecuteStatus : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["advisorStatus"] = undefined /*out*/;
            resourceInputs["autoExecuteStatusInheritedFrom"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastChecked"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationsStatus"] = undefined /*out*/;
            resourceInputs["recommendedActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["advisorStatus"] = undefined /*out*/;
            resourceInputs["autoExecuteStatus"] = undefined /*out*/;
            resourceInputs["autoExecuteStatusInheritedFrom"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastChecked"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationsStatus"] = undefined /*out*/;
            resourceInputs["recommendedActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:DatabaseAdvisor" }, { type: "azure-native:sql/v20140401:DatabaseAdvisor" }, { type: "azure-native:sql/v20150501preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20200202preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20200801preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20201101preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20210201preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20210501preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20210801preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20211101:DatabaseAdvisor" }, { type: "azure-native:sql/v20211101preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20220201preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20220501preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20220801preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20221101preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20230201preview:DatabaseAdvisor" }, { type: "azure-native:sql/v20230801preview:DatabaseAdvisor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DatabaseAdvisor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DatabaseAdvisor resource.
 */
export interface DatabaseAdvisorArgs {
    /**
     * The name of the Database Advisor.
     */
    advisorName?: pulumi.Input<string>;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    autoExecuteStatus: pulumi.Input<types.enums.AutoExecuteStatus>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}