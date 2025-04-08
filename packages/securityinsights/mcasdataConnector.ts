import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents MCAS (Microsoft Cloud App Security) data connector.
 *
 * Uses Azure REST API version 2024-09-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 */
export class MCASDataConnector extends pulumi.CustomResource {
    /**
     * Get an existing MCASDataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MCASDataConnector {
        return new MCASDataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:MCASDataConnector';

    /**
     * Returns true if the given object is an instance of MCASDataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MCASDataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MCASDataConnector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The available data types for the connector.
     */
    public readonly dataTypes!: pulumi.Output<types.outputs.MCASDataConnectorDataTypesResponse | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftCloudAppSecurity'.
     */
    public readonly kind!: pulumi.Output<"MicrosoftCloudAppSecurity">;
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
    public readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MCASDataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MCASDataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["kind"] = "MicrosoftCloudAppSecurity";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataTypes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20190101preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20200101:MCASDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20210301preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20210901preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20211001:MCASDataConnector" }, { type: "azure-native:securityinsights/v20211001preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220101preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220401preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220501preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220601preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220701preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220801:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220801preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20220901preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20221001preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20221101:MCASDataConnector" }, { type: "azure-native:securityinsights/v20221101preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20221201preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230201:AADDataConnector" }, { type: "azure-native:securityinsights/v20230201:AATPDataConnector" }, { type: "azure-native:securityinsights/v20230201:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230201:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230201:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230201:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20230201:TIDataConnector" }, { type: "azure-native:securityinsights/v20230201preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230301preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230401preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230501preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230601preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20230601preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20230601preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230701preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20230701preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20230701preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230801preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20230801preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20230801preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20230901preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20230901preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20230901preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20231001preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20231001preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20231001preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20231101:AADDataConnector" }, { type: "azure-native:securityinsights/v20231101:AATPDataConnector" }, { type: "azure-native:securityinsights/v20231101:ASCDataConnector" }, { type: "azure-native:securityinsights/v20231101:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231101:MCASDataConnector" }, { type: "azure-native:securityinsights/v20231101:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231101:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20231101:TIDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20231201preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20231201preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20231201preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20240101preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20240101preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20240101preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20240301:AADDataConnector" }, { type: "azure-native:securityinsights/v20240301:AATPDataConnector" }, { type: "azure-native:securityinsights/v20240301:ASCDataConnector" }, { type: "azure-native:securityinsights/v20240301:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240301:MCASDataConnector" }, { type: "azure-native:securityinsights/v20240301:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240301:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20240301:TIDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20240401preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20240401preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20240401preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20240901:AADDataConnector" }, { type: "azure-native:securityinsights/v20240901:AATPDataConnector" }, { type: "azure-native:securityinsights/v20240901:ASCDataConnector" }, { type: "azure-native:securityinsights/v20240901:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20240901:MCASDataConnector" }, { type: "azure-native:securityinsights/v20240901:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20240901:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20240901:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20240901:PremiumMicrosoftDefenderForThreatIntelligence" }, { type: "azure-native:securityinsights/v20240901:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20240901:TIDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:AADDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:AATPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:ASCDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:AwsS3DataConnector" }, { type: "azure-native:securityinsights/v20241001preview:CodelessApiPollingDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:CodelessUiDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:Dynamics365DataConnector" }, { type: "azure-native:securityinsights/v20241001preview:GCPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:IoTDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MDATPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MSTIDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MTPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:MicrosoftPurviewInformationProtectionDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:Office365ProjectDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:OfficeATPDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:OfficeDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:OfficeIRMDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:OfficePowerBIDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:PurviewAuditDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:RestApiPollerDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:TIDataConnector" }, { type: "azure-native:securityinsights/v20241001preview:TiTaxiiDataConnector" }, { type: "azure-native:securityinsights/v20250101preview:MCASDataConnector" }, { type: "azure-native:securityinsights/v20250301:MCASDataConnector" }, { type: "azure-native:securityinsights:AADDataConnector" }, { type: "azure-native:securityinsights:AATPDataConnector" }, { type: "azure-native:securityinsights:ASCDataConnector" }, { type: "azure-native:securityinsights:AwsCloudTrailDataConnector" }, { type: "azure-native:securityinsights:MDATPDataConnector" }, { type: "azure-native:securityinsights:OfficeDataConnector" }, { type: "azure-native:securityinsights:TIDataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MCASDataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MCASDataConnector resource.
 */
export interface MCASDataConnectorArgs {
    /**
     * Connector ID
     */
    dataConnectorId?: pulumi.Input<string>;
    /**
     * The available data types for the connector.
     */
    dataTypes?: pulumi.Input<types.inputs.MCASDataConnectorDataTypesArgs>;
    /**
     * The kind of the data connector
     * Expected value is 'MicrosoftCloudAppSecurity'.
     */
    kind: pulumi.Input<"MicrosoftCloudAppSecurity">;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tenant id to connect to, and get the data from.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}