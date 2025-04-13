import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Single resource Id's metadata.
 */
export interface ResourceMetadataArgs {
    /**
     * Account Id. For example - the AWS account id.
     */
    accountId?: pulumi.Input<string>;
    /**
     * Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
     */
    resourceId: pulumi.Input<string>;
    /**
     * Resource kind.
     */
    resourceKind?: pulumi.Input<string>;
    /**
     * Resource Origin.
     */
    resourceOrigin?: pulumi.Input<string | enums.ResourceOrigin>;
    /**
     * Resource type. e.g. "Microsoft.Compute/virtualMachines"
     */
    resourceType?: pulumi.Input<string>;
}

/**
 * Scoping answer.
 */
export interface ScopingAnswerArgs {
    /**
     * Question answer value list.
     */
    answers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Question id.
     */
    questionId: pulumi.Input<string>;
}

/**
 * The information of 'bring your own storage' account binding to the report
 */
export interface StorageInfoArgs {
    /**
     * 'bring your own storage' account name
     */
    accountName?: pulumi.Input<string>;
    /**
     * The region of 'bring your own storage' account
     */
    location?: pulumi.Input<string>;
    /**
     * The resourceGroup which 'bring your own storage' account belongs to
     */
    resourceGroup?: pulumi.Input<string>;
    /**
     * The subscription id which 'bring your own storage' account belongs to
     */
    subscriptionId?: pulumi.Input<string>;
}
