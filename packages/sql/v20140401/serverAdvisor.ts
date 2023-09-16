import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Database Advisor.
 */
export class ServerAdvisor extends pulumi.CustomResource {
    /**
     * Get an existing ServerAdvisor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAdvisor {
        return new ServerAdvisor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:ServerAdvisor';

    /**
     * Returns true if the given object is an instance of ServerAdvisor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerAdvisor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerAdvisor.__pulumiType;
    }

    /**
     * Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'.
     */
    public /*out*/ readonly advisorStatus!: pulumi.Output<string>;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    public readonly autoExecuteValue!: pulumi.Output<string>;
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
     * Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available), LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc.
     */
    public /*out*/ readonly recommendationsStatus!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerAdvisor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAdvisorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.autoExecuteValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoExecuteValue'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["advisorName"] = args ? args.advisorName : undefined;
            resourceInputs["autoExecuteValue"] = args ? args.autoExecuteValue : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["advisorStatus"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastChecked"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationsStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["advisorStatus"] = undefined /*out*/;
            resourceInputs["autoExecuteValue"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastChecked"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["recommendationsStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ServerAdvisor" }, { type: "azure-native:sql/v20150501preview:ServerAdvisor" }, { type: "azure-native:sql/v20200202preview:ServerAdvisor" }, { type: "azure-native:sql/v20200801preview:ServerAdvisor" }, { type: "azure-native:sql/v20201101preview:ServerAdvisor" }, { type: "azure-native:sql/v20210201preview:ServerAdvisor" }, { type: "azure-native:sql/v20210501preview:ServerAdvisor" }, { type: "azure-native:sql/v20210801preview:ServerAdvisor" }, { type: "azure-native:sql/v20211101:ServerAdvisor" }, { type: "azure-native:sql/v20211101preview:ServerAdvisor" }, { type: "azure-native:sql/v20220201preview:ServerAdvisor" }, { type: "azure-native:sql/v20220501preview:ServerAdvisor" }, { type: "azure-native:sql/v20220801preview:ServerAdvisor" }, { type: "azure-native:sql/v20221101preview:ServerAdvisor" }, { type: "azure-native:sql/v20230201preview:ServerAdvisor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerAdvisor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerAdvisor resource.
 */
export interface ServerAdvisorArgs {
    /**
     * The name of the Server Advisor.
     */
    advisorName?: pulumi.Input<string>;
    /**
     * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
     */
    autoExecuteValue: pulumi.Input<types.enums.v20140401.AutoExecuteStatus>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
