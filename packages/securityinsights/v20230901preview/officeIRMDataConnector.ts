import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents OfficeIRM (Microsoft Insider Risk Management) data connector.
 */
export class OfficeIRMDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing OfficeIRMDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OfficeIRMDataConnector {
        return new OfficeIRMDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20230901preview:OfficeIRMDataConnector';

    /**
     * Returns true if the given object is an instance of OfficeIRMDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OfficeIRMDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OfficeIRMDataConnector.__pulumiType;
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
     * Expected value is 'OfficeIRM'.
     */
    public readonly kind!: pulumi.Output<"OfficeIRM">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OfficeIRMDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OfficeIRMDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["kind"] = "OfficeIRM";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
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
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20200101:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20211001:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220801:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20221101:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230201:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:OfficeIRMDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OfficeIRMDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OfficeIRMDataConnector resource.
 */
export interface OfficeIRMDataConnectorArgs {
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
     * Expected value is 'OfficeIRM'.
     */
    kind: pulumi.Input<"OfficeIRM">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    tenantId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}