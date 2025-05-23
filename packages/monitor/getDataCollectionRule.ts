import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of ARM tracked top level resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionRule(args: GetDataCollectionRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetDataCollectionRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getDataCollectionRule", {
        "dataCollectionRuleName": args.dataCollectionRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataCollectionRuleArgs {
    /**
     * The name of the data collection rule. The name is case insensitive.
     */
    dataCollectionRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of ARM tracked top level resource.
 */
export interface GetDataCollectionRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource ID of the data collection endpoint that this rule can be used with.
     */
    readonly dataCollectionEndpointId?: string;
    /**
     * The specification of data flows.
     */
    readonly dataFlows?: types.outputs.DataFlowResponse[];
    /**
     * The specification of data sources. 
     * This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint.
     */
    readonly dataSources?: types.outputs.DataCollectionRuleResponseDataSources;
    /**
     * Description of the data collection rule.
     */
    readonly description?: string;
    /**
     * The specification of destinations.
     */
    readonly destinations?: types.outputs.DataCollectionRuleResponseDestinations;
    /**
     * Resource entity tag (ETag).
     */
    readonly etag: string;
    /**
     * Fully qualified ID of the resource.
     */
    readonly id: string;
    /**
     * Managed service identity of the resource.
     */
    readonly identity?: types.outputs.DataCollectionRuleResourceResponseIdentity;
    /**
     * The immutable ID of this data collection rule. This property is READ-ONLY.
     */
    readonly immutableId: string;
    /**
     * The kind of the resource.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives.
     */
    readonly location: string;
    /**
     * Metadata about the resource
     */
    readonly metadata: types.outputs.DataCollectionRuleResponseMetadata;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Declaration of custom streams used in this rule.
     */
    readonly streamDeclarations?: {[key: string]: types.outputs.StreamDeclarationResponse};
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.DataCollectionRuleResourceResponseSystemData;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Definition of ARM tracked top level resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionRuleOutput(args: GetDataCollectionRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataCollectionRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getDataCollectionRule", {
        "dataCollectionRuleName": args.dataCollectionRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDataCollectionRuleOutputArgs {
    /**
     * The name of the data collection rule. The name is case insensitive.
     */
    dataCollectionRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}