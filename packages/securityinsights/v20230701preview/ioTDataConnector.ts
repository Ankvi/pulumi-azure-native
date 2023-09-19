import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents IoT data connector.
 */
export class IoTDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing IoTDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IoTDataConnector {
        return new IoTDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230701preview:IoTDataConnector';

    /**
     * Returns true if the given object is an instance of IoTDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IoTDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IoTDataConnector.__pulumiType;
    }

    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.AlertsDataTypeOfDataConnectorResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'IOT'.
     */
    public readonly kind!: pulumi.Output<"IOT">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The subscription id to connect to, and get the data from.
     */
    public readonly subscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IoTDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoTDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["kind"] = "IOT";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:IoTDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20200101:IoTDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20211001:IoTDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220801:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20221101:IoTDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230201:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:IoTDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IoTDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IoTDataConnector resource.
 */
export interface IoTDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes?: pulumi.Input<types.inputs.AlertsDataTypeOfDataConnectorArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'IOT'.
     */
    kind: pulumi.Input<"IOT">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subscription id to connect to, and get the data from.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
