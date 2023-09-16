import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Lists connection keys.
 * Azure REST API version: 2015-08-01-preview.
 */
export function listConnectionKeys(args: ListConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:listConnectionKeys", {
        "connectionName": args.connectionName,
        "id": args.id,
        "kind": args.kind,
        "location": args.location,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "type": args.type,
        "validityTimeSpan": args.validityTimeSpan,
    }, opts);
}

export interface ListConnectionKeysArgs {
    /**
     * The connection name.
     */
    connectionName: string;
    /**
     * Resource Id
     */
    id?: string;
    /**
     * Kind of resource
     */
    kind?: string;
    /**
     * Resource Location
     */
    location?: string;
    /**
     * Resource Name
     */
    name?: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
    /**
     * Resource tags
     */
    tags?: {[key: string]: string};
    /**
     * Resource type
     */
    type?: string;
    /**
     * time span for how long the keys will be valid
     */
    validityTimeSpan?: string;
}

export interface ListConnectionKeysResult {
    /**
     * Connection Key
     */
    readonly connectionKey?: string;
    /**
     * Tokens/Claim
     */
    readonly parameterValues?: {[key: string]: any};
}
/**
 * Lists connection keys.
 * Azure REST API version: 2015-08-01-preview.
 */
export function listConnectionKeysOutput(args: ListConnectionKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListConnectionKeysResult> {
    return pulumi.output(args).apply((a: any) => listConnectionKeys(a, opts))
}

export interface ListConnectionKeysOutputArgs {
    /**
     * The connection name.
     */
    connectionName: pulumi.Input<string>;
    /**
     * Resource Id
     */
    id?: pulumi.Input<string>;
    /**
     * Kind of resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Resource Location
     */
    location?: pulumi.Input<string>;
    /**
     * Resource Name
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Resource type
     */
    type?: pulumi.Input<string>;
    /**
     * time span for how long the keys will be valid
     */
    validityTimeSpan?: pulumi.Input<string>;
}
