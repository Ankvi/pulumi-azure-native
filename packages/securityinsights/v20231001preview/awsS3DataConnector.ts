import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Amazon Web Services S3 data connector.
 */
export class AwsS3DataConnector extends pulumi.CustomResource {
    /**
     * Get an existing AwsS3DataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AwsS3DataConnector {
        return new AwsS3DataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20231001preview:AwsS3DataConnector';

    /**
     * Returns true if the given object is an instance of AwsS3DataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsS3DataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsS3DataConnector.__pulumiType;
    }

    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.AwsS3DataConnectorDataTypesResponse>;
    /**
     * The logs destination table name in LogAnalytics.
     */
    public readonly destinationTable!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesS3'.
     */
    public readonly kind!: pulumi.Output<"AmazonWebServicesS3">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Aws Role Arn that is used to access the Aws account.
     */
    public readonly roleArn!: pulumi.Output<string>;
    /**
     * The AWS sqs urls for the connector.
     */
    public readonly sqsUrls!: pulumi.Output<string[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AwsS3DataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsS3DataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataTypes'");
            }
            if ((!args || args.destinationTable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationTable'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            if ((!args || args.sqsUrls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqsUrls'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["destinationTable"] = args ? args.destinationTable : undefined;
            resourceInputs["kind"] = "AmazonWebServicesS3";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["sqsUrls"] = args ? args.sqsUrls : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["destinationTable"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["roleArn"] = undefined /*out*/;
            resourceInputs["sqsUrls"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20190101preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20200101:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20210301preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20210901preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20211001:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20211001preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220101preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220401preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220501preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220601preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220701preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220801:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220801preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20220901preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20221001preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20221101:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20221101preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20221201preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230201:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230201preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230301preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230401preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230501preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AwsS3DataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AwsS3DataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AwsS3DataConnector resource.
 */
export interface AwsS3DataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes: pulumi.Input<types.inputs.AwsS3DataConnectorDataTypesArgs>;
    /**
     * The logs destination table name in LogAnalytics.
     */
    destinationTable: pulumi.Input<string>;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesS3'.
     */
    kind: pulumi.Input<"AmazonWebServicesS3">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Aws Role Arn that is used to access the Aws account.
     */
    roleArn: pulumi.Input<string>;
    /**
     * The AWS sqs urls for the connector.
     */
    sqsUrls: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}