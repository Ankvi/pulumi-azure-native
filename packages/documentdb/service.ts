import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Properties for the database account.
 * Azure REST API version: 2023-04-15. Prior API version in Azure Native 1.x: 2021-04-01-preview
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
    public static readonly __pulumiType = 'azure-native:documentdb:Service';

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
     * The name of the database account.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Services response resource.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.documentdb.DataTransferServiceResourcePropertiesResponse | types.outputs.documentdb.GraphAPIComputeServiceResourcePropertiesResponse | types.outputs.documentdb.MaterializedViewsBuilderServiceResourcePropertiesResponse | types.outputs.documentdb.SqlDedicatedGatewayServiceResourcePropertiesResponse>;
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
            resourceInputs["instanceCount"] = args ? args.instanceCount : undefined;
            resourceInputs["instanceSize"] = args ? args.instanceSize : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceType"] = args ? args.serviceType : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb/v20210401preview:Service" }, { type: "azure-native:documentdb/v20210701preview:Service" }, { type: "azure-native:documentdb/v20211015preview:Service" }, { type: "azure-native:documentdb/v20211115preview:Service" }, { type: "azure-native:documentdb/v20220215preview:Service" }, { type: "azure-native:documentdb/v20220515:Service" }, { type: "azure-native:documentdb/v20220515preview:Service" }, { type: "azure-native:documentdb/v20220815:Service" }, { type: "azure-native:documentdb/v20220815preview:Service" }, { type: "azure-native:documentdb/v20221115:Service" }, { type: "azure-native:documentdb/v20221115preview:Service" }, { type: "azure-native:documentdb/v20230301preview:Service" }, { type: "azure-native:documentdb/v20230315:Service" }, { type: "azure-native:documentdb/v20230315preview:Service" }, { type: "azure-native:documentdb/v20230415:Service" }] };
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
     * Instance count for the service.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Instance type for the service.
     */
    instanceSize?: pulumi.Input<string | types.enums.ServiceSize>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB service name.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * ServiceType for the service.
     */
    serviceType?: pulumi.Input<string | types.enums.ServiceType>;
}
