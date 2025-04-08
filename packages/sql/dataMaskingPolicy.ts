import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A database data masking policy.
 *
 * Uses Azure REST API version 2021-11-01. In version 1.x of the Azure Native provider, it used API version 2014-04-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export class DataMaskingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DataMaskingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataMaskingPolicy {
        return new DataMaskingPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:DataMaskingPolicy';

    /**
     * Returns true if the given object is an instance of DataMaskingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataMaskingPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataMaskingPolicy.__pulumiType;
    }

    /**
     * The list of the application principals. This is a legacy parameter and is no longer used.
     */
    public /*out*/ readonly applicationPrincipals!: pulumi.Output<string>;
    /**
     * The state of the data masking policy.
     */
    public readonly dataMaskingState!: pulumi.Output<string>;
    /**
     * The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
     */
    public readonly exemptPrincipals!: pulumi.Output<string | undefined>;
    /**
     * The kind of Data Masking Policy. Metadata, used for Azure portal.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The location of the data masking policy.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The masking level. This is a legacy parameter and is no longer used.
     */
    public /*out*/ readonly maskingLevel!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataMaskingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataMaskingPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataMaskingState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataMaskingState'");
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
            resourceInputs["dataMaskingPolicyName"] = args ? args.dataMaskingPolicyName : undefined;
            resourceInputs["dataMaskingState"] = args ? args.dataMaskingState : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["exemptPrincipals"] = args ? args.exemptPrincipals : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["applicationPrincipals"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maskingLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationPrincipals"] = undefined /*out*/;
            resourceInputs["dataMaskingState"] = undefined /*out*/;
            resourceInputs["exemptPrincipals"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maskingLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20140401:DataMaskingPolicy" }, { type: "azure-native:sql/v20211101:DataMaskingPolicy" }, { type: "azure-native:sql/v20220201preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20220501preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20220801preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20221101preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20230201preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20230501preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20230801:DataMaskingPolicy" }, { type: "azure-native:sql/v20230801preview:DataMaskingPolicy" }, { type: "azure-native:sql/v20240501preview:DataMaskingPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataMaskingPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataMaskingPolicy resource.
 */
export interface DataMaskingPolicyArgs {
    /**
     * The name of the database for which the data masking policy applies.
     */
    dataMaskingPolicyName?: pulumi.Input<string>;
    /**
     * The state of the data masking policy.
     */
    dataMaskingState: pulumi.Input<types.enums.DataMaskingState>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
     */
    exemptPrincipals?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}