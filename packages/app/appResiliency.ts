import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Configuration to setup App Resiliency
 *
 * Uses Azure REST API version 2024-10-02-preview. In version 2.x of the Azure Native provider, it used API version 2023-08-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AppResiliency extends pulumi.CustomResource {
    /**
     * Get an existing AppResiliency resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AppResiliency {
        return new AppResiliency(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:AppResiliency';

    /**
     * Returns true if the given object is an instance of AppResiliency.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppResiliency {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppResiliency.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Policy that defines circuit breaker conditions
     */
    public readonly circuitBreakerPolicy!: pulumi.Output<types.outputs.CircuitBreakerPolicyResponse | undefined>;
    /**
     * Defines parameters for http connection pooling
     */
    public readonly httpConnectionPool!: pulumi.Output<types.outputs.HttpConnectionPoolResponse | undefined>;
    /**
     * Policy that defines http request retry conditions
     */
    public readonly httpRetryPolicy!: pulumi.Output<types.outputs.HttpRetryPolicyResponse | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Defines parameters for tcp connection pooling
     */
    public readonly tcpConnectionPool!: pulumi.Output<types.outputs.TcpConnectionPoolResponse | undefined>;
    /**
     * Policy that defines tcp request retry conditions
     */
    public readonly tcpRetryPolicy!: pulumi.Output<types.outputs.TcpRetryPolicyResponse | undefined>;
    /**
     * Policy to set request timeouts
     */
    public readonly timeoutPolicy!: pulumi.Output<types.outputs.TimeoutPolicyResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AppResiliency resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppResiliencyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["circuitBreakerPolicy"] = args ? args.circuitBreakerPolicy : undefined;
            resourceInputs["httpConnectionPool"] = args ? args.httpConnectionPool : undefined;
            resourceInputs["httpRetryPolicy"] = args ? args.httpRetryPolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tcpConnectionPool"] = args ? args.tcpConnectionPool : undefined;
            resourceInputs["tcpRetryPolicy"] = args ? args.tcpRetryPolicy : undefined;
            resourceInputs["timeoutPolicy"] = args ? args.timeoutPolicy : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["circuitBreakerPolicy"] = undefined /*out*/;
            resourceInputs["httpConnectionPool"] = undefined /*out*/;
            resourceInputs["httpRetryPolicy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tcpConnectionPool"] = undefined /*out*/;
            resourceInputs["tcpRetryPolicy"] = undefined /*out*/;
            resourceInputs["timeoutPolicy"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20230801preview:AppResiliency" }, { type: "azure-native:app/v20231102preview:AppResiliency" }, { type: "azure-native:app/v20240202preview:AppResiliency" }, { type: "azure-native:app/v20240802preview:AppResiliency" }, { type: "azure-native:app/v20241002preview:AppResiliency" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AppResiliency.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AppResiliency resource.
 */
export interface AppResiliencyArgs {
    /**
     * Name of the Container App.
     */
    appName: pulumi.Input<string>;
    /**
     * Policy that defines circuit breaker conditions
     */
    circuitBreakerPolicy?: pulumi.Input<types.inputs.CircuitBreakerPolicyArgs>;
    /**
     * Defines parameters for http connection pooling
     */
    httpConnectionPool?: pulumi.Input<types.inputs.HttpConnectionPoolArgs>;
    /**
     * Policy that defines http request retry conditions
     */
    httpRetryPolicy?: pulumi.Input<types.inputs.HttpRetryPolicyArgs>;
    /**
     * Name of the resiliency policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Defines parameters for tcp connection pooling
     */
    tcpConnectionPool?: pulumi.Input<types.inputs.TcpConnectionPoolArgs>;
    /**
     * Policy that defines tcp request retry conditions
     */
    tcpRetryPolicy?: pulumi.Input<types.inputs.TcpRetryPolicyArgs>;
    /**
     * Policy to set request timeouts
     */
    timeoutPolicy?: pulumi.Input<types.inputs.TimeoutPolicyArgs>;
}