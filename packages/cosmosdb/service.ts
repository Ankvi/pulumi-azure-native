import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties for the database account.
 *
 * Uses Azure REST API version 2024-11-15.
 *
 * Other available API versions: 2021-04-01-preview, 2021-07-01-preview, 2021-10-15-preview, 2021-11-15-preview, 2022-02-15-preview, 2022-05-15, 2022-05-15-preview, 2022-08-15, 2022-08-15-preview, 2022-11-15, 2022-11-15-preview, 2023-03-01-preview, 2023-03-15, 2023-03-15-preview, 2023-04-15, 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Services response resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.DataTransferServiceResourcePropertiesResponse | types.outputs.GraphAPIComputeServiceResourcePropertiesResponse | types.outputs.MaterializedViewsBuilderServiceResourcePropertiesResponse | types.outputs.SqlDedicatedGatewayServiceResourcePropertiesResponse>;
    /**
     * The type of Azure resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20210401preview:Service" }, { type: "azure-native:cosmosdb/v20210701preview:Service" }, { type: "azure-native:cosmosdb/v20211015preview:Service" }, { type: "azure-native:cosmosdb/v20211115preview:Service" }, { type: "azure-native:cosmosdb/v20220215preview:Service" }, { type: "azure-native:cosmosdb/v20220515:Service" }, { type: "azure-native:cosmosdb/v20220515preview:Service" }, { type: "azure-native:cosmosdb/v20220815:Service" }, { type: "azure-native:cosmosdb/v20220815preview:Service" }, { type: "azure-native:cosmosdb/v20221115:Service" }, { type: "azure-native:cosmosdb/v20221115preview:Service" }, { type: "azure-native:cosmosdb/v20230301preview:Service" }, { type: "azure-native:cosmosdb/v20230315:Service" }, { type: "azure-native:cosmosdb/v20230315preview:Service" }, { type: "azure-native:cosmosdb/v20230415:Service" }, { type: "azure-native:cosmosdb/v20230915:Service" }, { type: "azure-native:cosmosdb/v20230915preview:Service" }, { type: "azure-native:cosmosdb/v20231115:Service" }, { type: "azure-native:cosmosdb/v20231115preview:Service" }, { type: "azure-native:cosmosdb/v20240215preview:Service" }, { type: "azure-native:cosmosdb/v20240515:Service" }, { type: "azure-native:cosmosdb/v20240515preview:Service" }, { type: "azure-native:cosmosdb/v20240815:Service" }, { type: "azure-native:cosmosdb/v20240901preview:Service" }, { type: "azure-native:cosmosdb/v20241115:Service" }, { type: "azure-native:cosmosdb/v20241201preview:Service" }, { type: "azure-native:documentdb/v20230415:Service" }, { type: "azure-native:documentdb/v20230915:Service" }, { type: "azure-native:documentdb/v20230915preview:Service" }, { type: "azure-native:documentdb/v20231115:Service" }, { type: "azure-native:documentdb/v20231115preview:Service" }, { type: "azure-native:documentdb/v20240215preview:Service" }, { type: "azure-native:documentdb/v20240515:Service" }, { type: "azure-native:documentdb/v20240515preview:Service" }, { type: "azure-native:documentdb/v20240815:Service" }, { type: "azure-native:documentdb/v20240901preview:Service" }, { type: "azure-native:documentdb/v20241115:Service" }, { type: "azure-native:documentdb/v20241201preview:Service" }, { type: "azure-native:documentdb:Service" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Properties in ServiceResourceCreateUpdateParameters.
     */
    properties?: pulumi.Input<types.inputs.DataTransferServiceResourceCreateUpdatePropertiesArgs | types.inputs.GraphAPIComputeServiceResourceCreateUpdatePropertiesArgs | types.inputs.MaterializedViewsBuilderServiceResourceCreateUpdatePropertiesArgs | types.inputs.SqlDedicatedGatewayServiceResourceCreateUpdatePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB service name.
     */
    serviceName?: pulumi.Input<string>;
}