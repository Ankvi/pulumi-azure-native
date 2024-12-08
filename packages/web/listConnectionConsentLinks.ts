import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the consent links of a connection
 * Azure REST API version: 2016-06-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function listConnectionConsentLinks(args: ListConnectionConsentLinksArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionConsentLinksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listConnectionConsentLinks", {
        "connectionName": args.connectionName,
        "parameters": args.parameters,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface ListConnectionConsentLinksArgs {
    /**
     * Connection name
     */
    connectionName: string;
    /**
     * Collection of resources
     */
    parameters?: types.inputs.ConsentLinkParameterDefinition[];
    /**
     * The resource group
     */
    resourceGroupName: string;
    /**
     * Subscription Id
     */
    subscriptionId?: string;
}

/**
 * Collection of consent links
 */
export interface ListConnectionConsentLinksResult {
    /**
     * Collection of resources
     */
    readonly value?: types.outputs.ConsentLinkDefinitionResponse[];
}
/**
 * Lists the consent links of a connection
 * Azure REST API version: 2016-06-01.
 *
 * Other available API versions: 2015-08-01-preview.
 */
export function listConnectionConsentLinksOutput(args: ListConnectionConsentLinksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListConnectionConsentLinksResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:listConnectionConsentLinks", {
        "connectionName": args.connectionName,
        "parameters": args.parameters,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
    }, opts);
}

export interface ListConnectionConsentLinksOutputArgs {
    /**
     * Connection name
     */
    connectionName: pulumi.Input<string>;
    /**
     * Collection of resources
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.ConsentLinkParameterDefinitionArgs>[]>;
    /**
     * The resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
}