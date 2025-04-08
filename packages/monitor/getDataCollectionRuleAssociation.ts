import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of generic ARM proxy resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionRuleAssociation(args: GetDataCollectionRuleAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetDataCollectionRuleAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:monitor:getDataCollectionRuleAssociation", {
        "associationName": args.associationName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDataCollectionRuleAssociationArgs {
    /**
     * The name of the association. The name is case insensitive.
     */
    associationName: string;
    /**
     * The identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Definition of generic ARM proxy resource.
 */
export interface GetDataCollectionRuleAssociationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource ID of the data collection endpoint that is to be associated.
     */
    readonly dataCollectionEndpointId?: string;
    /**
     * The resource ID of the data collection rule that is to be associated.
     */
    readonly dataCollectionRuleId?: string;
    /**
     * Description of the association.
     */
    readonly description?: string;
    /**
     * Resource entity tag (ETag).
     */
    readonly etag: string;
    /**
     * Fully qualified ID of the resource.
     */
    readonly id: string;
    /**
     * Metadata about the resource
     */
    readonly metadata: types.outputs.DataCollectionRuleAssociationResponseMetadata;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.DataCollectionRuleAssociationProxyOnlyResourceResponseSystemData;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Definition of generic ARM proxy resource.
 *
 * Uses Azure REST API version 2022-06-01.
 */
export function getDataCollectionRuleAssociationOutput(args: GetDataCollectionRuleAssociationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDataCollectionRuleAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:monitor:getDataCollectionRuleAssociation", {
        "associationName": args.associationName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetDataCollectionRuleAssociationOutputArgs {
    /**
     * The name of the association. The name is case insensitive.
     */
    associationName: pulumi.Input<string>;
    /**
     * The identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}