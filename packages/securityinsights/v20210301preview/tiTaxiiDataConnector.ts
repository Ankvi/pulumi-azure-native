import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Data connector to pull Threat intelligence data from TAXII 2.0/2.1 server
 */
export class TiTaxiiDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing TiTaxiiDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TiTaxiiDataConnector {
        return new TiTaxiiDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights/v20210301preview:TiTaxiiDataConnector';

    /**
     * Returns true if the given object is an instance of TiTaxiiDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TiTaxiiDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TiTaxiiDataConnector.__pulumiType;
    }

    /**
     * The collection id of the TAXII server.
     */
    public readonly collectionId!: pulumi.Output<string | undefined>;
    /**
     * The available data types for Threat Intelligence TAXII data connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.securityinsights.v20210301preview.TiTaxiiDataConnectorDataTypesResponse>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The friendly name for the TAXII server.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'ThreatIntelligenceTaxii'.
     */
    public readonly kind!: pulumi.Output<"ThreatIntelligenceTaxii">;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The password for the TAXII server.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The polling frequency for the TAXII server.
     */
    public readonly pollingFrequency!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.securityinsights.v20210301preview.SystemDataResponse>;
    /**
     * The lookback period for the TAXII server.
     */
    public readonly taxiiLookbackPeriod!: pulumi.Output<string | undefined>;
    /**
     * The API root for the TAXII server.
     */
    public readonly taxiiServer!: pulumi.Output<string | undefined>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    public readonly tenantId!: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The userName for the TAXII server.
     */
    public readonly userName!: pulumi.Output<string | undefined>;
    /**
     * The workspace id.
     */
    public readonly workspaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a TiTaxiiDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TiTaxiiDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataTypes'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.operationalInsightsResourceProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operationalInsightsResourceProvider'");
            }
            if ((!args || args.pollingFrequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pollingFrequency'");
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
            resourceInputs["collectionId"] = args ? args.collectionId : undefined;
            resourceInputs["dataConnectorId"] = args ? args.dataConnectorId : undefined;
            resourceInputs["dataTypes"] = args ? args.dataTypes : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["kind"] = "ThreatIntelligenceTaxii";
            resourceInputs["operationalInsightsResourceProvider"] = args ? args.operationalInsightsResourceProvider : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["pollingFrequency"] = args ? args.pollingFrequency : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["taxiiLookbackPeriod"] = args ? args.taxiiLookbackPeriod : undefined;
            resourceInputs["taxiiServer"] = args ? args.taxiiServer : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["collectionId"] = undefined /*out*/;
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["pollingFrequency"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["taxiiLookbackPeriod"] = undefined /*out*/;
            resourceInputs["taxiiServer"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20190101preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20200101:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20211001:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220801:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20221101:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230201:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:TiTaxiiDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TiTaxiiDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TiTaxiiDataConnector resource.
 */
export interface TiTaxiiDataConnectorArgs {
    /**
     * The collection id of the TAXII server.
     */
    collectionId?: pulumi.Input<string>;
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for Threat Intelligence TAXII data connector.
     */
    dataTypes: pulumi.Input<types.inputs.securityinsights.v20210301preview.TiTaxiiDataConnectorDataTypesArgs>;
    /**
     * The friendly name for the TAXII server.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The kind of the data connector
     * Expected value is 'ThreatIntelligenceTaxii'.
     */
    kind: pulumi.Input<"ThreatIntelligenceTaxii">;
    /**
     * The namespace of workspaces resource provider- Microsoft.OperationalInsights.
     */
    operationalInsightsResourceProvider: pulumi.Input<string>;
    /**
     * The password for the TAXII server.
     */
    password?: pulumi.Input<string>;
    /**
     * The polling frequency for the TAXII server.
     */
    pollingFrequency: pulumi.Input<string | types.enums.v20210301preview.PollingFrequency>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The lookback period for the TAXII server.
     */
    taxiiLookbackPeriod?: pulumi.Input<string>;
    /**
     * The API root for the TAXII server.
     */
    taxiiServer?: pulumi.Input<string>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    tenantId: pulumi.Input<string>;
    /**
     * The userName for the TAXII server.
     */
    userName?: pulumi.Input<string>;
    /**
     * The workspace id.
     */
    workspaceId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
