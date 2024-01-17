import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of a storage account’s Table service.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01.
 *
 * Other available API versions: 2023-01-01.
 */
export class TableServiceProperties extends pulumi.CustomResource {
    /**
     * Get an existing TableServiceProperties resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TableServiceProperties {
        return new TableServiceProperties(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:TableServiceProperties';

    /**
     * Returns true if the given object is an instance of TableServiceProperties.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TableServiceProperties {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TableServiceProperties.__pulumiType;
    }

    /**
     * Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
     */
    public readonly cors!: pulumi.Output<types.outputs.CorsRulesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TableServiceProperties resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableServicePropertiesArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tableServiceName"] = args ? args.tableServiceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20190601:TableServiceProperties" }, { type: "azure-native:storage/v20200801preview:TableServiceProperties" }, { type: "azure-native:storage/v20210101:TableServiceProperties" }, { type: "azure-native:storage/v20210201:TableServiceProperties" }, { type: "azure-native:storage/v20210401:TableServiceProperties" }, { type: "azure-native:storage/v20210601:TableServiceProperties" }, { type: "azure-native:storage/v20210801:TableServiceProperties" }, { type: "azure-native:storage/v20210901:TableServiceProperties" }, { type: "azure-native:storage/v20220501:TableServiceProperties" }, { type: "azure-native:storage/v20220901:TableServiceProperties" }, { type: "azure-native:storage/v20230101:TableServiceProperties" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TableServiceProperties.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TableServiceProperties resource.
 */
export interface TableServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
     */
    cors?: pulumi.Input<types.inputs.CorsRulesArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Table Service within the specified storage account. Table Service Name must be 'default'
     */
    tableServiceName?: pulumi.Input<string>;
}