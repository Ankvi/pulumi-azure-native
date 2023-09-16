import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Details of a specific cloud account connector
 */
export function getConnector(args: GetConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security/v20200101preview:getConnector", {
        "connectorName": args.connectorName,
    }, opts);
}

export interface GetConnectorArgs {
    /**
     * Name of the cloud account connector
     */
    connectorName: string;
}

/**
 * The connector setting
 */
export interface GetConnectorResult {
    /**
     * Settings for authentication management, these settings are relevant only for the cloud connector.
     */
    readonly authenticationDetails?: types.outputs.security.v20200101preview.AwAssumeRoleAuthenticationDetailsPropertiesResponse | types.outputs.security.v20200101preview.AwsCredsAuthenticationDetailsPropertiesResponse | types.outputs.security.v20200101preview.GcpCredentialsDetailsPropertiesResponse;
    /**
     * Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).
     */
    readonly hybridComputeSettings?: types.outputs.security.v20200101preview.HybridComputeSettingsPropertiesResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Details of a specific cloud account connector
 */
export function getConnectorOutput(args: GetConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorResult> {
    return pulumi.output(args).apply((a: any) => getConnector(a, opts))
}

export interface GetConnectorOutputArgs {
    /**
     * Name of the cloud account connector
     */
    connectorName: pulumi.Input<string>;
}
