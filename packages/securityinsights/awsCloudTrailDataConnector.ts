import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Amazon Web Services CloudTrail data connector.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-01-01.
 */
export class AwsCloudTrailDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing AwsCloudTrailDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AwsCloudTrailDataConnector {
        return new AwsCloudTrailDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:AwsCloudTrailDataConnector';

    /**
     * Returns true if the given object is an instance of AwsCloudTrailDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsCloudTrailDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsCloudTrailDataConnector.__pulumiType;
    }

    /**
     * The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
     */
    public readonly awsRoleArn!: pulumi.Output<string | undefined>;
    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.AwsCloudTrailDataConnectorDataTypesResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesCloudTrail'.
     */
    public readonly kind!: pulumi.Output<"AmazonWebServicesCloudTrail">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AwsCloudTrailDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsCloudTrailDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["awsRoleArn"] = args ? args.awsRoleArn : undefined;
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["kind"] = "AmazonWebServicesCloudTrail";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["awsRoleArn"] = undefined /*out*/;
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20200101:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20211001:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220801:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20221101:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230201:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231101:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240301:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240901:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20250101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20250301:AwsCloudTrailDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AwsCloudTrailDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AwsCloudTrailDataConnector resource.
 */
export interface AwsCloudTrailDataConnectorArgs {
    /**
     * The Aws Role Arn (with CloudTrailReadOnly policy) that is used to access the Aws account.
     */
    awsRoleArn?: pulumi.Input<string>;
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes?: pulumi.Input<types.inputs.AwsCloudTrailDataConnectorDataTypesArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'AmazonWebServicesCloudTrail'.
     */
    kind: pulumi.Input<"AmazonWebServicesCloudTrail">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}