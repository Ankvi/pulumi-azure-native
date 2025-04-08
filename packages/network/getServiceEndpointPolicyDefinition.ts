import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the specified service endpoint policy definitions from service endpoint policy.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServiceEndpointPolicyDefinition(args: GetServiceEndpointPolicyDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointPolicyDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getServiceEndpointPolicyDefinition", {
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointPolicyDefinitionName": args.serviceEndpointPolicyDefinitionName,
        "serviceEndpointPolicyName": args.serviceEndpointPolicyName,
    }, opts);
}

export interface GetServiceEndpointPolicyDefinitionArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the service endpoint policy definition name.
     */
    serviceEndpointPolicyDefinitionName: string;
    /**
     * The name of the service endpoint policy name.
     */
    serviceEndpointPolicyName: string;
}

/**
 * Service Endpoint policy definitions.
 */
export interface GetServiceEndpointPolicyDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A description for this rule. Restricted to 140 chars.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the service endpoint policy definition resource.
     */
    readonly provisioningState: string;
    /**
     * Service endpoint name.
     */
    readonly service?: string;
    /**
     * A list of service resources.
     */
    readonly serviceResources?: string[];
    /**
     * The type of the resource.
     */
    readonly type?: string;
}
/**
 * Get the specified service endpoint policy definitions from service endpoint policy.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServiceEndpointPolicyDefinitionOutput(args: GetServiceEndpointPolicyDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceEndpointPolicyDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getServiceEndpointPolicyDefinition", {
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointPolicyDefinitionName": args.serviceEndpointPolicyDefinitionName,
        "serviceEndpointPolicyName": args.serviceEndpointPolicyName,
    }, opts);
}

export interface GetServiceEndpointPolicyDefinitionOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy definition name.
     */
    serviceEndpointPolicyDefinitionName: pulumi.Input<string>;
    /**
     * The name of the service endpoint policy name.
     */
    serviceEndpointPolicyName: pulumi.Input<string>;
}